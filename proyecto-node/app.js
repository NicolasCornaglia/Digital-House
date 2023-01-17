const victoria = require('./victoria_navarro_ocampo');
const nicolas = require('./nicolas_cornaglia');
const melissa = require('./melissa_sanchez');
const francisco = require('./francisco_vaquero');
const lorenzo = require('./lorenzo_battezzati');
const jeronimo = require('./jeronimo_aldalur');
const nicodf = require('./nicolas_del_fiol'); 

let arr = [victoria,nicolas,melissa,francisco,lorenzo,jeronimo,nicodf];

// este for imprime por pantalla la oracion solicitada en el ejercicio

for (let i=0; i<arr.length; i++) {
      console.log('Hola, soy',arr[i][0] ,'disfruto al',arr[i][1] ,'y soy de',arr[i][2]); 
}


