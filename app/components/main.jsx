"use client"
import Image from "next/image";

export default function Main() {

    return (
        <div className="lg:px-1 md:mx-5 xl:px-0" id="main">
            <section className="bg-[url(/img-mobile/main-hero.png)] md:bg-[url(/img-desktop/main-hero.png)] w-full md:w-full h-screen md:h-fit lg:h-screen background-no-repeat bg-no-repeat bg-contain md:bg-contain lg:bg-contain xl:bg-cover flex flex-col justify-center items-center pb-5 md:justify-center md:items-start lg:pb-0 md:pb-0">
                <div className="products mb-5 md:order-2 mt-80 md:mt-0">
                    <div className="products-slide flex items-center md:ml-10 lg:ml-20">
                        <Image src="/img-mobile/product1.png" alt="background header" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="mx-5 mb:mx-2"/>
                        <Image src="/img-mobile/product2.png" alt="background header" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="mx-5 mb:mx-2"/>
                        <Image src="/img-mobile/product3.png" alt="background header" width={0} height={0} sizes="100vw" style={{ width: "100%", height: "auto" }} className="mx-5 mb:mx-2"/>
                    </div>
                </div>
                <div className="md:order-1 md:ml-10 lg:ml-20">
                    <h1 className="text-red-700 font-bold text-5xl mb-2 md:text-4xl lg:text-6xl text-center md:text-left lg:mb-10 md:mt-10 lg:mt-0">The Elote Co</h1>
                    <p className="text-center lg:text-2xl md:w-2/4 md:text-start font-bold text-black-elote px-3 lg:mb-5 md:mb-5">El mejor elote de México es regio y el mejor elote regio lo preparamos nosotros; Vamos Por Un Elote a The Elote Co</p>
                </div>
            </section>
            <div className="fixed right-2 top-1/4 max-sm:hidden max-lg:hidden">
                <div className="w-3 h-3 rounded-full bg-amber-300 my-4"></div>
                <div className="w-3 h-3 rounded-full bg-amber-300 my-4"></div>
                <div className="w-3 h-3 rounded-full bg-amber-300 my-4"></div>
                <div className="w-3 h-3 rounded-full bg-amber-300 my-4"></div>
                <div className="w-3 h-3 rounded-full bg-amber-300 my-4"></div>
                <div className="w-3 h-3 rounded-full bg-amber-300 my-4"></div>
            </div>
        </div>
    );
}