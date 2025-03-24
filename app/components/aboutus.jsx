import Image from "next/image";

export default function AboutUs() {
    return(
        <section>
            <div className="md:flex  justify-center ">
                <div className="text-center items-center md:order-2 md:w-1/2 md:px-5">
                    <h3 className="text-red-elote font-bold text-4xl">Sobre The Elote Co</h3>
                    <p className="font-medium text-justify text-xs leading-9">Lorem ipsum dolor sit amet consectetur. Ornare porttitor dolor eu mollis sed. Commodo feugiat amet in quis volutpat. Eros pellentesque nibh risus sit nam. Metus tincidunt diam a eu mattis id id egestas volutpat. Pellentesque placerat id placerat quis tellus iaculis placerat viverra vel. Pretium id dictum phasellus id. Risus vel cras congue imperdiet eget sapien massa facilisi. Adipiscing amet pharetra nulla nibh libero lectus. Cras nisi a sed augue.</p>
                    <p className="font-medium text-justify text-xs leading-9">Lorem ipsum dolor sit amet consectetur. Ornare porttitor dolor eu mollis sed. Commodo feugiat amet in quis volutpat. Eros pellentesque nibh risus sit nam. </p>
                </div>
                <div className="flex justify-center md:order-1 md:w-1/2">
                <Image src="/img-mobile/img-aboutus.png" className="" width={332.08} height={380} alt="img-aboutus" />
                </div>
            </div>
        </section>
    )
}