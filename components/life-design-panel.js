import CetagoryBar from './category-bar';
import Panel from './ui/panel';
import LifeDesignDetails from './life-design-details';
import List from './ui/list';
import LifeDesignItem from './life-design-item';

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
function testData() {
    var arr = new Array();
    for (var i = 0; i < 100; i++) {
        arr.push({
            id: i,
            title: "学习一个专栏",
            status: i % 4,
            content: "### Title",
            isMarkdown: true,
            isHtml: false
        })
    }
    return arr;
}
const lifeDesigns = testData();

const listSettings = {
    options: {},
    metadata: {
        id: {
            type: ['item.key', 'item.value'],
        },
        title: {
            type: ['item.name'],
            render: (item) => (
                <LifeDesignItem lifeDesign={item} />
            )
        }
    }
}
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
                    <List items={lifeDesigns} settings={listSettings} />
                    {/* <LifeDesignList className="life-design-list" lifeDesigns={lifeDesigns} /> */}
                </aside>
                <article>
                    <LifeDesignDetails lifeDesign={lifeDesigns[0]} />
                </article>
            </div>
            <style jsx>{`
                aside {
                    padding-top: 3px;
                }
                .option-bar-wrapper {
                    padding: 0 6px; 
                }
                .life-design-list-wrapper {
                    padding-top: 6px;
                    padding-right: 4px;
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