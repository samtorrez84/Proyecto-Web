import Usuario from '../models/usuario.js'

export const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await Usuario.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Cuenta eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la cuenta', error });
    }
};

