import styled from 'styled-components';

const { section,img,div } = styled;

export const CardSection = section`
    background:#ffff;
    display: grid;
    grid-template-columns:${props => ` 1fr 6fr repeat(${props.number}, 1fr);`};
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
    cursor:pointer;
`;
export const CardImgSection = div`
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    justify-content: center;
    padding:4px
    @media (min-width: 768px) {
        justify-content: flex-end; 
    }
`;

export const CardDetailSection = div`
    h4{
        font-size: 20px;
        margin-bottom: 0px;
        color: #333333;
        font-weight: 400;
        margin:0px;
    }
    h5{
        font-size: 17px;
        margin-bottom: 0px;
        color: #333333;
        font-weight: 400;
        margin-top:10px;
    }
    p{
        margin-bottom: 0px;
        margin-top: 0px;
    }
    img{
        padding-left:10px
    }
    @media (min-width: 768px) {
        grid-area: 1 / 2 / 2 / 5; 
    }
`;

export const CardImg = img`
    width: 180px;
    height: 180px;
`;

