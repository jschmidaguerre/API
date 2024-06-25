import express from 'express';
const app = express()
const port = 3000
const uri = 'mongodb://127.0.0.1:27017/test';
import usuario from './models/usuario.model.js';
import mongoose from 'mongoose';

app.post('/usuarios', async (req, res) => {
  try {
    const nombre = req.body?.nombre;
    const edad = req.body?.edad;
    const correo = req.body?.correo;
    const contraseña = req.body?.contraseña;
    const mascota = req.body?.mascota;

    if (!nombre || !edad) {
      return res.status(400).json({ message: 'Bad request, name or age not found' });
    }
    const usu = new usuario({
      nombre,
      edad,
      correo,
      contraseña,
      mascota
    });

    const usuPrueba = new usuario([
      { nombre: 'John Doe', edad: 22, email: 'johndoe@example.com', contraseña: 'test123', mascota: 'si' },
      
      
    ]);
    const save = await usuPrueba.save();
    
    //res.status(201).json({ usu: save }, );
    res.status(201).json({ usuPrueba: save })
    console.log('usuario creado')
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/usuarios', async (req, res) => {
  try {
    return res.json({ usuario });
    
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

const Pet = mongoose.model('Pet', petSchema);

// Endpoint to get all pets
app.get('/pets', async (req, res) => {
    try {
        const pets = await Pet.find();
        res.json(pets);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.post('/pets', async (req, res) => {
  try {
      const newPet = new Pet(req.body);  // `req.body` will be expected to be in the format of the JSON object you provided
      const savedPet = await newPet.save();
      res.status(201).json(savedPet);
  } catch (error) {
      res.status(400).send(error);
  }
});
mongoose.connect(uri)
  .then(() => {
    console.log('Connection success');
    app.listen(port, () => {
      console.log(`Server listen on http://localhost:${port}`);
    });
  })
  .catch(error => {
    console.error('Connection fail', error);
  });
