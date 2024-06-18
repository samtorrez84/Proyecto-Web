//Vamos a crear una función que recibirá un esquema para ejecutar la validación

//Cuando se reciba un esquema, se va a ejecutar 
export const validateSchema = (schema) => (req, res, next) => {
    try {
        //Valida el esquema y continua con el código donde se colocará el middleware
        schema.parse(req.body) //Va a verificar que los datos enviados en el req.body sean validados por el schema que recibió
        next()
    } catch(error) {
        return res.status(400).json(error.errors.map((error) => error.message))
    }
} 