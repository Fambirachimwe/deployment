import React from 'react';
import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import  CollectionPreview from '../collection-preview/collection-preview';


import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';




const CollectioOverView = ({ collections }) => (
    <div className="collection-overview">
        {
            collections.map(({ id, ...otherColletionProps }) => (
                <CollectionPreview key={id} {...otherColletionProps} />
            ))
        }
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});


export default connect(mapStateToProps)(CollectioOverView)


