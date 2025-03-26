"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Nav() {
    const [isActive, setIsActive] = useState(false);

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
    useEffect(() => {
        const menuButton = document.querySelector('.hamburger');
        const menu = document.querySelector('.menuppal');
    
        const toggleMenu = (event) => {
          event.preventDefault();
          menuButton.classList.toggle('is-active');
          menu.classList.toggle('is_active');
        };
    
        menuButton.addEventListener('click', toggleMenu, false);
    
        return () => menuButton.removeEventListener('click', toggleMenu);
      }, []);
    
    return(
        <>
        <nav className="sticky top-0 py-3 flex justify-around items-center w-full bg-black-elote z-10 md:hidden">

            <div className="flex items-center logo-mobile">
                <Image src="/img-mobile/logo.png" width={50} height={50} className="mr-3" alt="logo The Elote Co" /><p className="text-white font-bold text-2xl">The Elote Co.</p>
            </div>

            <div className="hamburger" >
                <div className="_layer -top"></div>
                <div className="_layer -mid"></div>
                <div className="_layer -bottom"></div>
            </div>

            <ul className="menuppal pt-40">
                <li className="mb-10 w-fit m-auto"><a href="#main" className="text-white text-center font-bold text-2xl">Inicio</a></li>
                <li className="mb-10 w-fit m-auto"><a href="#aboutus" className="text-white text-center font-bold text-2xl">Sobre Nosotros</a></li>
                <li className="mb-10 w-fit m-auto"><a href="#topproducts" className="text-white text-center font-bold text-2xl">Top The Elote Co</a></li>
                <li className="mb-10 w-fit m-auto"><a href="#sucursales" className="text-white text-center font-bold text-2xl">Sucursales</a></li>
                <li className="mb-10 w-fit m-auto"><a href="#menu" className="text-white text-center font-bold text-2xl">Menú</a></li>
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
