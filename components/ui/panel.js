import { PanelStyle } from '../../config/ui-config';

class Panel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, children, ...otherProps } = this.props;
        return (
            <div className="panel" {...otherProps}>
                {title && <div className="title">{title}</div>}
                <div className="content">
                    {children}
                </div>
                <style jsx>{`
                    .panel {
                        background-color: ${PanelStyle.backColor};
                        padding: 12px;
                        border-radius: 12px;
                        box-shadow: 0 0 8px 4px ${PanelStyle.shadowColor};
                    }
                    .panel .content {
                        height: 100%;
                    }
                `}</style>
            </div>
        );
    }
};

export default Panel;