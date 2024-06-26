import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import user from './models/user.model.js';
import Pet from './models/pet.model.js';  // Importación correcta del modelo Pet
import Service from './models/service.model.js';  // Importación correcta del modelo Service
import login from './controllers/login.js';
import register from './controllers/register.js';
import id from './controllers/getUserById.js';


//server
const app = express();
const port = 3000;
const uri = 'mongodb://127.0.0.1:27017/test';


// Configuración de CORS para permitir solicitudes de cualquier origen
app.use(cors());


app.use(express.json());  // Middleware para parsear JSON


app.post('/register', register);
app.post('/login', login);
app.get('/user/:id', id);



// Endpoint para crear mascotas con asociación a un usuario
app.post('/pets', async (req, res) => {
  const { name, gender, neutered, age, weight, ownerId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(ownerId)) {
    return res.status(400).json({ message: 'Invalid owner ID format' });
  }

  try {
    const pet = new Pet({
      name,
      gender,
      neutered,
      age,
      weight,
      owner: ownerId
    });

    const savedPet = await pet.save();

    const user = await User.findById(ownerId);
    user.pets.push(savedPet._id);
    await user.save();

    res.status(201).json(savedPet);
  } catch (error) {
    console.log('Error creating pet:', error);
    res.status(400).json({ message: 'Error creating pet', error });
  }
});


// Endpoint para crear servicios
app.post('/services', async (req, res) => {
  const { name, category, frequency, fromDate, toDate, cost, serviceType, description, image, localidad, owner } = req.body;

  if (!mongoose.Types.ObjectId.isValid(owner)) {
      return res.status(400).json({ message: 'Invalid owner ID format' });
  }

  try {
      // Crear un nuevo servicio
      const newService = new Service({
          name,
          category,
          frequency,
          fromDate,
          toDate,
          cost,
          serviceType,
          description,
          image,
          localidad,
          owner
      });

      // Guardar el servicio en la base de datos
      const savedService = await newService.save();

      // Asociar el servicio al usuario
      const user = await User.findById(owner);
      user.services.push(savedService._id);
      await user.save();

      res.status(201).json({ service: savedService });
  } catch (error) {
      console.log('Error creating service:', error);
      res.status(400).json({ message: 'Error creating service', error });
  }
});


// Endpoint para obtener todas las mascotas de un usuario específico
app.get('/pets', async (req, res) => {
  const { ownerId } = req.query;

  if (!ownerId) {
    return res.status(400).json({ message: 'Owner ID is required' });
  }

  if (!mongoose.Types.ObjectId.isValid(ownerId)) {
    return res.status(400).json({ message: 'Invalid owner ID format' });
  }

  try {
    const pets = await Pet.find({ owner: ownerId });
    res.json({ pets });
  } catch (error) {
    console.log('Error fetching pets:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint para eliminar un servicio por ID
app.delete('/services/:id', async (req, res) => {
  const { id } = req.params;  // Extraer el ID del servicio de los parámetros de la URL

  // Validar si el ID tiene un formato válido de MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.log(`Failed to delete: Invalid ID format provided (${id}).`); // Log de error si el formato de ID es inválido
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  try {
    const deletedService = await Service.findByIdAndDelete(id);
    if (!deletedService) {
      console.log(`Deletion attempt failed: No service found with ID ${id}.`); // Log cuando no se encuentra el servicio
      return res.status(404).json({ message: 'Service not found' });
    }

    console.log(`Service with ID ${id} has been deleted successfully.`); // Log de éxito al eliminar el servicio
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.log(`Error deleting service with ID ${id}:`, error); // Log de cualquier otro error que ocurra
    res.status(500).json({ message: 'Error deleting service', error });
  }
});


app.get('/services', async (req, res) => {
  try {
    // Construyendo un objeto de consulta basado en parámetros recibidos
    const query = {};
    if (req.query.localidad) query.localidad = req.query.localidad;
    if (req.query.serviceType) query.serviceType = req.query.serviceType;
    if (req.query.category) query.category = req.query.category;
    if (req.query.fromDate) query.fromDate = { $gte: new Date(req.query.fromDate) };
    if (req.query.toDate) query.toDate = { $lte: new Date(req.query.toDate) };

    const services = await Service.find(query);
    res.json({ services });
  } catch (error) {
    console.log('Error fetching services:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Endpoint para crear servicios
app.post('/services', async (req, res) => {
  try {
    const newService = new Service(req.body);
    const savedService = await newService.save();
    res.status(201).json({ service: savedService });
  } catch (error) {
    console.log('Error creating service:', error);
    res.status(400).json({ message: 'Error creating service', error });
  }
});

app.get('/user/:id', id)
app.post('/register', register)
app.post('/login', login)


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

// Endpoint para eliminar un servicio por ID
app.delete('/services/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Received request to delete service with id: ${id}`); // Log para ver el ID recibido

    // Convertir el ID a ObjectId utilizando 'new'
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const deletedService = await Service.findByIdAndDelete(new mongoose.Types.ObjectId(id));
    if (!deletedService) {
      console.log(`Service with id: ${id} not found`);
      return res.status(404).json({ message: 'Service not found' });
    }

    console.log(`Service with id: ${id} deleted successfully`);
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.log('Error deleting service:', error);
    res.status(500).json({ message: 'Error deleting service', error });
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

  // After all route handlers
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
      message: err.message,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});