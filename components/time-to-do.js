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
                        background-color: rgba(0,0,0,0.5);
                        position: absolute;
                        z-index: 2;
                        top: 64px;
                        left: 0;
                        right: 0;
                        bottom: 0;
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
                        text-align: center;
                        position: relative;
                        z-index: 3;
                    }
                    .time-to-do:hover .clock {
                        width: 96px;
                        height: 96px;
                        background-color: white;
                        padding: 12px 0px;
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