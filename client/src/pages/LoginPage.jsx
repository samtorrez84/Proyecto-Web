import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function LoginPage() {

  const {register, handleSubmit, formState:{errors}}= useForm()
  const {singin, errors: loginErrors} = useAuth();

  const onSubmit = handleSubmit((data) => {
    singin(data)
  })

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
    <div className='bg-zinc-800 max-w-md w-full p-4 rounded-md'>
        {
            loginErrors && loginErrors.map((error, i) => (
                <div className='bg-red-500 p-2 text-white text-center' key={i}>
                    {error}
                </div>
            ))
        }

        <form onSubmit={onSubmit}> {/* La función onSubmit es utilizada en este formulario */}
            <h1 className='text-2xl font-bold mt-4 mb-6 text-center'>Inicia sesión</h1>

            {/* Utilizamos la librería y register, el primer parámetro es el nombre y el segundo las validaciones o requerimientos */}
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
                Iniciar sesión
            </button>
        </form>
        <p className='flex gap-x-2 justify-between mt-4 mb-6'> 
            ¿Aúm no tienes una cuenta? <Link to='/register' className='text-sky-500'>Regístrate</Link>
        </p>
    </div>
</div>

  )
}

export default LoginPage