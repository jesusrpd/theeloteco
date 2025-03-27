import Image from "next/image";

export default function Footer() {
    return(
        <footer className="w-full bg-red-elote flex flex-col items-center justify-center mt-10 lg:flex-row">
            <div className="my-5 lg:order-3 lg:mx-5">
                <h3 className="text-white font-bold text-2xl mb-4 lg:">Redes sociales:</h3>
                    <div className="flex justify-around items-center">
                        <a href="https://www.facebook.com/share/1BqsJb5GGV/" target="_blank">
                        <Image src="/icons/facebook.svg" width={50} height={50} alt="icon facebook" />
                        </a>
                        <a href="https://www.instagram.com/theelote.co?igsh=MXAydzBlOHo2aWtnNQ==" target="_blank">
                        <Image src="/icons/instagram.svg" width={50} height={50} alt="icon instagram" />
                        </a>
                    </div>
            </div>
            <div className="my-5 lg:order-2 lg:mx-5">
                <h3 className="text-white font-bold text-2xl text-center mb-4">Sucursales:</h3>
                <div className="flex">
                    
                    <a href="https://maps.app.goo.gl/JwxGRP9Qf8YDHxGX9" target="_blank" className="flex">
                        <Image src="/icons/maps.svg" className="mr-2" width={20} height={20} alt="icon maps" />
                        <p className="text-white">Sucursal San Pedro</p>
                    </a>
                </div>
                <div className="flex mb-5">
                    <a href="https://maps.app.goo.gl/SLgWVWkQqfrSdUny8" target="_blank" className="flex">
                    <Image src="/icons/maps.svg" className="mr-2" width={20} height={20} alt="icon maps" />
                    <p className="text-white">Sucursal San Jerónimo</p>
                    </a>
                </div>
            </div>
            <div className="text-center lg:order-1 lg:mx-5">
                <p className="text-white mb-2">Terminos y condiciones.</p>
                <span className="text-white mb-2" id="tel">Teléfono:<span>+ 52 8128879985</span></span>
                <span className="text-white block">+8128879985.</span>
                <p className="text-white mb-2"><span>theeloteco23@gmail.com</span></p>
                <p className="text-white mb-10">Todos los derechos<br/> reservados por el autor.</p>
            </div>
            <div className="w-full bg-[url(/img-mobile/bg-footer.png)] lg:bg-[url(/img-desktop/bg-footer.png)] py-20 footer bg-no-repeat bg-cover flex flex-col items-center justify-center lg:order-4">
            <Image src="/img-mobile/vamos-elote.png" width={300} height={300} alt="logo The Elote Co" className="m-auto"/>
            </div>
        </footer>
    )
}

