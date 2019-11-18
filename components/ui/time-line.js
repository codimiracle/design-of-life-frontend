class TimeLine extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const render = this.props.render;
        const points = this.props.points;
        const keyProperty = this.props.keyProperty;
        return (
            <div className="time-line-component">
                <ul>
                    {
                        points.map((element) =>
                            <li key={element[keyProperty]}>
                                <div className="time-line">
                                    <div className="dot"></div>
                                    <div className="line"></div>
                                </div>
                                <div className="content">
                                    {render(element)}
                                </div>
                            </li>
                        )
                    }
                </ul>
                <style jsx>{`
                ul {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                }
                li {
                    padding-left: 28px;
                    position: relative;
                }
                .time-line {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                }
                .time-line .dot {
                    width: 12px;
                    height: 12px;
                    background-color: skyblue;
                    border: 1px solid lightgrey;
                    border-radius: 16px;
                    margin: 6px;
                    position: relative;
                    z-index: 1;
                }
                .time-line .line {
                    width: 1px;
                    height: 100%;
                    border-left: 2px solid lightgrey;
                    margin: 0 auto;
                    position: relative;
                    top: -16px;
                }
                li:first-child .dot {
                    animation: 1s linear 0s infinite alternate blinking;
                }
                @keyframes blinking {
                    from {
                        box-shadow: 0 0 3px 0px lightblue;
                    }
                    to {
                        box-shadow: 0 0 3px 3px lightblue;
                    }
                }
                li:last-child .time-line .line {
                    display: none;
                }
            `}</style>
            </div>
        );
    }
}

export default TimeLine;