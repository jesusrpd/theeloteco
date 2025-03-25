
export default function Menu() {
    return(
      <section className="bg-[url(/img-mobile/bg.menu.png)] lg:bg-[url(/img-desktop/bg.menu.png)] bg-no-repeat bg-cover  text-white md:py-10 py-4 mt-10 lg:bg-cover" id="menu">
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-center">
            <div className="text-center">
                <h3 className="font-bold text-4xl py-4">Menú</h3>
                <p className="font-medium pb-4 px-1 text-lg">Te aseguramos que nunca has probado nuestra explosión de sabores, Somos The Elote Co</p>
            </div>
            <div className="md:flex lg:items-center md:w-full lg:px-32 ">

            <div className="flex px-12 pb-4 md:px-0 md:pl-4 lg:w-1/2">
                <div className="w-1/2 order-2 px-1.5 ">
                    <h4 className="font-bold text-xl">TOPPINGS</h4>
                    <ul className="font-medium text-base list-disc">
                        <li>Cheetos</li>
                        <li>Takis</li>
                        <li>Ruffles</li>
                        <li>Doritos</li>
                        <li>Tostitos</li>
                        <li>Tocino Deshidratado</li>
                        <li>Ajonjolí</li>
                        <li>Queso Blanco</li>
                        <li>Hot Nuts</li>
                        <li>Cacahuate Salado</li>
                        <li>Limón</li>
                    </ul>
                </div>
                <div className="w-1/2 order-1 px-3"> 
                <div className="">                    
                        <h4 className="font-bold text-xl">ADEREZOS INICIALES</h4>                    
                        <ul className="font-medium text-base list-disc">
                            <li>Mayonesa</li>
                            <li>Queso amarillo</li>
                            <li>Crema</li>
                        </ul>
                    </div>                   
                    <div className="">
                        <h4 className="font-bold text-xl">ADEREZOS</h4>
                        <ul className=" font-medium text-base list-disc">
                            <li>Chipotle</li>
                            <li>Jalapeño</li>
                            <li>Habanero</li>
                         <li>Clásico Pica</li>
                         <li>Clásico No Pica</li>
                         <li>Ranch</li>
                        </ul>
                    </div>                    
                </div>
                                
            </div>
            
            <div className="pb-10 md:flex md:w-1/2 md:pr-4 px-12 md:px-0 lg:w-1/2">
                <ul className="list-disc md:px-0 lg:w-1/2">
                    <li className="flex ">
                        <div className="w-2/3">
                            <h5 className=" font-bold text-base">ELOTE ENTERO</h5>
                            <p className="font-medium text-xs">2 toppings + 2 aderezos</p>
                        </div>
                        <div>
                            <p className="font-bold text-xl w-1/3" >$70</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="w-2/3">
                            <h5 className=" font-bold text-base">ELOTE CUP CHICO</h5>
                            <p className="font-medium text-xs">2 toppings + 2 aderezos</p>
                        </div>
                        <div>
                            <p className="font-bold text-xl">$65</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="w-2/3">
                            <h5 className=" font-bold text-base">ELOTE CUP MED</h5>
                            <p className="font-medium text-xs">3 toppings + 3 aderezos</p>
                        </div>
                        <div>
                            <p className="font-bold text-xl">$70</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="w-2/3">
                            <h5 className=" font-bold text-base">ELOTE CUP GRANCE</h5>
                            <p className="font-medium text-xs">4 toppings + 4 aderezos</p>
                        </div>
                        <div>
                            <p className="font-bold text-xl">$80</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="w-2/3">
                            <h5 className=" font-bold text-base">ELOTE BOX</h5>
                            <p className="font-medium text-xs">toppings y aderezos ilimitados</p>
                        </div>
                        <div>
                            <p className="font-bold text-xl">$100</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="w-2/3">
                            <h5 className=" font-bold text-base">ELOTE BOX DOBLE</h5>
                            <p className="font-medium text-xs">toppings y aderezos ilimitados</p>
                        </div>
                        <div>
                            <p className="font-bold text-xl">$115</p>
                        </div>
                    </li>                     
                </ul>
                <ul className="lg:w-1/2">
                <li className="flex">
                        <div className="w-2/3">
                            <h5 className=" font-bold text-base">ELOTE BOWL CHICO</h5>
                             <p className="font-medium text-xs">toppings y aderezos ilimitados</p>
                            </div>
                        <div className="w-1/3">
                                <p className="font-bold text-xl">$265</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="w-2/3">
                            <h5 className=" font-bold text-base">ELOTE BOWL GRANDE</h5>
                            <p className="font-medium text-xs">toppings y aderezos ilimitados</p>
                        </div>
                        <div>
                            <p className="font-bold text-xl">$515</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="w-2/3">
                            <h5 className=" font-bold text-base">KIT CUP CHICO</h5>
                            <p className="font-medium text-xs">2 toppings y 2 aderezos a elegir</p>
                        </div>
                        <div>
                            <p className="font-bold text-xl">$395</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="w-2/3">
                            <h5 className=" font-bold text-base">KIT BOX CHICO</h5>
                            <p className="font-medium text-xs">2 toppings y 2 aderezos a elegir</p>
                        </div>
                        <div>
                            <p className="font-bold text-xl">$455</p>
                        </div>
                    </li>
                    <li className="flex">
                         <div className="w-2/3">
                            <h5 className=" font-bold text-base">KIT CUP GRANDE</h5>
                            <p className="font-medium text-xs">2 toppings y 2 aderezos a elegir</p>
                        </div>
                        <div>
                             <p className="font-bold text-xl">$765</p>
                        </div>
                    </li>
                    <li className="flex">
                        <div className="w-2/3">
                            <h5 className=" font-bold text-base">KIT BOX GRANDE</h5>
                            <p className="font-medium text-xs">2 toppings y 2 aderezos a elegir</p>
                        </div>
                        <div >
                             <p className="font-bold text-xl">$885</p>
                        </div>
                    </li>               
                </ul>
            </div>
            </div>
        </div>
      </section>
    )
}