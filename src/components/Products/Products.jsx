import { onion2, mango3, turmeric3, chilli3, rice1 } from "../../assets"
import ProductCard from "./ProductCard"

function Products() {
    return (
        <div id="products" className="py-10 min-h-screen bg-slate-200 flex justify-center items-center">
            <div className=" bg-rded-400 w-3/5">
                <div>
                    <h1 className="w-fit m-auto text-5xl font-extrabold my-10 myUnderline relative">PRODUCTS</h1>
                </div>

                <div className="flex justify-center gap-7 flex-wrap pt-10">
                    <ProductCard to='products/onion' img={onion2} title='Onions' />
                    <ProductCard to='products/mango' img={mango3} title='Fresh Alphonso (Hapus) Mango' />
                    <ProductCard to='products/rice' img={rice1} title='Basmati / Non-Basmati Rice' />
                    <ProductCard to='products/chilli' img={chilli3} title='Green Chilli' />
                    <ProductCard to='products/turmeric' img={turmeric3} title='Turmeric' />
                </div>
            </div>
        </div>
    )
}

export default Products