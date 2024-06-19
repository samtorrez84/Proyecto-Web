import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';
//import { deleteAccount } from '../api/userService'; // Asegúrate que la ruta de importación es correcta

function ProfilePage() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    if (window.confirm("¿Estás seguro de que deseas eliminar tu cuenta permanentemente? Esta acción no se puede deshacer.")) {
      try {
        //await deleteAccount(user._id);
        console.log("Cuenta eliminada con éxito");
        setUser(null); // Limpia el usuario del contexto
        navigate('/'); // Redirige al usuario a la página principal
      } catch (error) {
        console.error("Error al eliminar la cuenta:", error.response?.data?.message || error.message);
      }
    }
  };

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center ">
      <div className="max-w-xl mx-auto p-5 rounded-lg shadow bg-gray-500">
        <h1 className="text-xl font-bold text-center mt-4 mb-6">Bienvenido a tu Perfil</h1>
        <div className="mb-3">
          <h2 className="text-lg font-semibold">Detalles del Usuario:</h2>
          <p><strong>Nombre:</strong> {user?.nombre || 'No disponible'}</p>
          <p><strong>Correo Electrónico:</strong> {user?.email || 'No disponible'}</p>
        </div>
        <div className="text-center mt-6">
          <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={handleDeleteAccount}
          >
            Eliminar Cuenta
          </button>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            
          >
            Editar Nombre
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
