// userSchema.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    contrasena: { type: String, required: true },
    pets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }] // Referencia a las mascotas del usuario
});

const User = mongoose.model('User', userSchema);

export default User;