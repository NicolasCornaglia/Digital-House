// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../../public/images/uploads'))
   },
   filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
   }
});

let upload = multer({ storage: storage });

router.get('/create/', productsController.create); 
router.post('/', upload.any(), productsController.store);


/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/:id/edit', productsController.edit); 
router.put('/:id', productsController.update); 


/*** DELETE ONE PRODUCT ***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;
