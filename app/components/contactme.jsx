import Image from "next/image";

export default function ContactMe() {
    return(
      <section className="mt-10 px-4 lg:px-10">
        <div className="bg-red-elote rounded-3xl pt-5 lg:flex lg:items-center">
          <div className="order-2">
            <h2 className="text-white text-center text-4xl mb-5 lg:text-left">Vamos Por un Elote a tu Evento, contáctanos</h2>
            <p className="text-white font-medium text-justify leading-9 px-6 lg:pl-0">Lorem ipsum dolor sit amet consectetur. Ornare porgitttitor dolor eu mollis sed. Commodo feugiat amet in quis volutpat. Eros pellentesque nibh risus sit nam. </p>
            <br/>
            <p className="text-white font-medium text-justify leading-9 px-6 lg:pl-0">Lorem ipsum dolor sit amet consectetur. Ornare porttitor dolor eu mollis sed. Commodo feugiat amet in quis volutpat. Eros pellentesque nibh risus sit nam. </p>
          </div>

          <div className="w-full mt-5 lg:order-1">
            <form className="flex flex-col items-center">
              <input type="text" placeholder="Nombre" className="bg-red-300 rounded-2xl p-2 w-3/4 my-2 placeholder:font-bold placeholder:text-red-950 text-red-950"/>
              <input type="email" placeholder="Correo" className="bg-red-300 rounded-2xl p-2 w-3/4 my-2 placeholder:font-bold placeholder:text-red-950 text-red-950"/>
              <input type="tel" placeholder="Teléfono" className="bg-red-300 rounded-2xl p-2 w-3/4 my-2 placeholder:font-bold placeholder:text-red-950 text-red-950"/>
              <textarea placeholder="Mensaje" className="bg-red-300 rounded-2xl p-2 my-2 w-3/4 placeholder:font-bold placeholder:text-red-950 text-red-950"></textarea>
              <button className="p-2 bg-white rounded-2xl w-3/4 font-bold mt-1 mb-5 text-red-950">Enviar</button>
            </form>
            <div className="p-2 max-lg:hidden lg:w-11/12 m-auto">
              <Image src="/img-mobile/banner-evento.png" alt="banner tecate" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="rounded-2xl"/>
            </div>
          </div>
          <video className="w-11/12 m-auto rounded-2xl border-2 lg:order-3 border-white lg:mr-5" width="320" height="240" controls preload="none">
          <source src="../../public/videos/eventos.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="p-2 lg:hidden">
          <Image src="/img-mobile/banner-evento.png" alt="banner tecate" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="rounded-2xl"/>
        </div>
        </div>
      </section>
    )
}