import CetagoryBar from './category-bar';
import Panel from './ui/panel';
import LifeDesignDetails from './life-design-details';
import LifeDesignList from './life-design-list';
import OptionBar from './ui/option-bar';
import Checkbox from './ui/checkbox';
import Button from './ui/button';

const categories = [
    {
        id: 1,
        name: "学习"
    },
    {
        id: 2,
        name: "娱乐"
    }
];
const lifeDesigns = [
    {
        id: 3234,
        title: "学习一个专栏",
        status: 1,
        content: "### Title",
        isMarkdown: true,
        isHtml: false
    }
];
const LifeDesignPanel = (props) => {
    const onCategorySelected = () => {

    };
    return (
        <Panel>
            <div className="life-design-category-tabs">
                <CetagoryBar categories={categories} onCategorySelected={onCategorySelected} />
            </div>
            <div className="life-design-viewer">
                <aside>
                    <OptionBar title={<Checkbox />} operator={<Button />}/>
                    <LifeDesignList lifeDesigns={lifeDesigns} />
                </aside>
                <article>
                    <LifeDesignDetails lifeDesign={lifeDesigns[0]} />
                </article>
            </div>
            <style jsx>{`
                aside {
                    padding-right 12px;
                }
                .life-design-category-tabs {
                    border-bottom: 1px solid lightgrey;
                }
                .life-design-viewer {
                    display: flex;
                }
                .life-design-viewer aside {
                    width: 256px;
                    border-right: 1px solid lightgrey;
                }
                .life-design-viewer article {
                    margin-left: 32px;
                    flex: 1;
                }
            `}</style>
        </Panel>
    );
}

export default LifeDesignPanel;