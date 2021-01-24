import styled from 'styled-components';

const { div,input } = styled;

export const FormContainer = div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    width:100%
`;

export const FormInput = div`
    width: ${({ col }) => {
		let res = '100%';
		res = col === 'col-3' ? (res = '25%') : res;
		res = col === 'col-4' ? (res = '33.3333%') : res;
		res = col === 'col-6' ? (res = '50%') : res;
		res = col === 'col-12' ? (res = '100%') : res;
		return res;
	}};
`;

export const InputText = input`
    border-radius: 5px;
    background: #fff;
    border:none;
    outline:none;
    padding: 10px;
    &:input:focus {
        border:1px solid #56b4ef;
        box-shadow: 0px 0px 3px 1px #c8def0;
    }
`;
