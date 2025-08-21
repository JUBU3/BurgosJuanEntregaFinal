export default async function ProductoItem(props) {

    const { productName, price, description, imagen } = props;

    return (


        <div className="servicio">
            <img src={imagen} alt={productName} />

            <div className="info">
                <h4>{productName}</h4>
                <p>{description}</p>
                <p>Precio: ${price}</p>
                <a href="https://web.whatsapp.com/" target="_blank"> <img src="img/WhatsApp.png" alt="logo wpp" style={{ width: '30px', height: '30px' }} /> </a>
                            </div>
        </div>



    );

}

