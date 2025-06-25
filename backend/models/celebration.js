const mongoose = require('mongoose');

const celebrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  occasion: { type: String, required: true },
  message: { type: String },
  date: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Celebration', celebrationSchema);

//I MADE THIS FILE IN YOUR BACKEND MODELS FOLDER, DONT MIND :)

