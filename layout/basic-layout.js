import Header from './header';
import Footer from './footer';
import { GlobalStyle } from '../theme/style';

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
        <GlobalStyle />
    </div>
);

export default DefaultLayout;