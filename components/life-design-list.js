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
        <li className={`--${statusTextMap[lifeDesign.status] || 'invalid'}`}>
            <Checkbox label={lifeDesign.title} />
            <div className="dot" />
            <style jsx>{`
                .dot {
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    border-radius: 6px;
                    margin-top: 4px;
                    float: right;
                    transition: all 200ms linear;
                }
                li {
                    padding: 6px;
                    transition: all 200ms linear;
                }
                li:focus-within {
                    outline: 1px solid deepskyblue;
                }
                li:hover {
                    background-color: lightgrey;
                }
                li + li::before {
                    content: '';
                    display: block;
                    border-top: 1px solid lightgrey;
                    position: relative;
                    top: -8px;
                }
                li + li {
                    margin-top: 3px;
                }
                li:hover .dot {
                    box-shadow: 0 0 4px 4px grey;
                }
                li.--pending .dot{
                    background-color: skyblue;
                }
                li.--today .dot {
                    background-color: lightcoral;
                }
                li.--longterm .dot {
                    background-color: lightgreen;
                }
                li.--finish .dot {
                    background-color: lightsalmon;
                }
            `}</style>
        </li>
    );
}

const LifeDesignList = (props) => (
    <div className="life-design-list">
        <ul>
            {props.lifeDesigns.map(lifeDesign => <LifeDesignItem key={lifeDesign.id} lifeDesign={lifeDesign} />)}
        </ul>
        <style jsx>{`
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
        `}</style>
    </div>
);

export default LifeDesignList;