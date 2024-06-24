import axios from './axios.js'

const API = 'http://localhost:3000/api' 

//Va recibir un usario y lo va a pasar como requestbody
export const obtenerJugadoresRequest = () => axios.get(`/jugadores`)
export const obtenerJugadorPorNombre = (nickname) => axios.get(`/jugadores/${nickname}`)
export const crearJugador = (jugador) => axios.post(`/jugadores`, jugador)