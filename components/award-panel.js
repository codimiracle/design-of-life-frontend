import Panel from './ui/panel';
import {IconButton} from './ui/button';

const AwardItem = (props) => (
    <li>
        <div className="award-name"><abbr title={props.award.description}>{props.award.name}</abbr></div>
        <div className="award-value">{props.award.value}</div>
        <style jsx>{`
            .award-name {
                position: relative;
            }
            .award-name::before {
                content: '';
                width: 12px;
                height: 12px;
                background-color: ${props.award.color || 'grey'};
                border-radius: 100%;
                margin-right: 4px;
                
                display: block;
                position: absolute;
                left: -16px;
                top: 6px;
            }
            .award-value {
                font-family: 'Arial';
            }
            .award-value::after {
                content: 'pt';
                margin-left: 4px;
            }
        `}</style>
    </li>
);
const AwardPanel = (props) => (
    <Panel title="Awards">
        <div className="awards">
            {
                props.awards && props.awards.length > 0 ? <ul>{props.awards.map((award => <AwardItem key={award.id} award={award} />))}</ul> : <div className="invalid noitems">无奖励项</div>
            }
            <IconButton icon="add-circle">添加奖励项</IconButton>
            <style jsx>{`
            .noitems {
                padding: 4px 0;
            }
             ul {
                list-style-type: none;
                padding-left: 20px;
                margin: 0;
            }
            .add-award {
                padding: 2px;
                text-align: center;
                border: 1px dashed grey;
            }
        `}</style>
        </div>
    </Panel>
);

export default AwardPanel;