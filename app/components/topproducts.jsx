export default function TopProducts() {
    return(
        <section id="topproducts">
            <h2 className="text-4xl text-red-elote mt-10 mb-5 font-bold text-center">Productos Top</h2>
            <div className="w-full flex flex-wrap items-center justify-center gap-3 md:gap-10 lg:gap-x-20 xl:gap-x-80">
                <div className="bg-[url(/img-mobile/top-product-1.png)] bg-cover rounded-2xl card-product relative">
                    <div className="absolute bottom-2 left-2 lg:bottom-6 lg:left-6">
                        <h3 className="text-white font-bold text-2xl lg:mb-2">Elote Cup CH</h3>
                        <p className="text-white font-medium"><span>2</span> toppings <span>2</span> aderezos</p>
                    </div>
                </div>
                <div className="bg-[url(/img-mobile/top-product-2.png)] bg-cover rounded-2xl card-product relative">
                    <div className="absolute bottom-5 left-2 g:bottom-6 lg:left-6">
                        <h3 className="text-white font-bold text-2xl lg:mb-2">Elote Cup G</h3>
                        <p className="text-white font-medium"><span>4</span> toppings <span>4</span> aderezos</p>
                    </div>
                </div>
                <div className="bg-[url(/img-mobile/top-product-3.png)] bg-cover rounded-2xl card-product relative">
                    <div className="absolute bottom-5 left-2 g:bottom-6 lg:left-6">
                        <h3 className="text-white font-bold text-2xl lg:mb-2">Elote Cup M</h3>
                        <p className="text-white font-medium"><span>3</span> toppings <span>3</span> aderezos</p>
                    </div>
                </div>
                <div className="bg-[url(/img-mobile/top-product-4.png)] bg-cover rounded-2xl card-product relative">
                    <div className="absolute bottom-5 left-2 g:bottom-6 lg:left-6">
                        <h3 className="text-white font-bold text-2xl lg:mb-2">Elote Box Sencillo</h3>
                        <p className="text-white font-medium">Toppings y aderezos ilimitados</p>
                    </div>
                </div>
                <div className="bg-[url(/img-mobile/elote-simple.png)] bg-cover rounded-2xl card-product relative">
                    <div className="absolute bottom-5 left-2 g:bottom-6 lg:left-6">
                        <h3 className="text-white font-bold text-2xl lg:mb-2">Elote Entero</h3>
                        <p className="text-white font-medium"><span>2</span> toppings <span>2</span> aderezos</p>
                    </div>
                </div>
                <div className="bg-[url(/img-mobile/top-product-6.png)] bg-cover rounded-2xl card-product relative">
                    <div className="absolute bottom-5 left-2 g:bottom-6 lg:left-6">
                        <h3 className="text-white font-bold text-2xl lg:mb-2">Elote Box Doble</h3>
                        <p className="text-white font-medium">Toppings y aderezos ilimitados</p>
                    </div>
                </div>
            </div>
        </section>
    )
}