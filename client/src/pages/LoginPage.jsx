import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logo from '../assets/images/LLA_LOGO.png';

function LoginPage() {

  const {register, handleSubmit, formState:{errors}}= useForm()
  const {singin, errors: loginErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit( async (data) => {
    await singin(data)
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/main')
  }, [isAuthenticated])

  return (
    <div className='flex h-screen items-center justify-center bg-cover bg-center' style={{ backgroundImage: "url('/fondo1.png')" }}>
        <div className='bg-opacity-50 bg-black max-w-md w-full p-8 rounded-md shadow-lg relative '>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-4 rounded-full'>
                    <img src={logo} className='h-8 w-8' /> {/* Agrega la imagen del logo */}
                </div>
        {
            loginErrors && loginErrors.map((error, i) => (
                <div className='bg-red-500 p-2 text-white text-center mb-3 mt-3'  key={i}>
                    {error}
                </div>
            ))
        }

        <form onSubmit={onSubmit}> {/* La función onSubmit es utilizada en este formulario */}
            <h1 className='text-3xl font-bold text-center text-white  mb-8 mt-6'>Inicia sesión</h1>

            {/* Utilizamos la librería y register, el primer parámetro es el nombre y el segundo las validaciones o requerimientos */}
            <input
                type="email"
                {...register('email', { required: true })}
                className='w-full bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 mb-4'
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
                className='w-full bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 mb-4'
                placeholder='Contraseña'
            />
            {
                errors.contrasena && (
                    <p className='text-red-500'>La contraseña es requerida</p>
                )
            }
            <div className='flex justify-center'>
                <button type='submit' className='w-48 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mt-3 mb-3 focus:outline-none'>
                    Iniciar sesión
                </button>
            </div>
        </form>
        <p className='flex gap-x-2 justify-between mt-4 mb-6'> 
            ¿Aúm no tienes una cuenta? <Link to='/register' className='text-white-400 underline'>Regístrate</Link>
        </p>
    </div>
</div>

  )
}

export default LoginPage