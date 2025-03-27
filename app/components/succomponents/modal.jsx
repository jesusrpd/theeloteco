"use client"
import Image from "next/image";
import { useState } from "react"

export default function Modal (){

    const [modal, setModal] = useState(true)

    return(
        <>{modal?        <div className="fixed top-0 left-0 w-full h-screen z-2000 flex items-center" id="modal">
            <div className="w-3/4 h-fit m-auto bg-[url(/img-mobile/bg.menu.png)] p-4 bg-cover text-white relative rounded-2xl flex flex-col items-center">
                <div className="absolute top-0 right-0 bg-white px-2 text-2xl w-fit h-fit cursor-pointer font-bold rounded-full text-black-elote" onClick={() => setModal(false)}>X</div>
                <h2 className="text-2xl text-center">¡Visitanos en tecate Palnorte!</h2>
                <p className="text-justify my-5 lg:text-2xl">The Elote Co se encontrará en el evento TECATE Pal Norte, así que ven y acompañanos por un elote.</p>
                <a href="https://www.tecatepalnorte.com/lineup" target="_blank">
                <Image src="/img-mobile/tecate.jpg" alt="banner tecate" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="rounded-2xl"/>
                </a>
                <a className="text-yellow-elote text-center lg:text-2xl" href="https://www.tecatepalnorte.com/lineup" target="_blank">Visita la página del evento donde estaremos...</a>
            </div>
        </div>:null}</>
    )
}