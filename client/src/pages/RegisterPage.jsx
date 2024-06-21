import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import logo from '../assets/images/LLA_LOGO.png';


function RegisterPage() {

    const {register, handleSubmit, formState:{ errors }} = useForm(); //FormState extrae los errores
    const {signup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate()

    const onSubmit = handleSubmit( async (data) => {
        await signup(data)
      });

    useEffect(() => {
      if(isAuthenticated){
        navigate('/main');
      }
    },  [isAuthenticated])

    return (
        <div className='flex h-screen items-center justify-center bg-cover bg-center ' style={{ backgroundImage: "url('/fondo1.png')" }} >
            <div className='bg-opacity-50 bg-black max-w-md w-full p-8 rounded-md shadow-lg relative '>
                <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-4 rounded-full'>
                    <img src={logo} className='h-8 w-8' /> {/* Agrega la imagen del logo */}
                </div>
                {
                    registerErrors && registerErrors.map((error, i) => (
                        <div className='bg-red-500 p-2 text-white text-center mb-2 mt-3' key={i}>
                            {error}
                        </div>
                    ))
                }
                <form onSubmit={onSubmit}>

                    <h1 className='text-3xl font-bold text-center text-white mb-8 mt-6'>Regístrate</h1>
                    <input
                        type="text"
                        {...register('nombre', { required: true })}
                        className='w-full bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 mb-4'
                        placeholder='Nombre'
                    />
                    {
                        errors.nombre && (
                            <p className='text-red-500 mb-4'>El usuario es requerido</p>
                        )
                    }
                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className='w-full bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 mb-4'
                        placeholder='Correo'
                    />
                    {
                        errors.email && (
                            <p className='text-red-500 mb-4'>El correo es requerido</p>
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
                            <p className='text-red-500 mb-4'>La contraseña es requerida</p>
                        )
                    }
                    <div className='flex justify-center'> 
                        <button type='submit' className='w-48 bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full mt-3 mb-3 focus:outline-none'>
                            Registrar
                        </button>
                    </div>
                </form>

                <p className='flex justify-between mt-4 text-white'>
                    ¿Ya tienes una cuenta? <Link to='/login' className='text-white-400 underline'>Inicia sesión</Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterPage