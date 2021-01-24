import React from 'react'
import Card from '../../shared/components/card/card';
import { render } from '@testing-library/react'


describe('should card ', () => {

    const item ={
        author: {},
        item: {
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
        },
        cetegories: ["MLA1055"]  
    }


    it('should $15900 in the prices amount', () => {
        const { getByText } = render(
            <Card 
                item={item.item} 
            />
        );
        expect(getByText('$159000')).toBeInTheDocument()
    });

    it('should Nuevo in the condicional status', () => {
        const { getByText } = render(
            <Card 
                item={item.item} 
            />
        );
        expect(getByText('Nuevo')).toBeInTheDocument()
    });

    it('should iPhone 11 64 Gb Negro like title item', () => {
        const { getByText } = render(
            <Card 
                item={item.item} 
            />
        );
        expect(getByText('iPhone 11 64 Gb Negro')).toBeInTheDocument()
    });
});

