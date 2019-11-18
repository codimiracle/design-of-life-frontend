import Checkbox from "./ui/checkbox";

const statusTextMap = {
    '0': 'pending',
    '1': 'today',
    '2': 'longterm',
    '3': 'finish'
}
const LifeDesignItem = (props) => {
    const lifeDesign = props.lifeDesign;
    return (
        <div className={`--${statusTextMap[lifeDesign.status] || 'invalid'}`}>
            <span>{lifeDesign.title}</span>
            <div className="dot" />
            <style jsx>{`
                span {
                    cursor: default;
                    margin-left: 4px;
                }
                .dot {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    border-radius: 6px;
                    margin-top: 6px;
                    margin-right: 6px;
                    float: right;
                    transition: all 200ms linear;
                }
                div:hover .dot {
                    box-shadow: 0 0 4px 4px grey;
                }
                div.--pending .dot{
                    background-color: skyblue;
                }
                div.--today .dot {
                    background-color: lightcoral;
                }
                div.--longterm .dot {
                    background-color: lightgreen;
                }
                div.--finish .dot {
                    background-color: lightsalmon;
                }
            `}</style>
        </div>
    );
}

export default LifeDesignItem;