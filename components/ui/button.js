import Icon from "./icon";
import { ButtonStyle,DockStyle } from '../../config/ui-config'


class Menu extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        props.menus.map((menu) => (
                            <li></li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

class DockIconButton extends React.Component {
    render() {
        const {icon, onClick} = this.props;
        return (<>
            <button onClick={onClick}><Icon name={icon}/></button>
            <style jsx>{`
                button {
                    background-color: rgba(255,255,255,0);
                    padding: 4px 10px;
                    border: none;
                    border-radius: 32px;
                }
            `}</style>
            <style jsx>{`
                button {
                    color: ${DockStyle.foreColor};
                    background-color: ${DockStyle.backColor};
                }
                button:active {
                    color: ${DockStyle.mouseClickColor};
                }
                button:hover {
                    background-color: ${DockStyle.mouseMoveInColor};
                }
            `}</style>
        </>);
    }
}

class DockButton extends React.Component {
    render() {
        const {children, onIconClick, onClick} = this.props;
        return (
            <>
                <div className="dock-button">
                    <button className="op-primary" onClick={onClick}>{children}</button><button className="op-icon" onClick={onIconClick}><Icon name="close"/></button>
                </div>
                <style jsx>{`
                    button {
                        padding: 0;
                        background-color: rgba(255,255,255,0);
                        border: none;
                    }
                    button + button {
                        padding-left: 4px;
                    }
                    .dock-button {
                        padding: 2px 12px;
                        border-radius: 32px;
                    }
                `}</style>
                <style jsx>{`
                    .dock-button {
                        background-color: ${DockStyle.backColor};
                    }
                    .dock-button:hover {
                        background-color: ${DockStyle.mouseMoveInColor};
                    }
                    button.op-primary {
                        color: ${DockStyle.foreColor};
                    }
                    button:active.op-primary {
                        color: ${DockStyle.mouseClickColor}
                    }
                    button.op-icon {
                        color: ${DockStyle.foreColor};
                    }
                    button.op-icon:active {
                        color: ${DockStyle.mouseClickColor};
                    }
                `}</style>
            </>
        );
    }
}
class IconButton extends React.Component {
    render() {
        const { onClick, icon, children, menus, onMenuClick, ...otherProps } = this.props;
        return (
            <>
                <button className="borderless" {...otherProps}>
                    <Icon name={icon} />
                    {children}
                    {menus && <Menu menus={menus} />}
                </button>
                <style jsx>{`
                    button {
                        background-color: rgba(255,255,255,0);
                        padding: 4px 8px;
                        border: none;
                        border-radius: 4px;
                    }
                `}</style>
                <style jsx>{`
                    button {
                        color: ${ButtonStyle.backColor};
                    }
                    button:hover {
                        color: ${ButtonStyle.mouseMoveInColor};
                    }
                    button:active {
                        color: ${ButtonStyle.mouseClickColor};
                    }
                `}</style>
            </>
        );
    }
}

class Button extends React.Component {
    renderMenu(menus) {
        return <Menu menus={menus} />
    }

    render() {
        const { onClick, icon, children, menus, onMenuClick, ...otherProps } = this.props;
        return (<>
            <button onClick={onClick} {...otherProps}>
                {icon && <Icon name={icon} />}
                {children}
                {menus && <Menu menus={menus} />}
            </button>
            <style jsx>{`
                button {
                    padding: 4px 8px;
                    border: none;
                    border-radius: 4px;
                }
            `}</style>
            <style jsx>{`
                button {
                    color: ${ButtonStyle.foreColor};
                    background-color: ${ButtonStyle.backColor};
                    box-shadow: 0 0 4px 2px ${ButtonStyle.shadowColor};
                }
                button:hover {
                    background-color: ${ButtonStyle.mouseMoveInColor};
                }
                button:active {
                    background-color: ${ButtonStyle.mouseClickColor};
                }
            `}</style>
        </>);
    }
}

export {
    Button,
    DockButton,
    DockIconButton,
    IconButton
}