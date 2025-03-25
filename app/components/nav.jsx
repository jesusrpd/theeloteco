"use client"

import Image from "next/image";
import { useEffect } from "react";

export default function Nav() {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar')
            if(window.scrollY > 0){
                nav.classList.add('sticky-class')
            }else{
                nav.classList.remove('sticky-class')
            }
        })
    },[])

    return(
        <>
        <nav className="sticky top-0 py-3 flex justify-around items-center w-full bg-black-elote z-10 md:hidden">
            <div className="flex items-center">
            <Image src="/img-mobile/logo.png" width={50} height={50} className="mr-3" alt="logo The Elote Co" />
            <p className="text-white font-bold text-2xl">The Elote Co.</p>
            </div>

            <input id="burger" type="checkbox" className="opacity-0"/>
            <label htmlFor="burger">
            <span className="hamburguer-line"></span>
            <span className="hamburguer-line"></span>
            <span className="hamburguer-line"></span>
            </label>

            <ul className="nav-ul">
                <li><a href="#main">Inicio</a></li>
                <li><a href="#aboutus">Sobre Nosotros</a></li>
                <li><a href="#topproducts">Top The Elote Co</a></li>
                <li><a href="#sucursales">Sucursales</a></li>
                <li><a href="#menu">Menú</a></li>
            </ul>
        </nav>

        <nav id="navbar" className="max-sm:hidden flex justify-center sticky top-0 items-center z-100">
            <ul className="flex">
                <li className="mx-1 lg:mx-5 font-bold"><a href="#main">Inicio</a></li>
                <li className="mx-1 lg:mx-5 font-bold"><a href="#aboutus">Sobre nosotros</a></li>
                <li className="mx-1 lg:mx-5 font-bold"><a href="#servicios">Servicios</a></li>
            </ul>
            <Image src="/img-mobile/logo.png" width={70} height={70} className="mx-3 md:mx-2 lg:mx-3 md:relative top-4" alt="logo The Elote Co"/>
            <ul className="flex">
                <li className="mx-1 lg:mx-5 font-bold"><a href="#topproducts">Top TehEloteCo</a></li>
                <li className="mx-1 lg:mx-5 font-bold"><a href="#sucursales">Sucursales</a></li>
                <li className="mx-1 lg:mx-5 font-bold"><a href="#menu">Menú</a></li>
                <li className="mx-1 lg:mx-5 font-bold bg-red-elote p-1 rounded-2xl px-4 text-white"><a>Cotizar</a></li>
            </ul>
        </nav>
        </>
    )
}
