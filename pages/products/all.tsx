import { GetStaticProps } from "next";
import { ProductArray } from "../../components/products/ProductTypes";
import classes from "../../styles/Products.module.scss";

import ProductPreview from "../../components/products/ProductPreview";

const AllProducts = ({products}: {products: ProductArray}) => {
	
	return (
		<>
			<h1 className={classes.title}>All Products</h1>
			<main className={classes.allProductsWrapper}>
				{products && products.map(product => 
					<ProductPreview product={product} key={product.id} />
					)}
			</main>
		</>
	)
}
export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch("https://res.cloudinary.com/dhqlxce9z/raw/upload/v1648780324/perseus/products_pzscfl.json", {
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