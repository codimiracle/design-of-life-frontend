import Header from './header';
import Footer from './footer';

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