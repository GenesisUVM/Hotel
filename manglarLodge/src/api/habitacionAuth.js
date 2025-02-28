import axios from 'axios'

export const API = 'http://localhost:4000/api'

export const habitacionesRequest = habitacion => axios.post('http://localhost:4000/api/habitacion', habitacion);