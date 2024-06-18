import axios from 'axios'

const API = 'http://localhost:3000/api' 
//Va recibir un usario y lo va a pasar como requestbody
export const registerRequest = usuario => axios.post(`${API}/register`, usuario)

export const loginRequest = usuario => axios.post(`${API}/login`, usuario)