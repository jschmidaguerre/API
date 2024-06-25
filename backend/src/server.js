import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import usuario from './models/usuario.model.js';
import Pet from './models/pet.model.js';  // Importación correcta del modelo Pet

const app = express();
const port = 3000;
const uri = 'mongodb://127.0.0.1:27017/test';

// Configuración de CORS para permitir solicitudes de cualquier origen
app.use(cors());


app.use(express.json());  // Middleware para parsear JSON

// Endpoint para crear usuarios
app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, edad, correo, contraseña, mascota } = req.body;

    if (!nombre || !edad) {
      return res.status(400).json({ message: 'Bad request, name or age not found' });
    }
    const usuarioNuevo = new usuario({
      nombre,
      edad,
      correo,
      contraseña,
      mascota
    });

    const usuarioGuardado = await usuarioNuevo.save();
    res.status(201).json({ usuario: usuarioGuardado });
    console.log('Usuario creado');
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint para obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await usuario.find();
    res.json({ usuarios });
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint para obtener todas las mascotas
app.get('/pets', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json({ pets });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint para crear mascotas
app.post('/pets', async (req, res) => {
  try {
    const newPet = new Pet(req.body);
    const savedPet = await newPet.save();
    res.status(201).json({ pet: savedPet });
  } catch (error) {
    res.status(400).send(error);
  }
});

// Endpoint para eliminar mascotas
app.delete('/pets/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Received request to delete pet with id: ${id}`); // Log para ver el ID recibido

    // Convertir el ID a ObjectId utilizando 'new'
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const deletedPet = await Pet.findByIdAndDelete(new mongoose.Types.ObjectId(id));
    if (!deletedPet) {
      console.log(`Pet with id: ${id} not found`);
      return res.status(404).json({ message: 'Pet not found' });
    }

    console.log(`Pet with id: ${id} deleted successfully`);
    res.status(200).json({ message: 'Pet deleted successfully' });
  } catch (error) {
    console.log('Error deleting pet:', error);
    res.status(500).json({ message: 'Error deleting pet', error });
  }
});

// Conexión a MongoDB y lanzamiento del servidor
mongoose.connect(uri)
  .then(() => {
    console.log('Connection success');
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Connection fail', error);
  });