import { Carousel} from 'antd';
import { ProductCard } from '../../product/ProductCard';
import type { Product } from "../../../types/product";
// import styles from "./styles.module.css";


export const AppCarousel = ({ products}: { products: Product[] })=> {
    const sliderArray = products.slice(0,6);

    return (
        <Carousel arrows dots={false} infinite={false}>
            {sliderArray.map((product: Product)=> 
                <ProductCard key={product.id} item={product} onBook={()=>{}}/>
            )} 
        </Carousel>
  )
}
       
    
// show oly one card, change the find reason








