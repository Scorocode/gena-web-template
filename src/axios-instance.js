import axios from 'axios';
import {BASE_URL} from "./const";

const instance = axios.create({
	baseURL: BASE_URL,
});

instance.interceptors.request.use(config => {
	config.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
	return config;
});

export default instance;
