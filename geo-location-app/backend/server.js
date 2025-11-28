require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./src/config/db');
const routes = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// 2. Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// 3. Rotas
app.use(routes);

// 4. Iniciar Servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});