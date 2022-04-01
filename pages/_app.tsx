import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/nav/Navbar'
import Products, { ProductArray, ProductChangeHandler } from '../components/products/ProductContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  const [products, setProducts] = useState<ProductArray>([]);

  const handleChangeProducts: ProductChangeHandler = (products) => setProducts(products)

  return (
    <Products.Provider value={{products, handleChangeProducts}}>
      <Navbar />
      <Component {...pageProps} />
    </Products.Provider>
  )
}

export default MyApp
