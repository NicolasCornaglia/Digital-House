let autos = require('./autos');
let concesionaria = {
   autos: autos,
 
   buscarAuto: function(patente1) {
      let list = autos.filter(function(auto) {
         return auto.patente == patente1;
      })
      if (list.length == 0) {
         return null;
      } else {
         return list[0];
      }
   }, 
      
   venderAuto: function(patente1) {
      let autoVendido = this.buscarAuto(patente1);
      if (autoVendido == null) {
         return "";
      } else { 
         this.autos[autos.indexOf(autoVendido)].vendido = true;
         return autos
      }
   },

   autosParaLaVenta: function(){ 
      let autosALaVenta = autos.filter(function(auto){
         return auto.vendido == false;
      })
      return autosALaVenta 
   },
  
   autosNuevos: function() {
      let autos0km = this.autosParaLaVenta().filter(function(auto){
         return auto.km < 100;
      })
      
      return autos0km
   },

   listaDeVentas: function(){
      autosVendidosList = []
      let autosVendidos = autos.filter(function(auto){
         return auto.vendido == true;
      })
      autosVendidos.forEach(function(auto){
         autosVendidosList.push(auto.precio); 
      })
      return autosVendidosList
      },

   totalDeVentas: function(){
      let suma1 = this.listaDeVentas();
      if (suma1.length == 0) {
         return 0;
      } else {
         let sumaValores = suma1.reduce(function(acumulador,valor){
         return acumulador + valor;
         }) 
      return sumaValores;
      }},
   
   puedeComprar: function(auto,persona) {
      if ((auto.precio <= persona.capacidadDePagoTotal) && ((auto.precio/auto.cuotas) < persona.capacidadDePagoEnCuotas)) {
         return true;
      } else {
         return false;
      }
   },

   autosQuePuedeComprar: function(persona) {

      return this.autosParaLaVenta().filter(auto => this.puedeComprar(auto,persona))  
   } 
}
   

console.log(concesionaria.autosQuePuedeComprar(
   {
   nombre: 'Juan',
   capacidadDePagoEnCuotas: 20000,
   capacidadDePagoTotal: 100000
   }));


