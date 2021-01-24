import React from 'react';
import PropTypes from 'prop-types';
import {CardSection,CardImg,CardImgSection,CardDetailSection} from './cardStyled';
import {GridTemplateColumn} from '../../styleComponents/layoutComponent';
import ShippingLogo from '../../../styles/images/ic_shipping.png';
import {Flex} from '../../styleComponents/layoutComponent';
const Card = ({item})=>{
    return(
        <CardSection>
            <GridTemplateColumn 
                number={3} 
                style={{borderBottom:"solid 0.4px lightgrey", margin:"20px",width: "97%"}}>
                <CardImgSection>
                    <CardImg id="picture-item" src={item.picture}/>
                </CardImgSection>
                <CardDetailSection>
                    <Flex>
                        <h4 id="price-amount">${item.price.amount}</h4>
                        {item.free_shipping && (
                            <img id="free-shipping" src={ShippingLogo}/>
                        )}
                    </Flex>
                    <div>
                        <h5 id="title-item">{item.title}</h5>
                        <p id="conditional-item">
                            {item.conditional === "new"?
                            "Nuevo"
                            :
                            "Usado"
                            }
                        </p>
                    </div>
                    <div>

                    </div>
                </CardDetailSection>
                <div>
                    <h4 id="address">{"Capital Federal"}</h4>
                </div>
            </GridTemplateColumn>
        </CardSection>
    )
}
export default Card;

Card.propTypes = {
    item: PropTypes.any,
};
