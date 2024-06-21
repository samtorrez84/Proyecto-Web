import React, { useEffect } from 'react';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/images/LLA_LOGO.png'; // Importa la imagen del logo

function ProfilePage() {
  const { user, setUser, deleteAcount, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar tu cuenta permanentemente? Esta acción no se puede deshacer.")) {
      try {
        await deleteAcount(user.id);
        console.log("Cuenta eliminada con éxito");
        setUser(null);
        navigate('/');
      } catch (error) {
        console.error("Error al eliminar la cuenta:", error.response?.data?.message || error.message);
      }
    }
  };

  const handleLogout = async () => {
    try{
      await logout()
    }catch (error) {
        console.error("Error al eliminar la cuenta:", error.response?.data?.message || error.message);
      }
  }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return (

    <div className="h-screen bg-custom-dark-900 text-gray-300 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto p-8 rounded-lg shadow-lg bg-custom-dark">
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-4">
            <div className="bg-custom-pink p-2 rounded-full shadow-md">
              <img src={logo} alt="LLA logo" className="h-24 w-24 rounded-full" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center">Perfil de Usuario</h1>
        </div>
  
        <div className="bg-custom-dark-700 p-6 rounded-lg shadow-inner mb-8">
          <h2 className="text-2xl font-semibold mb-4">Detalles del Usuario</h2>
          <div className="space-y-4">
            <p className="text-lg"><strong>Nombre:</strong> {user?.nombre || 'No disponible'}</p>
            <p className="text-lg"><strong>Correo Electrónico:</strong> {user?.email || 'No disponible'}</p>
          </div>
        </div>
  
        <div className="flex justify-center space-x-4">
          <button 
            className="bg-custom-blue hover:bg-custom-green text-white hover:text-black font-bold py-2 px-4 rounded-full transition duration-300"
            onClick={handleDeleteAccount}
          >
            Eliminar Cuenta
          </button>
          <button 
            className="bg-custom-blue hover:bg-custom-green text-white hover:text-black font-bold py-2 px-4 rounded-full transition duration-300 ml-6 mr-6"
            // Aquí puedes añadir un onClick para manejar la edición del nombre
          >
            Editar Nombre
          </button>
          <button 
            className="bg-custom-blue hover:bg-custom-green text-white hover:text-black font-bold py-2 px-4 rounded-full transition duration-300"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
  
  
}

export default ProfilePage;
