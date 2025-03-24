import Image from "next/image";
import Slider from "./succomponents/slider";

export default function Sucursales() {
    return(
        <section className="px-3 lg:px-10">
            <h2 className="text-4xl text-red-elote mt-10 mb-5 font-bold text-center">Sucursales</h2>
            <div className="lg:flex lg:w-full lg:justify-center">
                <div className="m-auto md:flex">
                    <Image src="/img-mobile/sucursal1.png" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14383.969015263167!2d-100.3740966!3d25.6715515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629729449f4be5%3A0x20bd287a74bf5208!2sThe%20Elote%20Co.%20San%20Jer%C3%B3nimo!5e0!3m2!1ses-419!2smx!4v1742690667176!5m2!1ses-419!2smx" allowFullScreen="" loading="lazy" className="w-full h-80" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-2xl mb-2 mt-5">Sucursal San Jerónimo</h3>
                    <p className="font-medium mb-2">Río Tamazunchale 401, Del Valle, 66220 Monterrey, N.L.</p>
                    <Image src="/img-mobile/elote.png" alt="background header" width={100} height={100} className="m-auto"/>
                </div>
            </div>
            <div className="flex items-center my-10 mb-20 md:my-5 lg:my-10"><span className="block bg-yellow-600 w-36 h-1"></span><p className="text-center font-bold">¡¡Visitanos, Regalanos un review, y en tu cup<br/> va un topping adicional por nuestra cuenta!!</p><span className="block bg-yellow-600 w-36 h-1"></span></div> 
            <div className="lg:flex lg:w-full lg:justify-center">
                <div className="md:flex m-auto">
                    <Image src="/img-mobile/sucursal2.png" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14383.969015263167!2d-100.3740966!3d25.6715515!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662bd00779972c9%3A0x58c5178efa1586b3!2sThe%20Elote%20Co%20San%20Pedro!5e0!3m2!1ses-419!2smx!4v1742691658789!5m2!1ses-419!2smx" allowFullScreen="" loading="lazy"  className="w-full h-80" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="text-center">
                    <h3 className="font-bold text-2xl mb-2 mt-5">Sucursal Pedro</h3>
                    <p className="font-medium mb-2">Río Tamazunchale 401, Del Valle, 66220 Monterrey, N.L.</p>
                    <Image src="/img-mobile/elote.png" alt="background header" width={100} height={100} className="m-auto"/>
                </div>
            </div>

            <Slider/>
        </section>
    )
}