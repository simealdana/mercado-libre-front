import React,{useState} from 'react';
import { useDispatch} from 'react-redux';
import GeneralForm from '../../../shared/components/generalForm/generalForm';
import logo from '../../../styles/images/Logo_ML.png';
import searchLogo from '../../../styles/images/ic_Search.png';
import {Flex} from '../../../shared/styleComponents/layoutComponent';
import {Link} from "react-router-dom";
import * as actions from '../redux/actions';

const NavBar = ()=>{
    const [searchItem, setSearchItem] = useState("");
    const dispatch = useDispatch();

    const handleGetItems = ()=>{
        dispatch(actions.getItemsAction(searchItem));
    }

    const formList = [
        {
            type: 'text',
            field: 'searchItem',
            divClass: 'search-item',
            inputClass: 'search-item-input',
            labelClass: 'search-item-label',
            col: 'col-10',
            value1: '',
            value2: '',
            label: 'labe',
            title: '',
            placeholder:'Nunca dejes de buscar'
        }
    ]
    
    const initialValues ={
        searchItem:""
    }
    
    return(
        <div className="nav-bar">
            <section>
                <Flex alignItems={'center'} justifyContent={"space-between"} >
                    <img src={logo}/>
                    <Flex alignItems={'center'} justifyContent={"end"}>
                        <GeneralForm
                            formList={formList}
                            initialValues={initialValues}
                            sendData={({searchItem})=>setSearchItem(searchItem)}
                        />
                        <Flex alignItems={'center'} justifyContent={"center"} width={"50px"}>
                            <Link to={`/search?q=${searchItem}`}  className="search-button" 
                            onClick={()=>handleGetItems()}>
                                <img src={searchLogo}/>
                            </Link>
                        </Flex>
                    </Flex>
                </Flex>
            </section>
        </div>
    )
}

export default NavBar;