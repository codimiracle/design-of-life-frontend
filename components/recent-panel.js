import Panel from './ui/panel';
import Moment from 'moment';

const RecentItem = (props) => {
    return (
        <li>
            <div>
                <div className="recent-time">{Moment(props.recent).fromNow()}</div>
                <div className="recent-desc">You finish...</div>
            </div>
            <style jsx>{`
                li div {
                    display: flex;
                }
                .recent-time {
                    width: 56px;
                    height: 56px;
                    border-radius: 28px;
                    border: 1px solid grey;
                }
                li {
                    overflow: hidden;
                }
                li::after {
                    display: block;
                    content: '';
                    width: 1px;
                    height: 8px;
                    border-left: 2px solid grey;
                    margin-left: 26px;
                }
            `}</style>
        </li>
    );
}
const RecentPanel = (props) => (
    <Panel title="Recents">
        <div className="recents">
            {props.recents && props.recents.length > 0 ? <ul>{props.recents.map(recent => <RecentItem recent={recent} />)}</ul> : <div className="invalid">无最近项</div>}
            <style jsx>{`
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
        `}</style>
        </div>
    </Panel>
);

export default RecentPanel;