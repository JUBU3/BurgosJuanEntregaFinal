import ProductoItem from "@/app/componentes/ProductoItem";

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>


export default async function Productos() {
  
  
  const data = await fetch(`${process.env.NEXT_APP_API_URL}/api/productos`);
  const productos = await data.json();
  
  return (
<main className="holder">
       


        <section className="holder">
            <h2>Productos a la venta</h2>
            {
                productos.map(item => <ProductoItem key={item.Id}
                    productName = {item.nombre_producto} price={item.precio}
                    description={item.descripcion} imagen={item.imagen}  />
                )
            }
            {/*<ProductoItem />*/}
        </section>


    </main>



  );
}
