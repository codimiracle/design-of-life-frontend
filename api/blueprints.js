const hostname = 'private-fe726-dolapi.apiary-mock.com'; //window.location.hostname;
const root = `https://${hostname}`;
const Api = {
    AwardsApi: {
        entry: `${root}/awards`,
        element: `${root}/awards/:id`,
        value: `${root}/awards/:id/value`
    },
    RecentsApi: {
        entry: `${root}/recents`,
        element: `${root}/recents/:id`
    },
    CategoriesApi: {
        entry: `${root}/categories`,
        tags: `${root}/categories/:id/tags`
    },
    LifeDesignsApi: {
        entry: `${root}/designs`,
        search: `${root}/designs/search?q=:keyword`,
        listByCategory: `${root}/designs/with-category/:category_id/`,
        listByTag: `${root}/desgins/with-tags/:tags`,
    },
};

export default Api;