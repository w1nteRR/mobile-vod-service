  import axios from 'axios'

import { IP } from '../env'

export const api = axios.create({
    withCredentials: true,
    baseURL: `${IP}/`
})