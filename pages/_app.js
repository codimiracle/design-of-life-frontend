import '../config/icon-config';
import App from 'next/app';

class DolApp extends App {
    componentDidMount() {
        document.addEventListener('selectstart', function (e) { e.preventDefault(); });
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Component {...pageProps} />
            </>
        );
    }
}

export default DolApp;