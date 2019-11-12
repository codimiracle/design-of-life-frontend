import Panel from './ui/panel';
import Moment from 'moment';

const RecentItem = (props) => {
    return (
        <li>
            <div className="time-line">
                <div className="dot"></div>
                <div className="line"></div>
            </div>
            <div>
                <div className="recent-time">{Moment(props.recent).fromNow()}</div>
                <div className="recent-desc">You finish...</div>
            </div>
            <style jsx>{`
                li {
                    padding-left: 28px;
                    position: relative;
                }
                .time-line {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                }
                .time-line .dot {
                    width: 12px;
                    height: 12px;
                    background-color: skyblue;
                    border: 1px solid lightgrey;
                    border-radius: 16px;
                    margin: 6px;
                    position: relative;
                    top: 8px;
                }
                .time-line .line {
                    width: 1px;
                    height: 100%;
                    border-left: 2px solid lightgrey;
                    margin: 0 auto;
                    position: relative;
                    z-index: -1;
                }
                li:first-child .dot {
                    animation: 1s linear 0s infinite alternate blinking;
                }
                @keyframes blinking {
                    from {
                        box-shadow: 0 0 3px 0px lightblue;
                    }
                    to {
                        box-shadow: 0 0 3px 3px lightblue;
                    }
                }
                li + li .line {
                    top: -24px;
                }
                
                li:last-child .time-line .line {
                    top: -48px;
                }
            `}</style>
        </li>
    );
}
const RecentPanel = (props) => (
    <Panel title="Recents">
        <div className="recents">
            {props.recents && props.recents.length > 0 ? <ul>{props.recents.map(recent => <RecentItem key={recent.id} recent={recent} />)}</ul> : <div className="invalid">无最近项</div>}
            <style jsx>{`
            ul {
                list-style-type: none;
                padding: 0;
                margin: 0;
            }
        `}</style>
        </div>
    </Panel>
);

export default RecentPanel;