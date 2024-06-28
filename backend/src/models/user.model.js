import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

export default User;