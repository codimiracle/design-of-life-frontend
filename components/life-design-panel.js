import CetagoryBar from './category-bar';
import Panel from './ui/panel';
import LifeDesignDetails from './life-design-details';
import List from './ui/list';
import LifeDesignItem from './life-design-item';
import SearchBar from './search-bar';

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
                <LifeDesignItem key={item.id} lifeDesign={item} />
            )
        }
    }
}
const LifeDesignPanel = (props) => {
    const {categories} = props;
    const onCategorySelected = () => {

    };
    return (
        <Panel style={{ height: '100%', overflow: 'hidden' }}>
            <div className="content-wrapper">
                <div className="life-design-category-tabs">
                    <div>
                        <CetagoryBar categories={categories} onCategorySelected={onCategorySelected} />
                    </div>
                    <SearchBar onSearch={() => { }} />
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
            </div>
            <style jsx>{`
                .content-wrapper {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    overflow: hidden;
                }
                .option-bar-wrapper {
                    padding: 0 6px; 
                }
                .life-design-list-wrapper {
                    padding-top: 6px;
                    padding-right: 4px;
                }
                .life-design-category-tabs {
                    padding-bottom: 12px;
                    display: flex;
                    border-bottom: 1px solid lightgrey;
                }
                .life-design-category-tabs div:first-child {
                    flex: 1;
                }
                .life-design-viewer {
                    display: flex;
                    height: 100%;
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