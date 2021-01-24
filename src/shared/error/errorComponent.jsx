import React,{Fragment} from 'react';
import { useSelector } from 'react-redux';
import ErrorContainer,{ErrorCard} from './errorStyled';


const ErrorComponent = ()=>{
    const {errorMessage,showError}=useSelector(state=> state.ErrorReducer);
    return(
        <Fragment>
            {
                showError&&(
                    <ErrorContainer>
                        <ErrorCard>
                            <p>{errorMessage}</p>
                        </ErrorCard>
                    </ErrorContainer>
                )
            }
        </Fragment>
    )
}

export default ErrorComponent;