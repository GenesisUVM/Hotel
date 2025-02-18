import axios from 'axios'

export const API = 'http://localhost:4000/api'

export const registerRequest = usuario => axios.post('http://localhost:4000/api/registro', usuario);

