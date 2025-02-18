import axios from 'axios'

export const API = 'http://localhost:4000/api'

export const testimonioRequest = descripcion => axios.post('http://localhost:4000/api/testimonio', descripcion);

