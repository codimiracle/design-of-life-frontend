import Icon from "./icon";

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onClick, icon, children, menu, onMenuClick} = this.props;
        return (<>
            <button onClick={onClick}>
                {icon && <Icon name={icon} />} {children}
                {menu && <ul>
                    {}
                </ul>}
            </button>
            <style jsx>{`
                button {
                    background: white;
                    border: none;
                }
            `}</style>
        </>);
    }
}

export default Button;