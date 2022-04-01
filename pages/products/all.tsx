import { GetStaticProps } from "next";
import { ProductArray } from "../../components/products/ProductTypes";
import classes from "../../styles/Products.module.scss";

import ProductPreview from "../../components/products/ProductPreview";
import ProductFilters from "../../components/products/ProductFilters";

const AllProducts = ({products}: {products: ProductArray}) => {
	
	return (
		<>
			<h1 className={classes.title}>All Products</h1>
			<ProductFilters />
			<main className={classes.allProductsWrapper}>
				{products && products.map(product => 
					<ProductPreview product={product} key={product.id} />
					)}
			</main>
		</>
	)
}
export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch("https://res.cloudinary.com/dhqlxce9z/raw/upload/v1648783422/perseus/products_wbtxfs.json", {
		method: "GET"
	})
	.then(res => res.json());

	return {
	  props: {
		products: res
	  }, 

	  // Regenerate page
	  revalidate: 10
	}
}

export default AllProducts;