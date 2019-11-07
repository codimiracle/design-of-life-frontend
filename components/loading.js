const Loading = (props) => {
    const curtain = <div className="curain"></div>;
    const screen = <div className="screen">{props.children}</div>;
    return (
        <div>
            <curtain />
            <screen />
            <style jsx>{`
                
            `}</style>
        </div>
    );
};

export default Loading;