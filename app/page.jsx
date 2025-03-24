import Image from "next/image";
import Main from "./components/main";
import ContactMe from "./components/contactme";
import Footer from "./components/footer";
import Nav from "./components/nav";
import AboutUs from "./components/aboutus";
import Menu from "./components/menu";

export default function Home() {
  return (
    <div>

        <Image src="/icons/whatsapp.svg" alt="background header" width={70} height={70} className="fixed right-3 top-11/12 z-50"/>

        <Nav/>
        
        {/* SECTION MAIN  */}
        <Main/>

        {/* SECTION ABOUT US */}
        <AboutUs/>

        {/* SECTION CONTACT ME */}
        <ContactMe/>

        {/* SECTION TOP PRODUCTS */}

        {/* SECTION MENÚ */}
        <Menu/>

        {/* SECTION SUSUCRSALES */}

        {/* SECTION FOOTER */}
        <Footer/>

    </div>
  );
}
