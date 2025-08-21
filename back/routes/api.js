var express = require('express');
var router = express.Router();
var abmProductosModel = require('./../models/abmProductosModel');
var cloudinary = require('cloudinary').v2;

router.get('/productos', async function (req, res, next) {

    let productos = await abmProductosModel.getProductos();

    productos = productos.map(producto => {
        if(producto.img_id){
            const imagen = cloudinary.url(producto.img_id,{
                width: 960,
                height: 960,
                crop: 'fill'
            });
            return {
                ...producto,
                imagen
            }
        } else {
            return{
                ...producto,
                imagen: ''
            }
        }
    })
    
    res.json(productos);
});

module.exports = router;