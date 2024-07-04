const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId, // Referencia al modelo de Usuario
    required: true
  },
  serviceID: {
    type: mongoose.Schema.Types.ObjectId, // Referencia al modelo de Servicio
    required: true
  },
  status: {
    type: String,
    enum: ['Solicitada', 'Aceptada', 'Finalizada', 'Cancelada'],
    default: 'Solicitada'
  },
  contactPhone: {
    type: String,
    required: true
  },
  contactEmail: {
    type: String,
    required: true
  },
  contactTime: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
});

const Contract = mongoose.model('Contract', contractSchema);

module.exports = Contract;