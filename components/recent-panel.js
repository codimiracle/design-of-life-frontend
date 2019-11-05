const RecentItem = (props) => {

}
const RecentPanel = (props) => (
    <div className="recent panel">
        {
            props.recents && props.recents.length > 0 ?
                <ul>
                    {props.recents.map(recent => <RecentItem recent={recent} />)}
                </ul>
            :
                <div>无最近项</div>
        }
        <style jsx>{`
            ul {
                list-style-type: none;

            }
        `}</style>
    </div>
);

export default RecentPanel;