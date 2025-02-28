import axios from 'axios'

export const API = 'http://localhost:4000/api'

export const articuloRequest = blog => axios.post('http://localhost:4000/api/blog', blog);