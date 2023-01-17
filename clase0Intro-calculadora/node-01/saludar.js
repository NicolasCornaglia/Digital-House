
function recibir(nombre) {
   console.log("Hola!, como estas", nombre,'?');
}


function despedir(nombre) {
   console.log("Chau, nos vemos", nombre);
}


module.exports = {recibir,despedir}; // no puedo copiar y pegar esto en varios renglones
                                    //, no funciona. Entonces lo exportamos como objeto

