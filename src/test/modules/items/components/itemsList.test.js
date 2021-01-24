import React from 'react'
import ItemsList from '../../../../modules/items/componets/itemsList';
import { render, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter,Route} from 'react-router-dom';

describe('Items list test', () => {
    let setup = null;
    beforeEach(()=>{
        const initialState = {
            itemsReducer: {
                items:[{
                    id: "MLA901421848",
                    title: "iPhone 11 64 Gb Negro",
                    price: {
                        currency: "ARS",
                        amount: 159000,
                        decimals: 11
                    },
                    picture: "http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg",
                    conditional: "new",
                    free_shipping: true,
                    description: "Fotos amplias y perfectas de día y de noche Su cámara ultra gran angular abarca un campo visual hasta cuatro veces más grande para que nada ni nadie se quede afuera de la toma. Y con el modo Noche la poca luz no es problema. Ya sea de fiesta con amigos o en un cumpleaños familiar, guardá los mejores momentos sin necesidad de usar flash. ¡La función se activa automáticamente! Retratos más reales El modo HDR Inteligente de última generación reconoce a las personas de la imagen, mejora la iluminación del rostro y da un aspecto natural a los tonos de piel. Pero eso no es todo: brinda más detalle a las sombras y conserva la calidad de imagen del fondo. ¿Qué más se puede pedir de una foto? Grabá y editá videos a nivel profesional Todas las cámaras del iPhone 11 graban videos en 4K con una nitidez increíble. Su cámara ultra gran angular permite capturar paisajes imperdibles y escenas en movimiento, como a un amigo andando en bicicleta en el parque. ¿Un recital de música? Hacé zoom en la imagen y el sonido también se acercará. Un iPhone que te ofrece todo La pantalla LCD Liquid Retina hace que todo se vea más real y su tecnología True Tone ajusta el balance de blancos a la luz del entorno de manera automática. El sistema de autentificación Face ID reconoce tu rostro para brindarte mayor seguridad que la tecnología Touch ID. Como si esto fuera poco, con su chip A13 Bionic y la batería de carga rápida, navegá a máxima velocidad y sin interrupciones."
                }]
            }
        };
        const mockStore = configureStore();
        const store = mockStore(initialState);
        setup = render(
            <Provider store={store}>
                <BrowserRouter>
                    <Route exact path="/item/:id" >Book page</Route>
                    <ItemsList />
                </BrowserRouter>
            </Provider>
        );
    });
    it('Should conditional state Nuevo', () => {
        const { getByText } = setup;
        expect(getByText('Nuevo')).toBeInTheDocument();
    });

    it('Should onclick in the item', () => {
        const firstItem = setup.container.querySelector('#item-1');
        fireEvent.click(firstItem);
        expect(setup.container).toHaveTextContent(/Book page/);
    });
    
});
