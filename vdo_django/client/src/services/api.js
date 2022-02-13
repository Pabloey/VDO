import axios from 'axios'
import { GLOBAL_BASE_URL } from '../globals'
// export const API_URL = 'http://localhost:8000/';

const Client = axios.create({ baseURL: GLOBAL_BASE_URL })

export default Client
