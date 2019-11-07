const hostname = window.location.hostname;
const root = `https://${hostname}`;
const Api = {
    AwardsApi: {
        entry: `${root}/awards`
    },
    RecentsApi: {
        entry: `${root}/recents`
    },
    CategoriesApi: {
        entry: `${root}/categories`
    },
    LifeDesignsApi: {
        entry: `${root}/life-designs`,
        search: `${root}/life-designs/search`
    },
};

export default Api;