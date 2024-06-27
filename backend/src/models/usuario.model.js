import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: false },
  correo: { type: String, required: true, unique: true },
  contrasena: { type: String, required: true },
  mascota:{
    nombre:{
      type: String,
      required: false
    },
    edad:{
      type: Number,
      required: false
    }
  }
});

export default model('Usuario', userSchema);
