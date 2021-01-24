import styled from 'styled-components';

const { section } = styled;

export const Flex = section`
    font-family: SantanderText-Regular, 'Open Sans', sans-serif;
    display: flex;
    flex-direction: ${({ column }) => (column ? 'column' : 'row')};
    justify-content: ${props => props.justifyContent};
    align-items: ${({ alignItems }) => alignItems};
    height: ${({ height }) => height};
    width: ${({ width }) => width || '100%'}; 


`;

export const Grid = section`
    display:grid;
    width:100%;
`;

export const GridTemplateColumn = section`
    display: grid;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    width: 100%;
    @media (min-width: 768px) {
        grid-template-columns:${props => `1fr 3fr repeat(${props.number}, 1fr);`};
    }
`;

export const GridTemplateRow = section`
    display: grid;
    grid-template-rows:${props => `repeat(${props.number}, 1fr);`}
    width: 100%;
`;

