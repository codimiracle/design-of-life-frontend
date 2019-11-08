import Icon from "./icon";

const Button = (props) => (
    <>
        <button onClick={props.onClick}>{props.icon && <Icon name={props.icon}/>} {props.children}</button>
        <style jsx>{`
            button {
                background: 
            }
        `}</style>
    </>
);

export default Button;