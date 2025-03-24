import Image from "next/image";
import Main from "./components/main";
import ContactMe from "./components/contactme";
import Footer from "./components/footer";
import Nav from "./components/nav";
import AboutUs from "./components/aboutus";
import Sucursales from "./components/sucursales";
import TopProducts from "./components/topproducts";
import Menu from "./components/menu";

export default function Home() {
  return (
    <div>

        <a href="https://wa.me/18128879985/?text=¡Hola!%20¿En%20que%20podemos%20ayudarte?" target="_blank">
          <Image src="/icons/whatsapp.svg" alt="background header" width={70} height={70} className="fixed right-3 top-11/12 z-50"/>
        </a>

        <Nav/>
        
        {/* SECTION MAIN  */}
        <Main/>

        {/* SECTION ABOUT US */}
        <AboutUs/>

        {/* SECTION CONTACT ME */}
        <ContactMe/>

        {/* SECTION TOP PRODUCTS */}
        <TopProducts/>

        {/* SECTION MENÚ */}
        <Menu/>

        {/* SECTION SUSUCRSALES */}
        <Sucursales/>

        {/* SECTION FOOTER */}
        <Footer/>

    </div>
  );
}
