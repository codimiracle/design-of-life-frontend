const statusColorMap = {
    'default': 'white',
    // today
    '1': 'lightblue',
    // finish
    '2': 'lightgreen',
};
const LifeDesignItem = (props) => {
    const lifeDesign = props.lifeDesign;
    return (
        <li>
            <div>
                {lifeDesign.title}
            </div>
            <style jsx>{`
                .li {
                    background-color: ${statusColorMap[lifeDesign.status || 'default']};
                }
            `}</style>
        </li>
    );
}

const LifeDesignList = (props) => (
    <div className="life-design-list">
        <ul>
            {props.lifeDesigns.map(lifeDesign => <LifeDesignItem key={lifeDesign.id} lifeDesign={lifeDesign} />)}
        </ul>
        <style jsx>{`
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
            }
        `}</style>
    </div>
);

export default LifeDesignList;