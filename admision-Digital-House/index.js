// comentamos 

//let saludo = 'Hola mundo desde Digital house!';
//console.log(saludo); // para printear se usa console.log(lo q printeas)

// para definir variables:
// let me la define dentro de las llaves que este usando en el momento
// var me la define para todo lugar donde quiera usarla

/*
let numero = 15
numero += 10 // es lo mismo que numero = numero + 10
*/

// operador modulo %: 15%5=0, 15%2=1


//let edad = 25; // utilizar let, es una buena practica
//let peso = 80;
//console.log(edad,peso);

/*
function sumar(a,b,c){
    return a+b+c;
}
console.log(sumar(3,4,5));
*/

// condicionales
/*
let diaDeSemana = 'Domingo';

if (diaDeSemana == 'Domingo') {
    console.log("¡Hoy es día de descanso!")
}
*/
// funcion invocada

//let sumar = function (var1,var2) {
//    return var1 + var2;
//}

// JS lee una funcion invocada cuando llega a la linea de 
// codigo donde esta escrita, es decir que si la
// usamos antes de haberla invocado saldra un
// error

// funcion definida
/*
function restar(var1,var2) {
    return var1 - var2;
}
*/
// una vez declarada(definida) esta funcion JS la
// tiene lista para usarla en todo momento, antes 
// o despues de ser declarada(definida)

// && es el and

// || es el or

// precedencia es la negación ! , seguida de la conjunción && 
// y luego disyunción ||



/* //resolucion ejercicio Playground
function estaEnEdad(edad,genero) {
    if ((genero == "F") && (edad >= 60)) {
        return true
    } else if ((genero == "M") && (edad >= 65)) {
        return true
    } else {
        return false
    }
}

function tieneSufAportes(nAportes) {
    if (nAportes >= 30) {
        return true
    } else {
        return false
    }
}

function puedeJubilarse(edad,genero,nAportes) {
   return (estaEnEdad(edad,genero) && tieneSufAportes(nAportes))
} 
console.log(puedeJubilarse(60,"F",40))
*/

// Arrays

//let arreglo = [];
//arreglo.push("primerElementoString","segundoElemento","tercerElemento") // .push agrega elementos
//console.log(arreglo)

// arreglo.length da el largo del arreglo
// arreglo.pop() // elimina el ultimo elemento, pop() no recibe parametros
//let anteUltEl = arreglo.pop() // guarda el elemento "segundoElemento" en la variable indicada
//console.log(arreglo)

//console.log(arreglo.indexOf("segundoElemento")); // si el elemento esta devuelve la pos, sino devuelve -1


// ciclos, for

// ej:
//for (let i=0 ; i<4 ; i++) { 
//    console.log("¡Hola!");
//}


// clase en vivo 2 Metodos de arreglos y Ciclos

//let unArray = [1, 2, 7];
//console.log(unArray[unArray.length-1]);


// .push(elemento/s) agrega un elmento a un arreglo
//let array = ["Oro","Plata","Bronce","Seguí participando"]
//console.log(array.push("elementoFinal")) // me imprime la cantidad de elementos al haber agregado "elementoFinal"

// .pop() no recibe parametros y elimina y devuelve el ultimo elemento

// .indexOf(elemento) devuelve el indice del elemento de un arreglo

/*
function imprimir5veces5() {
    for (let i = 0; i < 5; i++) {
        console.log(5)
    };    
};

console.log(imprimir5veces5());
*/

// ejercicio Acumulador variable
/*
let valorMoneda = 0.25
let valor = 0;

function sumarMonedasDe25(cantidadDeMonedas) {
    for (let i = 0; i<cantidadDeMonedas; i++) {
        valor = valor + valorMoneda;
    }
    return valor;
}

console.log(sumarMonedasDe25(10));
*/


// ejercio Seguimos variando
/*
let suma = 0;
function sumaDeLosParesDel0Al(x) {
    for (let i = 0; i <= x ; i += 2) {
        suma = suma + i;
    } 
    return suma;
}
console.log(sumaDeLosParesDel0Al(10));
*/

// ejercicio Sumatoria
/*
let suma = 0;
function sumatoriaHasta(x) {
    for (let i = 0; i<x ; i++) {
        suma = suma + i;
    }
    return suma;
}

console.log(sumatoriaHasta(5));
*/

// ejercicio Usain Bolt te necesita
/*
let cantCalorias = 0;

function caloriasDeTrote(x) {
    for (let i = 1; i<=x ; i++) {
        cantCalorias = cantCalorias + 5*i;
    }
    return cantCalorias;
}

console.log(caloriasDeTrote(1));
*/

// Juego de naipes
/*
function naipes(palo) {
    let arreglo = []
    for (let i = 1; i < 13; i++) {
        if ((i>0)&&(i!=8)&&(i!=9)) {
            arreglo.push(i + " de " + palo)
        }
    } return arreglo
}

console.log(naipes('espadas'));
*/

// Arbol utopico
/*
function alturaArbolUtopico(ciclos) {
    let size = 1;
    for (let i=0; i<=ciclos; i++) {
        if (i == 0) {
            size = size
        } else if (i%2 != 0) {
            size = size * 2;
        } else if (i%2 == 0) {
            size = size + 1;
        }
    }return size
}

console.log(alturaArbolUtopico(1));
*/

// Mas | Menos
/*
function masMenos(arr) {
    let suma1 = 0
    let suma2 = 0
    let suma3 = 0
    let n = arr.length
    let res = []
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            suma1 = suma1 + 1
        } else if (arr[i] == 0) {
            suma2 = suma2 + 1
        } else {
            suma3 = suma3 + 1
        }
    }
    suma1 = suma1/n;
    suma2 = suma2/n;
    suma3 = suma3/n;
    res.push(suma1,suma2,suma3);
    return res
}
console.log(masMenos([0,0,0,0]));
*/

/*
varr = [1,2,3,4,6,5,7];
a = varr.reduce((x,y) => x*y , 1);
console.log(a);
*/
/*
let arr1 = [15, 28, 44, 45, 70]

function asientosDisponibles(arr,asiento) {
    if (arr.indexOf(asiento) >= 0) {
        return "Felicitaciones, el asiento número " + asiento + " está disponible"
    } else {
        return "Lo sentimos, el asiento número " + asiento + " está ocupado, pero aún quedan " + asiento.length + " asientos disponibles"
    }
}

console.log(asientosDisponibles(arr1,15));

console.log(arr1.indexOf(78));
*/

function reporteDePasajeros(numeroEstaciones) {
    let pasajeros = 200;
    let informe = [];
    for (let i=0 ; i<=numeroEstaciones ; i++) {
        if ( i==0 ) {
            informe.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
        } else if ( i==5 ) {
            pasajeros = pasajeros + 120 - 80;
            informe.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
        } else {
            pasajeros = pasajeros + 50 - 30;
            informe.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");
        }
    } return informe;
}

console.log(reporteDePasajeros(5));
