import Icon from "./icon";

const CategoryItem = (props) => (
    <li className={`category-tab ${props.checked && '--active'}`}>
        <a>{props.category.name}</a>
        <span className="category-tab-close"><Icon name="close" /></span>
        <style jsx>{`
            .category-tab {
                color: rgba(255,255,255, 0.9);
                background-color: grey;
                padding: 4px 12px;
                border-radius: 16px;
                margin: 8px;
                cursor: default;
            }
            .category-tab + .category-tab {
                margin-left: 0;
            }
            .category-tab.--active {
                background-color: lightgrey;
            }
            .category-tab:not(.--active):hover {
                background-color: #b8b8b8;
            }
            .category-tab-close {
                margin-left: 16px;
            }
            .category-tab-close:hover {
                color: lightgrey;
            }
        `}</style>
    </li>
);
const CategoryBar = (props) => (
    <div className="category-bar">
        {
            props.categories && props.categories.length > 0 &&
            <ul className="category-tabs">
                {props.categories.map(category => <CategoryItem key={category.id} category={category} />)}
            </ul>
        }
        <Icon name="fa times" />
        <style jsx>{`
            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                display: flex;
            }
            .category-bar {
                display: flex;
            }
        `}</style>
    </div>
);

export default CategoryBar;