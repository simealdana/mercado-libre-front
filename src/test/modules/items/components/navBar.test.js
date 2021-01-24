import React from 'react'
import NavBar from '../../../../modules/items/componets/navBar';
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter} from 'react-router-dom';

describe('should input ', () => {
    let setup = null
    beforeEach(()=>{
        const initialState = {
            initial: {
                
            }
        };
        const mockStore = configureStore();
        const store = mockStore(initialState);
        setup = () => {
            const utils = render(
                <Provider store={store}>
                    <BrowserRouter>
                        <NavBar />
                    </BrowserRouter>
                </Provider>   
            );
            const input = utils.getByLabelText("labe")
            return {
              input,
              ...utils,
            }
        }

    })

    it('shouldC change value', () => {
        const { input } = setup();
        fireEvent.change(input, { target: { value: 'iphone' } });
        expect(input.value).toBe('iphone');
    });

    it("Use state change",async()=>{
        const mockSetState = await jest.fn();
        jest.mock('react', () => ({
            ...jest.requireActual('react'),
            useState: initial => [initial, mockSetState]
        }));
        const { input } = await setup();
        fireEvent.change(input, { target: { value: 'iphone' } });
        setTimeout(() => {
            expect(mockSetState).toHaveBeenCalledWith({ searchItem: 'iphone' });
        }, 100);
    });
});




