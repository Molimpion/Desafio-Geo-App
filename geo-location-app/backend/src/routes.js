const express = require('express');
const PlaceController = require('./controllers/PlaceController');

const routes = express.Router();

routes.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Geo Backend API' });
});

routes.get('/api/places', PlaceController.index);
routes.post('/api/places', PlaceController.store);

module.exports = routes;