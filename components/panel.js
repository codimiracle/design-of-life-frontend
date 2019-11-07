const Panel = (props) => {
    return (
        <div className="panel">
            {props.title && <div className="title">{props.title}</div>}
            <div className="content">
                {props.children}
            </div>
        </div>
    );
};

export default Panel;