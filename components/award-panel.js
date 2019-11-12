import Panel from './ui/panel';
import Button from './ui/button';

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
            <Button className="add-award" icon="add-circle"><span>添加奖励项</span></Button>
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