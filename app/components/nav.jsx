import Image from "next/image";

export default function Nav() {
    return(
        <>
        <nav className="sticky top-0 py-3 flex justify-around items-center w-full bg-black-elote z-10 md:hidden">
            <div className="flex items-center">
            <Image src="/img-mobile/logo.png" width={50} height={50} className="mr-3" alt="logo The Elote Co" />
            <p className="text-white font-bold text-2xl">The Elote Co.</p>
            </div>

            <input id="burger" type="checkbox" className="opacity-0"/>
            <label htmlFor="burger">
            <span></span>
            <span></span>
            <span></span>
            </label>

            <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Top The Elote Co</a></li>
            <li><a href="#">Sucursales</a></li>
            <li><a href="#">Menú</a></li>
            </ul>
        </nav>

        <nav className="max-sm:hidden flex justify-center sticky items-center">
            <ul className="flex">
                <li className="mx-1 font-bold"><a>Inicio</a></li>
                <li className="mx-1 font-bold"><a>Sobre nosotros</a></li>
                <li className="mx-1 font-bold"><a>Servicios</a></li>
            </ul>
            <Image src="/img-mobile/logo.png" width={50} height={50} className="mx-3" alt="logo The Elote Co" />
            <ul className="flex">
                <li className="mx-1 font-bold"><a>Top TehEloteCo</a></li>
                <li className="mx-1 font-bold"><a>Sucursales</a></li>
                <li className="mx-1 font-bold"><a>Menú</a></li>
                <li className="mx-1 font-bold bg-red-elote p-1 rounded-2xl px-4 text-white"><a>Cotizar</a></li>
            </ul>
        </nav>
        </>
    )
}
