import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';

const login = async (req, res) => {
    const { correo, contrasena } = req.body;  // Use 'contrasena' to match the field in the user model

    if (!correo || !contrasena) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await User.findOne({ correo });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(contrasena, user.contrasena);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        res.json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Error logging in', error });
    }
};

export default login;