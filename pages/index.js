import AwardPanel from '../components/award-panel';
import RecentPanel from '../components/recent-panel';
import LifeDesignPanel from '../components/life-design-panel';
import ResponsiveLayout from '../layout/responsive-layout';
import { Caller } from '../api';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    static getInitialProps = async function () {
        let awards = await Caller.fetch('AwardsApi.entry');
        let recents = await Caller.fetch('RecentsApi.entry');
        let categories = await Caller.fetch('CategoriesApi.entry');
        return {
            awards: awards,
            recents: recents,
            categories: categories
        }
    }
    render() {
        const {awards, recents, categories} = this.props;
        return (
            <ResponsiveLayout functionals={{
                AwardPanel: <AwardPanel awards={awards} />,
                RecentPanel: <RecentPanel recents={recents} />,
                LifeDesignPanel: <LifeDesignPanel categories={categories} />
            }}>
            </ResponsiveLayout>
        )
    }
        
}
export default Index;
