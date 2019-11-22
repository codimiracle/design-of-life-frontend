import Icon from "./ui/icon";
import { DockButton, DockIconButton } from "./ui/button";

const CategoryBar = (props) => (
    <div className="category-bar">
        {
            props.categories &&
            <ul className="category-tabs">
                {
                    props.categories.map(category => <li key={category.id}>
                    <DockButton>{category.name}</DockButton>
                    </li>)
                }
                <li className="category-tab add-button">
                    <DockIconButton icon="add" />
                </li>
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
            li + li {
                margin-left: 4px;
            }
        `}</style>
    </div>
);

export default CategoryBar;