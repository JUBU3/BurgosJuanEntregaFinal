<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>





export default function Novedades() {
    return (
        <main className="holder">
            <h2>Novedades</h2>

            <div className="novedades">

                <div className="card" style={{width: '18rem'}}> 
                    <img src="img/producto5.png" className="card-img-top" alt="reloj" style={{width: '18rem', height: '350px'}} />
                    <div className="card-body">
                        <h5 className="card-title">Reloj de Pared</h5>
                        <p className="card-text">Reloj de pared con péndulo, de diseño clásico y elegante. Tiene una esfera redonda con números romanos, agujas negras estilizadas y un marco de madera oscura. Debajo, una caja rectangular aloja un péndulo dorado brillante, completando su estilo tradicional. Ideal para decoración retro o de época.</p>
                        <p>Precio: $50000</p>
                        <a href="https://web.whatsapp.com/" target="_blank"> <img src="img/WhatsApp.png" alt="logo wpp" style={{width: '30px', height: '30px'}} /> </a>
                    </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                    <img src="img/producto6.png" className="card-img-top" alt="espejo" style={{width: '18rem', height: '350px'}} />
                    <div className="card-body">
                        <h5 className="card-title">Espejo Marco Madera</h5>
                        <p className="card-text">Espejo antiguo de forma rectangular con un marco de madera finamente tallado. El diseño incluye ornamentos curvos y motivos vegetales, típicos del estilo barroco o rococó. La madera tiene un acabado cálido y envejecido que realza su carácter clásico y elegante. Ideal como pieza decorativa en ambientes vintage o tradicionales.</p>
                        <p>Precio: $30500</p>
                        <a href="https://web.whatsapp.com/" target="_blank"> <img src="img/WhatsApp.png" alt="logo wpp" style={{width: '30px', height: '30px'}}  /> </a>
                    </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                    <img src="img/producto7.png" className="card-img-top" alt="bicicleta" style={{width: '18rem', height: '350px'}} />
                    <div className="card-body">
                        <h5 className="card-title">Bicicleta</h5>
                        <p className="card-text">Bicicleta de estilo clásico con cuadro negro, asiento de cuero marrón y neumáticos de borde crema. Presenta un faro delantero metálico, guardabarros curvados y portaequipajes trasero. Su diseño evoca una estética retro, ideal para coleccionistas o decoración nostálgica.</p>
                        <p>Precio: $20000</p>
                        <a href="https://web.whatsapp.com/" target="_blank"> <img src="img/WhatsApp.png" alt="logo wpp" style={{width: '30px', height: '30px'}}  /> </a>
                    </div>
                </div>



            </div>
            <br /><br />

            <h2>Ofertas</h2>
            <div className="ofertas">


                <div className="card" style={{width: '18rem'}}>
                    <img src="img/producto8.png" className="card-img-top" alt="camara" style={{width: '18rem', height: '350px'}} />
                    <div className="card-body">
                        <h5 className="card-title">Camara</h5>
                        <p className="card-text">Cámara fotográfica vintage de estilo rangefinder, con cuerpo metálico plateado y recubrimiento de cuero negro. Cuenta con un objetivo de 50mm, controles mecánicos en la parte superior y visor óptico. Su diseño robusto y elegante refleja la estética clásica de las cámaras analógicas del siglo XX.</p>
                        <div className="precios">

                            <p className="precioAnterior">Precio: $<s>15000</s> </p>
                            <p className="precioOFerta">Precio: $13400</p>
                        </div>

                        <a href="https://web.whatsapp.com/" target="_blank"> <img src="img/WhatsApp.png" alt="logo wpp" style={{width: '30px', height: '30px'}} /> </a>
                    </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                    <img src="img/producto9.png" className="card-img-top" alt="lampara" style={{width: '18rem', height: '350px'}} />
                    <div className="card-body">
                        <h5 className="card-title">Lampara</h5>
                        <p className="card-text">Lámpara de escritorio estilo banquero, con pantalla de vidrio verde curvado y base de metal en acabado latón, encendido por cadena lateral.</p>
                        <div className="precios">

                            <p className="precioAnterior">Precio: $<s>25000</s> </p>
                            <p className="precioOFerta">Precio: $19800</p>
                        </div>
                        <a href="https://web.whatsapp.com/" target="_blank"> <img src="img/WhatsApp.png" alt="logo wpp" style={{width: '30px', height: '30px'}} /> </a>
                    </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                    <img src="img/producto10.png" className="card-img-top" alt="peluche" style={{width: '18rem', height: '350px'}} />
                    <div className="card-body">
                        <h5 className="card-title">Oso de Peluche</h5>
                        <p className="card-text">Muñeco oso de peluche, de felpa marrón claro, con ojos de botón oscuros y un lazo de tela al cuello; presenta un diseño clásico y aspecto envejecido.</p>
                        <div className="precios">

                            <p className="precioAnterior">Precio: $<s>10800</s> </p>
                            <p className="precioOFerta">Precio: $7500</p>
                        </div>
                        <a href="https://web.whatsapp.com/" target="_blank"> <img src="img/WhatsApp.png" alt="logo wpp" style={{width: '30px', height: '30px'}} /> </a>
                    </div>
                </div>

            </div>



        </main>



    );
}
