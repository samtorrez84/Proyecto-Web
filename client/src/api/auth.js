import axios from './axios.js'

const API = 'http://localhost:3000/api' 
//Va recibir un usario y lo va a pasar como requestbody
export const registerRequest = usuario => axios.post(`/register`, usuario)

export const loginRequest = usuario => axios.post(`/login`, usuario)

export const verifyTokenRequest = () => axios.get('/verify')