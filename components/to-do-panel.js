import Panel from './ui/panel';
import TimeLine from './ui/time-line';
import moment from 'moment';

const ToDoPoint = (point) => (
    <>
        {moment().format('HH:mm')} {point.name}
        <div >{point.description}</div>
        <style jsx>{`
            div {
                color: grey;
            }
        `}</style>
    </>
);
const points = [
    {
        name: 'Hello',
        description: 'say "hello" to your neighborhood.'
    }
];
const ToDoPanel = () => {
    return (
        <Panel>
            <div>
                <TimeLine points={points} render={ToDoPoint} keyProperty="name"/>
            </div>
        </Panel>
    );
}

export default ToDoPanel;