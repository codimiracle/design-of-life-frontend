import Checkbox from "./checkbox";
import Button from "./button";

const OptionBar = (props) => (
    <div className="option-bar">
        <div>{props.title}</div>
        <div>{props.brands}</div>
        <div>{props.operator}</div>
        <style jsx>{`
            .option-bar {
                display: flex;
                justify-content: space-between;
            }
        `}</style>
    </div>
);

export default OptionBar;