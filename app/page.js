import Image from "next/image";
import Main from "./components/main";
import ContactMe from "./components/contactme";
import Footer from "./components/footer";
import Nav from "./components/nav";

export default function Home() {
  return (
    <div>

        <Image src="/icons/whatsapp.svg" alt="background header" width={70} height={70} className="fixed right-3 top-11/12 z-50"/>

        <Nav/>
        
        {/* SECTION MAIN  */}
        <Main/>

        {/* SECTION ABOUT US */}

        {/* SECTION CONTACT ME */}
        <ContactMe/>

        {/* SECTION TOP PRODUCTS */}

        {/* SECTION MENÚ */}

        {/* SECTION SUSUCRSALES */}

        {/* SECTION FOOTER */}
        <Footer/>

    </div>
  );
}
