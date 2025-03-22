import Image from "next/image";

export default function ContactMe() {
    return(
      <section className="mt-10 px-4">
        <div className="bg-red-elote rounded-3xl pt-5">
          <h2 className="text-white text-center text-4xl mb-5">Contactanos</h2>
          <p className="text-white font-medium text-justify leading-9 px-6">Lorem ipsum dolor sit amet consectetur. Ornare porttitor dolor eu mollis sed. Commodo feugiat amet in quis volutpat. Eros pellentesque nibh risus sit nam. </p>
          <br/>
          <p className="text-white font-medium text-justify leading-9 px-6">Lorem ipsum dolor sit amet consectetur. Ornare porttitor dolor eu mollis sed. Commodo feugiat amet in quis volutpat. Eros pellentesque nibh risus sit nam. </p>

          <div className="w-full mt-5">
            <form className="flex flex-col items-center">
              <input type="text" placeholder="Nombre" className="bg-red-300 rounded-2xl p-2 w-3/4 my-2 placeholder:font-bold placeholder:text-red-950 text-red-950"/>
              <input type="email" placeholder="Correo" className="bg-red-300 rounded-2xl p-2 w-3/4 my-2 placeholder:font-bold placeholder:text-red-950 text-red-950"/>
              <input type="tel" placeholder="Teléfono" className="bg-red-300 rounded-2xl p-2 w-3/4 my-2 placeholder:font-bold placeholder:text-red-950 text-red-950"/>
              <textarea placeholder="Mensaje" className="bg-red-300 rounded-2xl p-2 my-2 w-3/4 placeholder:font-bold placeholder:text-red-950 text-red-950"></textarea>
              <button className="p-2 bg-white rounded-2xl w-3/4 font-bold mt-1 mb-5">Enviar</button>
            </form>
          </div>
          <Image src="/img-mobile/img-form.png" width={300} height={300} className="w-full" alt="contacto" />
        </div>
      </section>
    )
}