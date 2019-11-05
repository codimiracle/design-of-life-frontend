import Header from './header';
import Footer from './footer';
import AwardPanel from '../components/award-panel';
import RecentPanel from '../components/recent-panel';

const DefaultLayout = (props) => (
    <div className="default layout">
        <Header />
        <div className="content">{props.children}</div>
        <Footer />
        <style jsx>{`
            .content {
                display: flex;
                padding: 16px 12px;
            }
        `}</style>
    </div>
);

export default DefaultLayout;