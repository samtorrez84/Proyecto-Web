import app from './app.js'
import DB from "./db.js";
import dotenv from 'dotenv';

dotenv.config();

//Conecta la base de datos
DB.connectDB(process.env.DB_URI);

app.listen(3000, (req,res)=> {
    console.log('Server on port 3000')
})
