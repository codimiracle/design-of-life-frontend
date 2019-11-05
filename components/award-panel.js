const AwardItem = (props) => (
    <li>
        <div className="award-name">{props.award.name}</div>
        <div className="award-value">{props.award.value} pt</div>
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
    <div className="award panel">
        {
            props.awards && props.awards.length > 0 ? 
                <ul>
                    {props.awards.map((award => <AwardItem key={award.id} award={award} />))}
                </ul>
            :
                <div>无奖励项</div>
        }
        <style jsx>{`
            .award.panel > ul {
                list-style-type: none;
                padding-left: 32px;
                margin: 0;
            }
        `}</style>
    </div>
);

export default AwardPanel;