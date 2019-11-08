class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: true
        }
    }
    render() {
        const {label, name} = this.props;
        const value = this.state.value;
        return (
            <>
                {label && <label for={name}>{label}</label>}
                <input type="checkbox" name={name} onChange={event => this.setState({value: event.target.value})} />
                <style jsx>{`
                `}</style>
            </>
        );
    }
}

export default Checkbox;