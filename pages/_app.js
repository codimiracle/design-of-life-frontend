import '../config/icon-config';
import App from 'next/app';

class DolApp extends App {
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