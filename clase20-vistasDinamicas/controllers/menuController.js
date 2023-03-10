const itemsData = require('../data/items');

const items = {
   listar: (req,res) => {
      res.status(200).send(itemsData);
   },
   obtenerPorId: (req,res) => {
      const itemId = parseInt(req.params.id, 10);
      let itemEncontrado; 
      
      for (let i=0; i<itemsData.length; i++) {
         if (itemsData[i].id === itemId) {
            itemEncontrado = itemsData[i];
         }
      }

      // si no se encuentra ningun producto
      if (!itemEncontrado) {
         res.status(404).send("No se encuentra el item");
      } 
      else {
         res.render("items.ejs", {item: itemEncontrado});
      }
      
   }
}

module.exports = items;