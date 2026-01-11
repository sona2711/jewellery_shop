import { useParams } from "react-router-dom";
// import { ProductDetails } from "../../components/product/ProductDetails";



export const ProductPage = () => {
    const product = useParams();
    console.log(product)
    return (
        <div>
            {product.name}
            {/* <ProductDetails product = {product.} onBook={() => product.id}/> */}
        </div>
    )
}