const Place = require('../models/Place');

module.exports = {
  async index(req, res) {
    try {
      const places = await Place.find().sort({ createdAt: -1 });
      return res.json(places);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao listar registros' });
    }
  },

  async store(req, res) {
    try {
      const { title, description, laboratory, latitude, longitude, photo } = req.body;

      if (!title || !description || !laboratory || latitude == null || longitude == null) {
        return res.status(400).json({ 
          error: 'Campos obrigatórios: title, description, laboratory, latitude, longitude' 
        });
      }

      const place = await Place.create({
        title,
        description,
        laboratory,
        latitude,
        longitude,
        photo: photo || null,
      });

      return res.status(201).json(place);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao salvar registro' });
    }
  }
};