//console.log("Entry point:");

// importo las funciones definidas en saludar.js como el objeto saludo.
let saludo = require('./saludar');
let diasDeLaSemana = require('./dias');

saludo.recibir("Juan");
saludo.despedir("Juan");
console.log('Hoy es',diasDeLaSemana[0]);

