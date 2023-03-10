const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname,'./public');

app.use(express.static(publicPath));

app.get('/', (req,res) => {
   res.sendFile(path.resolve(__dirname,'./views/home.html'));
})

app.get('/contactos', (req,res) => {
   res.sendFile(path.resolve(__dirname,'./views/contactos.html'));
})

app.get('/servicios', (req,res) => {
   res.sendFile(path.resolve(__dirname,'./views/servicios.html'));
})

app.get('/ayuda', (req,res) => {
   res.sendFile(path.resolve(__dirname,'./views/ayuda.html'));
})

app.listen(3000, () => {console.log('Servidor corriendo en el puerto 3000')});

