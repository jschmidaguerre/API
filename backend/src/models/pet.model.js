import mongoose from 'mongoose';

// Definición del esquema para Pet
const petSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  neutered: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true }
});

// Creación del modelo Pet basado en el esquema
const Pet = mongoose.model('Pet', petSchema);

export default Pet;