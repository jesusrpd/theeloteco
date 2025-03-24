import Image from "next/image";

export default function Footer() {
    return(
        <footer className="w-full bg-red-elote flex flex-col items-center justify-center mt-10 lg:flex-row">
            <div className="my-5 lg:order-3 lg:mx-5">
                <h3 className="text-white font-bold text-2xl mb-4 lg:">Redes sociales:</h3>
                    <div className="flex justify-around items-center">
                        <Image src="/icons/facebook.svg" width={50} height={50} alt="icon facebook" />
                        <Image src="/icons/instagram.svg" width={50} height={50} alt="icon instagram" />
                    </div>
            </div>
            <div className="my-5 lg:order-2 lg:mx-5">
                <h3 className="text-white font-bold text-2xl text-center mb-4">Sucursales:</h3>
                <div className="flex mb-5">
                    <Image src="/icons/maps.svg" className="mr-2" width={20} height={20} alt="icon maps" />
                    <p className="text-white">Sucursal San Jerónimo</p>
                </div>
                <div className="flex">
                    <Image src="/icons/maps.svg" className="mr-2" width={20} height={20} alt="icon maps" />
                    <p className="text-white">Sucursal San Pedro</p>
                </div>
            </div>
            <div className="text-center lg:order-1 lg:mx-5">
                <p className="text-white mb-2">Terminos y condiciones.</p>
                <p className="text-white mb-2">Teléfono: +52 18128879985</p>
                <p className="text-white mb-2">theeloteco23@gmail.com</p>
                <p className="text-white mb-10">Todos los derechos<br/> reservados por el autor.</p>
            </div>
            <div className="w-full bg-[url(/img-mobile/bg-footer.png)] lg:bg-[url(/img-desktop/bg-footer.png)] py-20 footer bg-no-repeat bg-cover flex flex-col items-center justify-center lg:order-4">
            <Image src="/img-mobile/logo-white.png" width={200} height={200} alt="logo The Elote Co" className=""/>
            <p className="mt-2 text-white text-4xl font-bold">The Elote Co.</p>
            </div>
        </footer>
    )
}

