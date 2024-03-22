const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;


mongoose.connect('mongodb://localhost/bd_car', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Creacion de modelo de esquema.
const Schema = mongoose.Schema;
const miSchema = new Schema({

});
const MiModelo = mongoose.model('Modelo', miSchema);


app.get('/datos', async (req, res) => {
  try {
    const datos = await MiModelo.find();
    res.json(datos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});