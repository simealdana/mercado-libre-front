import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Spinner,{SpinnerContainer} from './loaderStyled';

const Loader = ()=>{
    const {loading} = useSelector(state => state.loader);

    return(
        <Fragment>
            {loading && (
                <SpinnerContainer>
                    <Spinner>
                        <circle
                            className="path"
                            cx="25"
                            cy="25"
                            r="20"
                            fill="none"
                            strokeWidth="2"
                        />
                    </Spinner>
                </SpinnerContainer>
            )}
        </Fragment>
    )  
}

export default Loader

