'use client'
import { useState } from 'react';






var postUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/contacto`;

console.log(postUrl);

export default function Contacto(postUrl) {

    const initialForm = {
        nombre: '',
        email:'',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSumbit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);

        const rawResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contacto`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        const response = await rawResponse.json();
        console.log(response)
        setSending(false);
        setMsg(response.message);
        if (response.error === false){
            setFormData(initialForm)
        }
    }





  return (

    <main className="holder contacto">

        <div>
            <h2>Contacto Rápido</h2>
            <form action="/contacto" method="post" className="formulario" onSubmit={handleSumbit}>
                <p>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                </p>
                <p>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                </p>
                <p>
                    <label htmlFor="telefono">Telefono</label>
                    <input type="number" name="telefono" value={formData.telefono} onChange={handleChange}/>
                </p>
                <p>
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar" id="enviar"/>
                </p>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}
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
