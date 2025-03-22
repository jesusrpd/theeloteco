import Image from "next/image";

export default function Home() {
  return (
    <div>

        <Image src="/icons/whatsapp.svg" alt="background header" width={70}
        height={70}
        className="fixed right-3 top-11/12 z-50"
        />

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
      
      {/* SECTION MAIN  */}
      <section className="bg-[url(/img-mobile/main-hero.png)] md:bg-[url(/img-desktop/main-hero.png)] w-100 md:w-full h-screen background-no-repeat bg-no-repeat bg-cover md:bg-contain flex flex-col justify-end items-center pb-16">
        <h1 className="text-red-700 font-bold text-5xl mb-5">The Elote Co</h1>
        <p className="text-center font-medium text-black-elote">The Elote Co, no te arrepentiras de habernos probado y vas a querer más.</p>
      </section>

      {/* SECTION ABOUT US */}

      {/* SECTION CONTACT ME */}
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

      {/* SECTION TOP PRODUCTS */}

      {/* SECTION MENÚ */}

      {/* SECTION SUSUCRSALES */}

      {/* SECTION FOOTER */}
      <footer className="w-full bg-red-elote flex flex-col items-center justify-center mt-10">
        <div className="my-5">
          <h3 className="text-white font-bold text-2xl mb-4">Redes sociales:</h3>
          <div className="flex justify-around items-center">
            <Image src="/icons/facebook.svg" width={50} height={50} alt="icon facebook" />
            <Image src="/icons/instagram.svg" width={50} height={50} alt="icon instagram" />
          </div>
        </div>
        <div className="my-5">
          <h3 className="text-white font-bold text-2xl text-center mb-4">Sucursales:</h3>
          <div className="flex">
            <Image src="/icons/maps.svg" className="mr-2" width={20} height={20} alt="icon maps" />
            <p className="text-white">Sucursal San Jerónimo</p>
          </div>
          <div className="flex">
            <Image src="/icons/maps.svg" className="mr-2" width={20} height={20} alt="icon maps" />
            <p className="text-white">Sucursal San Pedro</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-white mb-2">Terminos y condiciones.</p>
          <p className="text-white mb-2">Teléfono: +52 1 8128879985</p>
          <p className="text-white mb-2">theeloteco23@gmail.com</p>
          <p className="text-white mb-10">Todos los derechos reservados por el autor.</p>
        </div>
        <div className="py-20">
          <Image src="/img-mobile/logo-white.png" width={200} height={200} alt="logo The Elote Co" />
          <p className="mt-2 text-white text-4xl font-bold">The Elote Co.</p>
        </div>
        <Image src="/img-mobile/bg-footer.png" alt="Background footer" width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}/>
      </footer>

    </div>
  );
}
