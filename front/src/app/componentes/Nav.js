'use client'


import Link from "next/link";
import { usePathname } from "next/navigation";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.0/css/all.min.css" integrity="sha512-DxV+EoADOkOygM4IR9yXP8Sb2qwgidEmeqAEmDKIOfPRQZOWbXCzLC6vjbZyy0vPisbH2SyW27+ddLVCN+OMzQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />

export default function Nav() {

    const pathname = usePathname();
    const isActive = (path) => path === pathname;



    return (

        <nav>
            <div className="holder">
                <ul>
                    <li><Link className={isActive("/") ? 'activo' : ''}href="/">Home <i className="fa fa-home" aria-hidden="true"></i></Link></li>
                    <li><Link className={isActive("/productos") ? 'activo' : ''} href="/productos">Catalogo de Productos</Link></li>
                    <li><Link className={isActive("/novedades") ? 'activo' : ''} href="/novedades">Novedades y Ofertas</Link></li>
                    <li><Link className={isActive("/contacto") ? 'activo' : ''} href="/contacto">Contacto</Link></li>
                </ul>

            </div>

        </nav>

    )

}