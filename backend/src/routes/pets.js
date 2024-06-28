// routes/pets.js
import express from 'express';
import Pet from '../models/petSchema.js';
import User from '../models/userSchema.js';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, gender, neutered, age, weight, ownerId } = req.body;

        // Crear una nueva mascota
        const pet = new Pet({
            name,
            gender,
            neutered,
            age,
            weight,
            owner: ownerId
        });

        // Guardar la mascota en la base de datos
        const savedPet = await pet.save();

        // Asociar la mascota al usuario
        const user = await User.findById(ownerId);
        user.pets.push(savedPet._id);
        await user.save();

        res.status(201).json(savedPet);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;