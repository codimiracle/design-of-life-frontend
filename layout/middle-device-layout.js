import DefaultLayout from "./basic-layout";

class MiddleDeviceLayout extends React.Component {
    render() {
        const { AwardPanel, RecentPanel, LifeDesignPanel } = this.props.functionals;
        return (
            <DefaultLayout>
                <aside className="aside-bar">
                    <section className="award-area">
                        {AwardPanel}
                    </section>
                    <section className="recent-area">
                        {RecentPanel}
                    </section>
                </aside>
                <article className="main">
                    {LifeDesignPanel}
                </article>
                <style jsx>{`
                    .aside-bar {
                        width: 348px;
                    }
                    section + section {
                        margin-top: 16px;
                    }
                    .main {
                        margin-left: 32px;
                        flex: 1;
                    }
            `}</style>
            </DefaultLayout>
        );
    }
}

export default MiddleDeviceLayout;