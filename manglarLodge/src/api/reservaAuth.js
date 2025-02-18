import axios from 'axios'

export const API = 'http://localhost:4000/api'

export const reservaRequest = reservacion => axios.post('http://localhost:4000/api/reserva', reservacion);

