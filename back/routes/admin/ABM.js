var express = require('express');
var router = express.Router();

var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

var abmProductosModel = require('../../models/abmProductosModel');

router.get('/', async function (req, res, next) {



    var listadoProductos = await abmProductosModel.getProductos();

    listadoProductos = listadoProductos.map(producto => {
        if(producto.img_id){
            const imagen = cloudinary.image(producto.img_id,{
                width: 100,
                height: 100,
                crop: 'fill'
            });
            return{
                ...producto,
                imagen
            }
        }else{
            return{
                ...producto,
                imagen: ''
            }
        }
    });




    res.render('admin/ABM', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        listadoProductos
    })

});

router.get('/agregarproducto', (req, res, next) => {
    res.render('admin/agregarproducto', {
        layout: 'admin/layout'
    })
});

router.post('/agregarproducto', async (req, res, next) => {
    try {

        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }




        if (req.body.titulo != "" && req.body.precio != "" && req.body.descripcion != "") {
            await abmProductosModel.insertProducto({
                ...req.body,
                img_id
            });
            res.redirect("/admin/ABM")
        } else {
            res.render('admin/agregarproducto', {
                layout: 'admin/layout',
                error: true,
                message: 'Todos los campos son requieridos'
            })
        }
    } catch (error) {
        console.log(error);
        res.render('admin/agregarproducto', {
            layout: 'admin/layout',
            error: true,
            message: 'No se cargo la novedad'
        })
    }
})

router.get('/eliminar/:Id', async (req, res, next) => {
    var Id = req.params.Id;

    let producto = await abmProductosModel.getProductosById(Id);
    if(producto.img_id){
        await (destroy(producto.img_id))
    }



    await abmProductosModel.deleteProductById(Id);
    res.redirect('/admin/ABM');
});

router.get('/editarproducto/:Id', async (req, res, next) => {
    var Id = req.params.Id;

    var producto = await abmProductosModel.getProductosById(Id);

    res.render('admin/editarproducto', {
        layout: 'admin/layout',
        producto
    })
});


router.post('/editarproducto', async (req, res, next) => {
    try {

        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if(req.body.img_delete === "1"){
            img_id = null;
            borrar_img_vieja = true;
        } else{
            if(req.files && Object.keys(req.files).length > 0){
                imagen = req.files.imagen;
                img_id = (await uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if(borrar_img_vieja && req.body.img_original){
            await (destroy(req.body.img_original));
        }



        var obj = {
            nombre_producto: req.body.nombre_producto,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            img_id
        }
        await abmProductosModel.editarProductoById(obj, req.body.Id);
        res.redirect('/admin/ABM');
    } catch (error) {
        console.log(error);
        res.render('admin/editarproducto', {
            layout: 'admin/layout',
            error: true,
            message: 'No se modifico el producto'
        })
    }
})



module.exports = router;