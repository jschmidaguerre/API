import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  correo: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  mascota:{
    nombre:{
      type: String,
      required: true
    },
    edad:{
      type: Number,
      required: true
    }
  }
});

export default model('Usuario', userSchema);
