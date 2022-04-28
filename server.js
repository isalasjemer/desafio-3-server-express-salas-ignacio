
const express = require('express');
const app = express();
const Container = require('./container');

// Prueba para llamar los metodos
const arrProducts = new Container('./products.txt');
const randomProducts = new Container('./products.txt');

app.get('/', (req, res) => {
    res.send(`
         <h1>Desafio 3 - Servidor con express</h1>
         <h3>Salas Ignacio</h3>
         `)
})

//  Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
app.get('/productos', async (req, res) => {
    const data = await arrProducts.getAll();
    res.send(data);
});

// Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
app.get('/productoRandom', async (req, res) => {
    const data = await randomProducts.getRandom()
    res.send(data);
});

// Endpoint localhost:8080
app.listen(8080, () => {
    console.log(`Server running on port 8080`);
});