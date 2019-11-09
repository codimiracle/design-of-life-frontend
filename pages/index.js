import AwardPanel from '../components/award-panel';
import RecentPanel from '../components/recent-panel';
import LifeDesignPanel from '../components/life-design-panel';
import DefaultLayout from '../layout/default-layout';
import App from '../components/app';

const awards = [];
const recents = [
    {
        id: 12,
        userId: 324,
        statusFrom: '',
        stausTo: '',
        operation: '',
        createdTime: new Date().toISOString()
    }
];

const Home = () => (
    <DefaultLayout>
        <aside className="aside-bar">
            <section className="award-area">
                <AwardPanel awards={awards} />
            </section>
            <section className="recent-area">
                <RecentPanel recents={recents} />
            </section>
        </aside>
        <article className="main">
            <LifeDesignPanel />
        </article>
        <style jsx>{`
            .aside-bar {
                width: 348px;
            }
            section + section {
                margin-top: 32px;
            }
            .main {
                margin-left: 32px;
                flex: 1;
            }
        `}</style>
        <style jsx global>{`
            html, body {
                margin: 0;
            }
            .invalid {
                color: grey;
            }
            .panel {
                padding: 12px;
                border-radius: 12px;
                box-shadow: 0 0 20px 2px lightgrey;
            }
        `}</style>
    </DefaultLayout>
);

const WrapperApp = () => <App><Home /></App>;
export default WrapperApp;
