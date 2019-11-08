import Panel from './ui/panel';

const RecentItem = (props) => {

}
const RecentPanel = (props) => (
    <Panel title="Recents">
        <div className="recents">
            {props.recents && props.recents.length > 0 ? <ul>{props.recents.map(recent => <RecentItem recent={recent} />)}</ul> : <div className="invalid">无最近项</div>}
            <style jsx>{`
            ul {
                list-style-type: none;

            }
        `}</style>
        </div>
    </Panel>

);

export default RecentPanel;