const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/geoapp';
    
    await mongoose.connect(mongoURI);
    console.log('MongoDB conectado com sucesso!');
  } catch (err) {
    console.error('Erro ao conectar no MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;