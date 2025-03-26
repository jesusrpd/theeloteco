import Image from "next/image";

export default function AboutUs() {
    return(
        <section className="py-10 px-4 lg:px-0" id="aboutus">
            <div className="lg:flex justify-center">
                <div className="text-center items-center md:order-2 lg:w-1/2 md:px-5 lg:pr-20 xl:pr-0">
                    <h3 className="text-red-elote font-bold text-4xl">Sobre The Elote Co</h3>
                    <p className="font-medium text-justify text-2xl my-5 md:text-3xl leading-9 px-5 pb-4">Somos una compañía mexicana fundada en el <span>2018</span> dedicada a crear experiencias deliciosas a través del elote.</p>
                   
                    <p className="font-medium text-justify text-2xl my-5 md:text-3xl leading-9 px-5 ">El mejor elote de México es regio y el mejor elote regio lo preparamos nosotros; Vamos Por un Elote a The Elote Co..</p>
                </div>
                <div className="flex justify-center lg:order-1  lg:hidden ">
                <Image src="/img-mobile/img-aboutus.png" className="" width={332.08} height={380} alt="img-aboutus" />
                </div>
                <div className="flex justify-center lg:order-1  max-lg:hidden">
                <Image src="/img-mobile/img-aboutus.png" className="" width={487.75} height={558.14} alt="img-aboutus" />
                </div>
            </div>
        </section>
    )
}