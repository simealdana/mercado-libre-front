import Axios from 'axios';
import {requestHandler,successHandler,errorHandler} from './interceptos';

const mainIntance = Axios.create({
    baseURL: "http://localhost:4000",
    body:{
        name: 'simeon',
        lastname: 'aldana' 
    }
});

mainIntance.interceptors.request.use(request => requestHandler(request));
mainIntance.interceptors.response.use(
    (response) => successHandler(response),
    (error) => errorHandler(error)
);

const getEntitie = async query => {
    let data = null;
    const url =`http://localhost:4000/${query}`
	await mainIntance.post(url).then(
		res => {
			try {
				data = res.data;
			} catch (error) {
				data = error.response.data;
			}
		}
	);
	return data;
};


export default getEntitie;