import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
    name: { type: String, reqcuired: true },
    category: { type: String, required: true },
    frequency: { type: String, required: true },
    fromDate: { type: Date, required: true },
    toDate: { type: Date, required: true },
    cost: { type: Number, required: true },
    serviceType: { type: String, required: true },
    description: { type: String, required: true },
    stars: { type: Number, default: 0 }, // Añadiendo una propiedad de estrellas
    image: { type: String, default: '' }, // Añadiendo una propiedad de imagen con valor por defecto ''
    localidad: { type: String } // Añadiendo la nueva propiedad localidad
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;