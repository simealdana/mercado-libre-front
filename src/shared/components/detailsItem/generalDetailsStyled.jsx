import styled from 'styled-components';

const { section ,div} = styled;

export const GeneralDetailsContainer = section`
    background:#fff;
    display: flex;
    flex-direction: column;
`;

export const MainContainer = section`
    display: grid;
    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr 1fr ;
        gap: 0px 0px;
        grid-template-areas:
          "main-img main-img main-img main-price"
          ". . . ."
          ". . . .";
    }
    grid-template-areas:
    "main-img main-img main-img main-img"
    "main-price main-price main-price main-price"
    ". . . .";

`;

export const MainImg = section`
    grid-area: main-img; 
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width:200px;
        padding:10px
    }
    @media (min-width: 768px) {
        img{
            width:500px;
            height: 400px;
            padding:10px
        }
    }


`;

export const MainPrices = section`
    display: flex;
    justify-content: start;
    align-items: start;
    grid-area: main-price;
    section{
        padding:32px;
        span{
            margin-bottom:16px;
        }
        h3{
            margin-bottom:32px;
            font-size:24px;
            margin-top:16px;
        }
        p{
            font-size:36px;
            margin-bottom:32px;
            margin: 0px;
        }
        button{
            background-color:#3483FA;
            border-radius:10px;
            border: none;
            display:inline-block;
            cursor:pointer;
            color:#ffffff;
            font-size:15px;
            padding:12px 70px;
            text-decoration:none;
            text-shadow:0px 1px 0px #263666;
            margin-top:32px;
            outline:none;
        }
    }

`;

export const Price = div`
    display: flex;
    justify-content: start;
    span{
        margin: 6px;
    }
`;

export const SecondaryContainer = section`
    display: flex;
    flex-direction: column;
    padding:32px;
    @media (min-width: 768px) {
        width:70%;
    }
    h3{
        font-size:28px;
        margin-bottom:32px;
    }
    p{
        font-size:16px;
        color:#999999;
        margin:0px;
        text-align:justify;
    }
`;
