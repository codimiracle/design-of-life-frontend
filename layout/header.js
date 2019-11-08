class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: ''
        }
    }
    tick() {
        const date = new Date();
        const time = `${date.getFullYear()} ${date.getMonth()}/${date.getDate()}`;
        this.setState({time: time});
    }
    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }
    render() {
        const time = this.state.time;
        return (<div className="time">{`${time}`}</div>);
    }
}
const User = (props) => (
    <div className="user-area">
        <div className="avatar"></div>
        <style jsx>{`
            .user-area {
                width: 56px;
                height: 56px;
                border: 1px solid lightgrey;
                border-radius: 100%;
            }
            .avatar {
                background-size: cover;
                background-image: url(${props.user ? props.user.avatar : './#noavatar'});
            }
        `}</style>
    </div>
);
const Header = (props) => (
    <header>
        <div>Design of life</div>
        <Time />
        <User />
        <style jsx>{`
            header {
                height: 56px;
                line-height: 56px;
                padding: 8px;
                display: flex;
                justify-content: space-between;
                box-shadow: 0 0 6px 6px lightgrey;
            }
        `}</style>
    </header>
);

export default Header;