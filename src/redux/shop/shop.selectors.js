import { createSelector  } from 'reselect';

const selectShop = state => state.shop;


// const COLLECTION_ID_MAP = {

//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }



export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);


export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key] )

)

export const selectCollection = collectionsUrlParam => createSelector(
    [selectCollections],
    collections => collections[collectionsUrlParam]
)