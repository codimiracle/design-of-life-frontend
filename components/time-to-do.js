import moment from 'moment';
import ToDoPanel from './to-do-panel';

class TimeToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            time: '',
            seconds: '',
        }
    }
    tick() {
        const now = moment();
        const time = now.format('HH:mm');
        const date = now.format('YYYY/MM/DD');
        const seconds = now.format('ss');
        this.setState({ time: time, date: date, seconds: seconds });
    }
    componentDidMount() {
        this.tick();
        this.timerId = setInterval(() => this.tick(), 1000);
    }
    render() {
        const date = this.state.date;
        const time = this.state.time;
        const seconds = this.state.seconds;

        return (
            <div className="time-to-do">
                <div className="clock">
                    <div className="seconds">{seconds}</div>
                    <div className="date">{date}</div>
                    <div className="time">{time}</div>
                </div>
                <div className="wrapper">
                    <ToDoPanel />
                </div>
                <style jsx>{`
                    .wrapper {
                        display: none;
                        padding: 16px;
                        background-image: '/static/blur.png';
                        position: absolute;
                        top: 64px;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 1;
                    }
                    .seconds {
                        display: none;
                        font-size: smaller;
                    }
                    .seconds::after {
                        content: 's';
                        margin-left: 2px;
                    }
                    .date {
                        font-size: smaller;
                    }
                    .clock {
                        padding: 7px 0;
                        text-align: center;
                        background-color: white;
                        position: relative;
                        z-index: 2;
                    }
                    .time-to-do:hover .clock {
                        width: 96px;
                        height: 96px;
                        padding: 16px 0px;
                        border-radius: 50%;
                        box-sizing: border-box;
                        box-shadow: 0 0 4px 4px lightgrey;
                    }
                    .time-to-do:hover .seconds {
                        display: block;
                    }
                    .time-to-do:hover .wrapper {
                        display: block;
                    }
                `}</style>
            </div>
        );
    }
}

export default TimeToDo;