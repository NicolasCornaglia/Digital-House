let express = require('express');
let app = express();

app.set('view engine', 'ejs');
app.use(express.static('public')); // para poder visualizar imagenes

app.get('/', (req,res) => {
   res.render('index')
});
