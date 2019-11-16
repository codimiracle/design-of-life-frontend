import ThemeColor from '../config/ui-config';
export class IdGenerator {
    constructor(id) {
        this.id = id;
        this.count = 0;
    }
    getIdAndIncrement() {
        this.count++;
        return `st-${this.id}-${this.count}`;
    }
}
export class ScopedTheme extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { lightColor, darkColor, focusColor, fontForeColor, fontBackColor, foreColor, backColor } = ThemeColor;
        const scopedId = this.props.scopedId;
        return (
            <style jsx global>{`
            .${scopedId}.--light {
                background-color: ${lightColor};
            }
            .${scopedId}.--dark  {
                background-color: ${darkColor};
            }
            .${scopedId}:hover.--incolor {
                background-color: ${lightColor};
            }
            .${scopedId}:focus.--focus {
                border-color: ${focusColor};
            }
            .${scopedId}:focus.--font-focus {
                color: ${focusColor};
            }
            .${scopedId}:hober.font-incolor {
                color: ${backColor};
            }
            .${scopedId}.--small-shadow {
                box-shadow: 0 0 8px 2px ${lightColor};
            }
            .${scopedId}.--shadow {
                box-shadow: 0 0 16px 2px ${lightColor};
            }
            .${scopedId}.--large-shadow {
                box-shadow: 0 0 24px 2px ${lightColor};
            }
            .${scopedId}:hover.--font-incolor {
                color: ${fontBackColor};
            }
            .${scopedId}.--font-forecolor {
                color: ${fontForeColor};
            }
            .${scopedId}.--forecolor {
                background-color: ${foreColor};
            }
            .${scopedId}.--backcolor {
                background-color: ${backColor};
            }
            `}</style>
        );
    }
}
export function GlobalStyle() {
    const { darkColor } = ThemeColor;
    return (<style jsx global>{`
        html, body {
            margin: 0;
        }
        .invalid {
            color: ${darkColor};
        }
        .panel {
            padding: 12px;
            border-radius: 12px;
        }
    `}</style>);
};