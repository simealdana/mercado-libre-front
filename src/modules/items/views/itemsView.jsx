import React, { Fragment } from 'react';
import ItemsList from '../componets/itemsList';

const ItemsView = ()=>{
    return(
        <Fragment>
            <div className="root">
                <ItemsList/> 
            </div>
        </Fragment>
    )
}

export default ItemsView;