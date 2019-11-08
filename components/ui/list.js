class List extends React.Component {
    constructor(props) {
        super(props);
    }
    renderItem(item) {
        return <li>{this.props.itemRender(item)}</li>
    }
    render() {
        const items = this.props.items;
        return (
            <>
                <ul>
                    {items.map(item => this.renderItem(item))}
                </ul>
                <style jsx>

                </style>
            </>
        );
    }
}
export default List;