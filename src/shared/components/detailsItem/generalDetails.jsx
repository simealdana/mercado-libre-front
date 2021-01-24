import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
    MainContainer,
    MainImg,
    MainPrices,
    GeneralDetailsContainer,
    SecondaryContainer,
    Price
} from './generalDetailsStyled';

const GeneralDetails = (props)=>{
    return(
        <Fragment>
            <GeneralDetailsContainer>
                <MainContainer number={2}>
                    <MainImg className="main-img">
                        <img src ={props.picture}></img>
                    </MainImg>
                    <MainPrices className="main-price">
                        <section>
                            <span>{props.conditional === "new"?"Nuevo":"Usado"}</span>
                            <h3>{props.title}</h3>
                            <Price>
                                <p>{`$ ${props.price.amount}`}</p>
                                <span>{`${props.price.decimals}`}</span>
                            </Price>
                            <button>Comprar</button>
                        </section>
                    </MainPrices>
                </MainContainer>
                <SecondaryContainer>
                    <h3>Descripción del producto</h3>
                    <p>
                        {props.description}
                    </p>
                </SecondaryContainer>
            </GeneralDetailsContainer>
        </Fragment>
    )
}

GeneralDetails.propTypes = {
    picture: PropTypes.string,
    conditional: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.any,
    description:PropTypes.string,
};


export default GeneralDetails;