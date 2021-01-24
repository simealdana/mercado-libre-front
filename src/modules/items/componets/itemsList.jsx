import React, { Fragment ,useState,useEffect} from 'react';
import { useSelector,useDispatch} from 'react-redux';
import Card from '../../../shared/components/card/card';
import {Redirect} from 'react-router-dom';
import * as actions from '../redux/actions'

const ItemsList =()=>{
    const [redirect, setRedirect] = useState(false);
    const [itemSelect , setItemSelect ] = useState({});
    const {items} = useSelector(state => state.itemsReducer);
   
    const dispatch = useDispatch();

    useEffect(() => {
        handleGetItems();
    }, []);
    
    const handleGetItems = ()=>{
        const query = window.location.search.substring(1).replace("q=","");
        dispatch(actions.getItemsAction(query));
    }

    const handleDetails = (item)=>{
        setRedirect(!redirect);
        setItemSelect(item)
    }
    
    const handleRedirect = ()=>(
        redirect &&<Redirect to={`/item/${itemSelect.id}`}/>
    )

    return(
        <Fragment>
            <div>
                {
                    items.length>0 && (
                        items.map((item,index)=>{
                            return(
                                <div onClick={()=>handleDetails(item)}  key={index} id={`item-${index+1}`}>
                                    <Card
                                        item={item}   
                                    />
                                </div>
                            )
                        })
                    )
                }
                {handleRedirect()}
            </div>
        </Fragment>
    )
}

export default ItemsList;

