import {ProductCard} from './components/product/ProductCard'
import { Header } from './components/layout/Header'

import './App.css'


function App() {
 

  return (
    <>
    <Header image="./src/assets/images/logo/logo_dark.png"/>
    <ProductCard  image="./assets/images/products/bracelets/men_bracelet_black_silver.jpg" title="Produc 2" price={200} onBook={() => {}} />
    </>
  )
}

export default App
