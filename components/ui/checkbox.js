class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: false
        }
    }
    render() {
        const { label, name } = this.props;
        const value = this.state.value;
        return (
            <>
                <div className={`checkbox-component ${this.state.value ? '--checked' : ''}`}>
                    <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                    {label && <label htmlFor={name}>{label}</label>}
                    <input type="checkbox" name={name} onChange={event => this.setState({ value: event.target.checked })} />
                </div> 
                <style jsx>{`
                    input {
                        opacity: 0;
                        position: absolute;
                        left: -2px;
                        top: 1px;
                        z-index: 1;
                    }
                    label {
                        margin-left: 4px;
                        position: relative;
                    }
                    .checkbox-component {
                        height: 22px;
                        display: inline;
                        position: relative;
                    }
                    .checkbox-component::before, .check-icon {
                        content: '';
                        width: 12px;
                        height: 12px;
                        display: inline-block;
                    }
                    .checkbox-component::before {
                        border: 2px solid grey;
                        border-radius: 2px;
                        position: relative;
                    }
                    .checkbox-component:focus-within::before {
                        border-color: deepskyblue;
                    }
                    .checkbox-component .check-icon {
                        visibility: hidden;
                        color: grey;
                        position: absolute;
                        left: 2px;
                        top: 8px;
                    }
                    .checkbox-component.--checked .check-icon {
                        visibility: visible;
                    }
                `}</style>
            </>
        );
    }
}

export default Checkbox;