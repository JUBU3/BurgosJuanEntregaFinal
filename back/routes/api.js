var express = require('express');
var router = express.Router();
var abmProductosModel = require('./../models/abmProductosModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

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

router.post('/contacto', async (req, res) =>{
    const mail = {
        to: 'juaniburgos10@gmail.com',
        subject: 'nueva solicitud de contacto',
        html: `${req.body.nombre} se contacto a traves de la web y quiere mas informacion a este correo: ${req.body.email} <br> Ademas, hizo el siguiente comentario ${req.body.mensaje} <br> tel de contacto: ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje Enviado'
    });



})

module.exports = router;