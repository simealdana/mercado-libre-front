import styled from "styled-components";

const ErrorContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: start;
    background: rgba(232,229,232,0.7);
    `;

export const ErrorCard = styled.section`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100px;
    color: rgb(97, 26, 21);
    background-color: rgb(253, 236, 234);
    margin:30px;
`;

export default ErrorContainer;