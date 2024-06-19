import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import {useNavigate, Link} from 'react-router-dom'

function RegisterPage() {

    const {register, handleSubmit, formState:{ errors }} = useForm(); //FormState extrae los errores

    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
      if(isAuthenticated){
        navigate('/main');
      }
    },  [isAuthenticated])

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
    <div className='bg-zinc-800 max-w-md w-full p-4 rounded-md'>
        {
            registerErrors && registerErrors.map((error, i) => (
                <div className='bg-red-500 p-2 text-white text-center' key={i}>
                    {error}
                </div>
            ))
        }
        <form onSubmit={handleSubmit(async values => {
            signup(values);
        })}>

          <h1 className='text-2xl font-bold mt-4 mb-6 text-center'>Regístrate</h1>  
            {/* Utilizamos la librería y register, el primer parámetro es el nombre y el segundo las validaciones o requerimientos */}
            <input
                type="text"
                {...register('nombre', { required: true })}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Nombre'
            />
            {
                errors.nombre && (
                    <p className='text-red-500'>El usuario es requerido</p>
                )
            }
            <input
                type="email"
                {...register('email', { required: true })}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Email'
            />
            {
                errors.email && (
                    <p className='text-red-500'>El correo es requerido</p>
                )
            }
            <input
                type="password"
                {...register('contrasena', { required: true })}
                className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                placeholder='Contraseña'
            />
            {
                errors.contrasena && (
                    <p className='text-red-500'>La contraseña es requerida</p>
                )
            }
            <button type='submit' className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mt-4 focus:outline-none'>
                Registrar
            </button>
        </form>
        
        <p className='flex gap-x-2 justify-between mt-4 mb-6'> 
            ¿Ya tienes una cuenta? <Link to='/login' className='text-sky-500'>Inicia sesión</Link>
        </p>
    </div>
</div>

  )
}

export default RegisterPage