import React, { Fragment ,useEffect} from 'react';
import { useSelector,useDispatch} from 'react-redux';
import * as actions from '../redux/actions';
import {useParams} from "react-router-dom";
import GeneralDetails from '../../../shared/components/detailsItem/generalDetails';
const ItemDetails = ()=>{

    const {item} = useSelector(state => state.itemsReducer);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        handleGetItem();
    }, [id]);

    const handleGetItem = ()=>{
        dispatch(actions.getItemAction(id))
    }
    return(
        <Fragment>
            {item && (
                <GeneralDetails {...item}/>
            )}
        </Fragment>
    )
}

export default ItemDetails;