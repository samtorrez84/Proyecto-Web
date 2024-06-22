import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/LLA_LOGO.png';

const UpdateUserName = () => {
    const { user, updateUserName, errors, setUser } = useAuth();
    const [nombre, setNombre] = useState(user?.nombre || '');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user) {
            try {
                await updateUserName(user.id, nombre);
                setMessage('Nombre actualizado con éxito');
                // Actualizar el estado local del usuario después de actualizar el nombre
                setUser({ ...user, nombre });
                navigate(-1);
            } catch (error) {
                console.error("Error al actualizar el nombre:", error);
                setMessage('Error al actualizar el nombre');
            }
        }
    };

    const handleCancel = () => {
        navigate(-1); // Vuelve atrás en la historia de navegación
    };

    return (
        <div className="min-h-screen bg-custom-dark-900 text-gray-300 flex items-center justify-center">
            <div className="max-w-md w-full mx-auto p-8 rounded-lg shadow-lg bg-custom-dark">
                <div className="flex flex-col items-center mb-8">
                    <div className="relative mb-4">
                        <div className="bg-custom-pink p-2 rounded-full shadow-md">
                            <img src={logo} alt="LLA logo" className="h-24 w-24 rounded-full" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold text-center">Actualizar Nombre de Usuario</h1>
                </div>

                <form onSubmit={handleSubmit} className="mb-8">
                    <div className="bg-custom-dark-700 p-4 rounded-lg shadow-inner mb-4">
                        <label htmlFor="nombre" className="text-xl font-semibold mb-2 block">Nuevo Nombre:</label>
                        <input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            className="w-full bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                            placeholder="Nuevo nombre"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <button type="submit" className="w-1/2 bg-custom-blue hover:bg-custom-green text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none">
                            Actualizar Nombre
                        </button>
                        <button type="button" onClick={handleCancel} className="w-1/2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none">
                            Cancelar
                        </button>
                    </div>
                </form>

                {message && <p className="text-green-500 text-center mb-4">{message}</p>}
                {errors.length > 0 && (
                    <div>
                        {errors.map((error, index) => (
                            <p key={index} className="text-red-500 text-center">{error}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UpdateUserName;
