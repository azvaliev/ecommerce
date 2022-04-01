import { GetStaticProps } from "next";
import { ProductArray } from "../../components/products/ProductContext";
import classes from "../../styles/Products.module.scss";
import ProductContext from "../../components/products/ProductContext";
import { useContext, useEffect } from "react";
const _ = require('lodash/core');

const AllProducts = ({initialProducts}: {initialProducts: ProductArray}) => {
	
	const {products, handleChangeProducts} = useContext(ProductContext);

	useEffect(() => {
		console.log(initialProducts);
		if (!_.isEqual(products, initialProducts)) {
			handleChangeProducts!(initialProducts);
		}
	}, [])

	return (
		<>
			<h1 className={classes.title}>All Products</h1>
			<main className={classes.allProductsWrapper}>
				{products && products.map((product, idx) => 
					<div className={classes.productWrapper} key={idx}>
						<h3>{product.title}</h3>

					</div>
					)}
			</main>
		</>
	)
}
export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch("https://fakestoreapi.com/products").then(res => res.json());
	console.log(res);

	return {
	  props: {
		initialProducts: res
	  }, 

	  // Regenerate page
	  revalidate: 10
	}
}

export default AllProducts;