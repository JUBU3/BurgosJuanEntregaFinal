var pool = require('./bd');

async function getProductos() {
    var query = 'select * from productos';
    var rows = await pool.query(query);
    return rows;
    
}

async function getProductosById(Id) {
    var query = 'select * from productos where Id = ?';
    var rows = await pool.query(query,[Id]);
    return rows[0];
    
}

async function insertProducto(obj) {
    try{
        var query = "insert into productos set ?";
        var rows = await pool.query(query,[obj])
        return rows;
    } catch (error){
        console.log(error);
        throw error;
    }
    
}

async function deleteProductById(Id) {
    var query = 'delete from productos where Id = ?';
    var rows = await pool.query(query,[Id]);
    return rows;
    
}

async function editarProductoById(obj, Id) {

    try{
        var query = 'update productos set ? where Id= ?';
        var rows = await pool.query(query,[obj,Id]);
        return rows;
    }catch(error){
        throw error;
    }
    
}


module.exports = {getProductos, insertProducto, deleteProductById, getProductosById, editarProductoById}