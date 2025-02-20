import axios from 'axios'

export const API = 'http://localhost:4000/api'

export const articuloRequest = articulo => axios.post('http://localhost:4000/api/blog', articulo);

