import Panel from './panel';
import Icon from './icon';

const AwardItem = (props) => (
    <li>
        <div className="award-name">{props.award.name}</div>
        <div className="award-value">{props.award.value} pt</div>
        <style jsx>{`
            li {
                padding: 0 4px;
            }
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
                left: -24px;
                top: 6px;
            }
            .award-value {
                font-family: 'Arial';
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
            <div className="add-award-item"><Icon name="add-circle"/> <span className="">添加奖励项</span></div>
            <style jsx>{`
            .noitems {
                padding: 4px 0;
            }
            .awards.panel > ul {
                list-style-type: none;
                padding-left: 32px;
                margin: 0;
            }
            .add-award-item {
                padding: 2px;
                text-align: center;
                border: 1px dashed grey;
            }
        `}</style>
        </div>
    </Panel>
);

export default AwardPanel;