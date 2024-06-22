import axios from './axios.js'

const API = 'http://localhost:3000/api' 

//Va recibir un usario y lo va a pasar como requestbody
export const obtenerJugadoresRequest = () => axios.get(`/jugadores`)
export const obtenerJugadorPorNombre = (nombre) => axios.get(`/jugadores/${nombre}`)
export const crearJugador = (jugador) => axios.post(`/jugadores`, jugador)