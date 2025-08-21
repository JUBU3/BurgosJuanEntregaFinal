<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>


export default function Contacto() {
  return (

    <main className="holder contacto">

        <div>
            <h2>Contacto Rápido</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="" id="nombre"/>
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="" id="email"/>
                </p>
                <p>
                    <label htmlFor="telefono">Telefono</label>
                    <input type="number" name="" id="telefono"/>
                </p>
                <p>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="" id="mensaje"></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar" id="enviar"/>
                </p>
            </form>

        </div>
        <div className="datos">
            <h2>Otras vias de comunicación</h2>
            <p>También puede contactarse con nosotros usando los siguientes medios</p>
            <ul>
                <li>Telefono: 11223344</li>
                <li>Email: contactanos@gmail.com</li>
                <li>Dirección: Juramento 600</li>
            </ul>
        </div>
         


    </main>




  );
}
