import Image from "next/image";
import styles from "./page.module.css";
import "./estilos/EstilosVentaGarage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import Header from "./componentes/Header";



<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"></link>


export default function Home() {
  return (
<main className="holder">

        <div className="columnas">
            <section className="bievenidos">
                <h2>Bienvenidos</h2>
                <p>Hola, soy Juan. Tengo 27 años, soy desarrollador web y estoy en pleno proceso de mudanza. Como parte de esta etapa, decidí crear este sitio para compartir —y poner a la venta— objetos y artículos que ya no uso y que no necesito más. Vas a encontrar desde tecnología hasta cosas del hogar, todas en buen estado y con historia. Esta página es mi forma de simplificar el cambio, liberar espacio y, por qué no, darle una segunda vida a cosas que pueden servirle a alguien más. Gracias por pasar, explorar y, si algo te interesa, ¡no dudes en contactarme!</p>
            </section>
            <section className="testimonios">
                <h2>Novedades</h2>
                <div className="testimonio">
                    <span className="cita">10 publicaciones nuevas!!</span>
                    <span className="autor">Fecha de publicación: 10/8</span>
                </div>


            </section>

        </div>
        <br/>
        <br/>

        <div className="carouselcustom">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <img src="img/carroselHome1.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="img/carroselHome2.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p></p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/carroselHome3.png" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5></h5>
                            <p></p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        

    </main>



  );
}
