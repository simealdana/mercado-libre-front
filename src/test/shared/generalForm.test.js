import React from 'react'
import GeneralForm from '../../shared/components/generalForm/generalForm';
import { render, fireEvent } from '@testing-library/react'


describe('should input ', () => {
    let response = null;
    const formList = [
        {
            type: 'text',
            field: 'searchItem',
            divClass: 'search-item',
            inputClass: 'search-item-input',
            labelClass: 'search-item-label',
            col: 'col-10',
            value1: '',
            value2: '',
            label: 'label',
            title: '',
            placeholder:'Nunca dejes de buscar'
        }
    ]

    const initialValues ={
        searchItem:""
    }

    const props = {
        formList,initialValues
    }

    const setup = () => {
        const utils = render(
            <GeneralForm 
            {...props}
            sendData={(value)=>{response = value}}
            />
        );
        const input = utils.getByLabelText(formList[0].label)
        return {
          input,
          ...utils,
        }
    }
    it('shouldC change value', () => {
        const { input } = setup();
        fireEvent.change(input, { target: { value: '23' } });
        expect(input.value).toBe('23');
        expect(response).toEqual({ searchItem: '23' });
    });
});

