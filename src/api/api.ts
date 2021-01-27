  import axios from 'axios'

import { IP } from '../env'

export const api = axios.create({
  baseURL: `${IP}/`
})