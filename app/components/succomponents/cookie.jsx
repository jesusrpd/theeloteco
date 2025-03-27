"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";


export default function Cookie(){

    const [view, setView] = useState(true);

    const handleView = () => {
        Cookies.set("userAcceptedCookies", "true", { expires: 365 });
        setView(false);
    }

    useEffect(() => {
        const cookies = document.cookie.split("; ");
        const hasCookie = cookies.some((cookie) => cookie.startsWith("userAcceptedCookies="));
        
        setView(!hasCookie ? true : false);
    },[])

    return(<>{view?<div className="bg-red-elote p-2 text-white fixed bottom-0 w-full z-50">
        <h3 className="font-bold md:text-3xl">Utilizamos cookies</h3>
        <p className="md:text-2xl">Al navegar en este sitio web aceptas la <a className="text-yellow-elote font-bold underline" href="/cookies">política de cookies</a> para mejorr su experiencia de navegación en nuestra web.  </p>
        <button className="p-2 bg-yellow-elote md:text-2xl cursor-pointer" onClick={handleView}>Entendido.</button>
      </div>:null}</>)
}