import Header from './header';
import Footer from './footer';
import { GlobalStyle } from '../theme';

const DefaultLayout = (props) => (
    <div className="default layout">
        <Header />
        <div className="content">{props.children}</div>
        <Footer />
        <style jsx>{`
            .content {
                position: absolute;
                top: 64px;
                bottom: 0;
                left: 0;
                right: 0;
                display: flex;
                padding: 16px 12px;
            }
        `}</style>
        <GlobalStyle />
    </div>
);

export default DefaultLayout;