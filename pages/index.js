import AwardPanel from '../components/award-panel';
import RecentPanel from '../components/recent-panel';
import LifeDesignPanel from '../components/life-design-panel';
import ResponsiveLayout from '../layout/responsive-layout';

const awards = [
    {
        id: 324,
        userId: 234,
        value: 10323,
        name: 'LP',
        color: 'black',
        description: 'this is description'
    }
];
const recents = [
    {
        id: 12,
        userId: 324,
        statusFrom: '',
        stausTo: '',
        operation: '',
        createdTime: new Date().toISOString()
    },
    {
        id: 15,
        userId: 324,
        statusFrom: '',
        stausTo: '',
        operation: '',
        createdTime: new Date().toISOString()
    },
    {
        id: 18,
        userId: 324,
        statusFrom: '',
        stausTo: '',
        operation: '',
        createdTime: new Date().toISOString()
    }
];

const Index = () => (
    <ResponsiveLayout functionals={{
        AwardPanel: <AwardPanel awards={awards} />,
        RecentPanel: <RecentPanel recents={recents} />,
        LifeDesignPanel: <LifeDesignPanel />
    }}>
    </ResponsiveLayout>
);

export default Index;
