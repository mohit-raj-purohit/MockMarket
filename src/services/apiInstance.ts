import axios from 'axios';
import {API_URL} from '../constants/api';
export const apiInstance = axios.create({
	baseURL: API_URL,
});
