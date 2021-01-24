import {store} from '../../redux/store/index';

export const requestHandler = async request => {
    const { dispatch } = store;
	dispatch({ type: 'LOADING_ON' });
	dispatch({ type: 'ERROR_OFF' })
    const data =JSON.stringify({ 
        'name': 'simeon',
        'lastname': 'aldana' 
    })
	request.data = data;
    request.headers['Content-Type'] = 'application/json';
	return request;
};

export const successHandler = response => {
	const { dispatch } = store;
	dispatch({ type: 'LOADING_OFF' });
	return {
		data: response.data,
		error: undefined
	};
};

export const errorHandler = (error) => {
	const { dispatch } = store;
	dispatch({ type: 'LOADING_OFF' })
	dispatch({ type: 'ERROR_ON' })
	let payload = 'A ocurrido un error por favor volver a intentarlo'
    if (error.response) {
        switch (error.response.status.toString()) {
            case '400': {
				payload="Contactenos por este error"
                break
            }

            case '401': {
                payload="No estas autorizado"
                break
            }

            case '403': {
				payload="No estas autorizado"
                break
            }

            case '404': {
                payload="Elemento no encontrado"
                break
            }

            case '500': {
                payload = 'Error de conexion'
                break
            }

            default: {
                payload = 'Se produjo un error'
            }
		}
		dispatch({ type: 'SET_MESSAGE_ERROR',payload})
    }

    return {
        // After all, return the object
        error: {
            code: error.response.status.toString(),
            errorMessage: payload
        },
        data: undefined
    }
}