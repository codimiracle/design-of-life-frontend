import OptionBar from './option-bar';
import Checkbox from './checkbox';
import { IconButton } from './button';

function getDescriptor(items, settings) {
    const metadata = (settings || {}).metadata || {};
    const descriptor = {
        items: items,
        metadata: metadata,
        keys: Object.keys(metadata),
        describes: []
    };
    items.forEach(item => {
        let describe = {
            item: item,
            mapping: {}
        }
        descriptor.keys.forEach(key => {
            let types = (metadata[key] || {}).type || [];
            types.forEach(type => {
                describe.mapping[type] = item[key];
            });
        });
        descriptor.describes.push(describe);
    });
    return descriptor;
}

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: null
        };
        this.descriptor = getDescriptor(this.props.items, this.props.settings);
    }
    renderField(item, field, fieldmeta) {
        return (fieldmeta.render || function () { return '' })(item);
    }
    renderItem(describe) {
        const descriptor = this.descriptor;
        const selectedKey = this.state.selectedKey;
        const { item, mapping } = describe;
        return (
            <li key={mapping['item.key']} className={selectedKey == mapping['item.key'] ? '--active' : ''}>
                <div className="list-item">
                    <Checkbox />
                    <div className="list-item-renderred">
                        {
                            descriptor.keys.map((key) => this.renderField(item, key, descriptor.metadata[key]))
                        }
                    </div>
                </div>
                <style jsx>{`
                    li {
                        padding: 6px 0;
                        transition: all 200ms linear;
                    }
                    .list-item {
                        display: flex;
                    }
                    .list-item-renderred {
                        flex: 1;
                    }
                    li:hover, li.--active {
                        background-color: lightgrey;
                    }
                    li + li {
                        margin-top: 3px;
                    }
                    li + li::before {
                        content: '';
                        display: block;
                        border-top: 1px solid lightgrey;
                        position: relative;
                        top: -8px;
                    }
                `}</style>
            </li>
        );
    }
    renderOption(describe) {
        const mapping = describe.mapping;
        return (<option key={mapping['item.key']} value={mapping['item.value']}>{mapping['item.name']}</option>);
    }
    render() {
        const descriptor = this.descriptor;
        const selectAll = <Checkbox />;
        const menu = <IconButton icon="bars" />
        return (
            <div className="list-component">
                <select multiple onChange={(e) => { this.setState({ selectedKey: e.target.value }) }}>
                    {descriptor.describes.map(describe => this.renderOption(describe))}
                </select>
                <OptionBar title={selectAll} operator={menu} />
                <div className="list-content">
                    <ul>
                        {descriptor.describes.map(describe => this.renderItem(describe))}
                    </ul>
                    <div className="scrollbar"><div className="thumb"></div></div>
                </div>

                <style jsx>{`
                    .list-component {
                        height: 100%;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                    }
                    .list-content {
                        overflow-y: scroll;
                        height: 100%;
                    }
                    .list-component:focus-within {
                        outline: 1px solid deepskyblue;
                    }
                    ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                    }
                    select {
                        opacity: 0;
                        position: absolute;
                        z-index: -1;
                    }
                `}</style>
            </div>
        );
    }
}

export default List;