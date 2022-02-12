import Axios from 'axios'
import { GLOBAL_BASE_URL } from '../globals'

const Client = Axios.create({ baseURL: GLOBAL_BASE_URL })

export default Client
