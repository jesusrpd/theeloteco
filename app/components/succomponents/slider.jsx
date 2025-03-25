'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

const Slider = () => {
  const [active, setActive] = useState(3);
  const sliderRef = useRef(null);
  
  useEffect(() => {
    const items = sliderRef.current?.querySelectorAll('.item');
    if (!items || items.length === 0) return;

    const loadShow = () => {
      let stt = 0;
      items[active].style.transform = `none`;
      items[active].style.zIndex = 1;
      items[active].style.filter = 'none';
      items[active].style.opacity = 1;

      for (let i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }

      stt = 0;
      for (let i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
      }
    };

    loadShow();
  }, [active]);

  const handleNext = () => setActive((prev) => (prev + 1 < document.querySelectorAll('.slider .item').length ? prev + 1 : prev));

  const handlePrev = () => setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));

  return (
    <div className="slider mt-10" ref={sliderRef}>
            <div className="item relative">
                <span className='font-bold text-black-elote absolute comas'>,,</span>
                <span className='w-1/2 h-5 flex justify-center m-auto'>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                </span>
                <p className='mt-5'>Buen servicio y rápido. Cuidan la presentación de los alimentos. Variedad de toppings y aderezos con opción a probarlos todos en algunas opciones de alimentos. Hay espacios para tomarse fotos pese a que en lugar es pequeño, hay mesas algunas mesas para consumo en el lugar.</p>
                <h3 className='font-bold text-center mt-5'>-Anet Montes-</h3>
            </div>
            <div className="item relative">
                <span className='font-bold text-black-elote absolute comas'>,,</span>
                <span className='w-1/2 h-5 flex justify-center m-auto'>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                </span>
                <p className='mt-5'>Buenos elotes con buenos complementos.<br/>Tienen mesas en el interior y exterior</p>
                <h3 className='font-bold text-center mt-5'>-Adolff Cruz-</h3>
            </div>
            <div className="item relative">
            <span className='font-bold text-black-elote absolute comas'>,,</span>
                <span className='w-1/2 h-5 flex justify-center m-auto'>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                </span>
                <p className='mt-5'>Genial el espacio, buen servicio del personal y excelente ubicación. Recomiendo al 100!</p>
                <h3 className='font-bold text-center mt-5'>-Alessandro do Vale "Alex"-</h3>
            </div>
            <div className="item relative">
            <span className='font-bold text-black-elote absolute comas'>,,</span>
                <span className='w-1/2 h-5 flex justify-center m-auto'>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                </span>
                <p className='mt-5'>El lugar es muy bonito, tiene varias opciones de toppings, muchos tamaños, muchas opciones. Lo recomiendo mucho.</p>
                <h3 className='font-bold text-center mt-5'>-Ruth Jazmín Cid Sáurez-</h3>
            </div>
            <div className="item relative">
            <span className='font-bold text-black-elote absolute comas'>,,</span>
                <span className='w-1/2 h-5 flex justify-center m-auto'>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                </span>
                <p className='mt-5'>Una delicia de elote… el concepto súper padre… los tostitos con elote y los aderezos deliciosos!!!</p>
                <h3 className='font-bold text-center mt-5'>-Rubit Villanueva-</h3>
            </div>
            <div className="item relative">
            <span className='font-bold text-black-elote absolute comas'>,,</span>
                <span className='w-1/2 h-5 flex justify-center m-auto'>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                </span>
                <p className='mt-5'>Súper amables siempre, precio accesible y muy rico. La verdad más opciones que otros lugares.</p>
                <h3 className='font-bold text-center mt-5'>-Dany Hernández (Ranny)-</h3>
            </div>
            <div className="item relative">
            <span className='font-bold text-black-elote absolute comas'>,,</span>
                <span className='w-1/2 h-5 flex justify-center m-auto'>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                    <Image src="/icons/start.svg" alt="background header" width={0}
                    height={0} sizes="100vw" style={{ width: "100%", height: "auto" }}/>
                </span>
                <p className='mt-5'>Excelente variedad de toppings<br/>El sabor inigualable<br/>Recomendado</p>
                <h3 className='font-bold text-center mt-5'>Daniela Martinez</h3>
            </div>
            <button id="next" onClick={handleNext} className='w-15'><Image src="/icons/arrow-right.svg" alt="background header" width={0} height={0} sizes="100vw" style={{width: "100%", height: "auto" }}/></button>
            <button id="prev" onClick={handlePrev} className='w-15'><Image src="/icons/arrow-left.svg" alt="background header" width={0} height={0} sizes="100vw" style={{width: "100%", height: "auto" }}/></button>
        </div>
  );
};

export default Slider;