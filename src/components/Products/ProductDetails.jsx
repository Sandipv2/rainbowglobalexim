import { useParams } from "react-router"
import { mango1, mango2, mango3, onion1, onion2, onion3, rice1, rice2, rice3, chilli1, chilli2, chilli3, turmeric1, turmeric2, turmeric3} from '../../assets';
import { MangoDetail, OnionDetail, RiceDetail, ChilliDetail, TurmericDetail } from "./ProductContents";
import ProductDetailComp from './ProductDetailComp'

function ProductDetails() {
    const { product } = useParams();



    return (
        <div className='bg-slate-200 mt-20'>
            {product === 'mango' && <ProductDetailComp img1={mango1} img2={mango2} img3={mango3} productName='Alphonso (Hapus) Mango' ProductDetails={MangoDetail}/>}

            {product === 'onion' && <ProductDetailComp img1={onion1} img2={onion2} img3={onion3} productName='Red Onion' ProductDetails={OnionDetail}/>}

            {product === 'rice' && <ProductDetailComp img1={rice1} img2={rice2} img3={rice3} productName='Basmati / Non-Basmati Rice' ProductDetails={RiceDetail}/>}

            {product === 'chilli' && <ProductDetailComp img1={chilli1} img2={chilli2} img3={chilli3} productName='Green Chilli' ProductDetails={ChilliDetail}/>}

            {product === 'turmeric' && <ProductDetailComp img1={turmeric1} img2={turmeric2} img3={turmeric3} productName='Turmeric Finger' ProductDetails={TurmericDetail}/>}
        </div>
    )
}

export default ProductDetails