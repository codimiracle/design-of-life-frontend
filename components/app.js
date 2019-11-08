import '../init';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('select', function (e) { e.preventDefault(); });
    }
    render() {
        return <div className="app">{this.props.children}</div>
    }
}