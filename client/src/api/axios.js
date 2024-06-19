import axios from 'axios'

//Vamos a decirle el dominio al que siempre va a consultar 
const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true //Establece aquí las cookies

})

export default instance