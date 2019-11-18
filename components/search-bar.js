import { DockIconButton } from "./ui/button";
import { DockStyle } from '../config/ui-config'
import Icon from "./ui/icon";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    fireSearchEvent(event) {
        event.preventDefault();
        const onSearchFn = this.props.onSearch;
        const searchText = this.state.value;
        onSearchFn && onSearchFn(searchText);
    }
    render() {
        const { } = this.props;
        return (
            <div className="dock-input">
                <input type="text" onChange={e => this.setState({ value: e.target.value })} />
                <button onClick={(e) => this.fireSearchEvent(e)}><Icon name="search"/></button>
                <style jsx>{`
                    .dock-input {
                        padding: 2px 12px;
                        border-radius: 32px;
                        height: 30px;
                        line-height: 24px;
                    }
                    button, input {
                        padding: 0;
                        background-color: rgba(255,255,255,0);
                        border: none;
                    }
                    input {
                        color: white;
                    }
                `}</style>
                <style jsx>{`
                    .dock-input {
                        background-color: ${DockStyle.backColor};
                    }
                    .dock-input:hover {
                        background-color: ${DockStyle.mouseMoveInColor};
                    }
                    .dock-input:hover input {
                        color: ${DockStyle.inputMouseMoveInForeColor};
                    }
                    button {
                        color: ${DockStyle.foreColor};
                    }
                    button:active {
                        color: ${DockStyle.mouseClickColor};
                    }
                `}</style>
            </div>
        );
    }
}

export default SearchBar;