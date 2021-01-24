import styled from "styled-components";

export const SpinnerContainer = styled.section`
    width: 100%;
    height: 100vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.6;
    background: rgba(232,229,232,0.7);
`;

const Spinner = styled.svg`
animation: rotate 1s linear infinite;
margin: 40px;
width: 50px;
height: 50px;

& .path {
  stroke:#3483FA;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
`;
export default Spinner;