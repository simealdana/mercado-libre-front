import getEntitie from '../../../shared/services/fetching';

export const getItems = async query=>{
    let items,error = null;
    try {
         const response = await getEntitie(`items?q=${query}`);
         items = response.itemsResponse.items
    } catch (err) {
        error=err
    }
    return{items,error};
}

export const getItem = async id=>{
    let item,error = null;
    try {
        const response =await getEntitie(`items/${id}`);
        item = response.itemResponse.item
    } catch (err) {
        error=err
    }
    return{item,error};
}