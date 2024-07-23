const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let contacts = [];

// Ruta para obtener todos los contactos
app.get('/contacts', (req, res) => {
  res.json(contacts);
});

// Ruta para agregar un nuevo contacto
app.post('/contacts', (req, res) => {
    const { Nombre, Telefono } = req.body;
  if (Nombre && Telefono) {
    contacts.push({ Nombre, Telefono });
    res.status(201).json({ message: 'Contact added successfully' });
  } else {
    res.status(400).json({ message: 'Nombre and Telefono are required' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



