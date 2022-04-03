import { GetStaticProps } from "next";
import ProductView from "../../components/product/ProductView";
import { Product, ProductArray } from "../../components/products/ProductTypes";
import classes from "../../styles/modules/Product.module.scss";

const ProductDisplay = ({product}: {product: Product}) => {
	return (
		<div className={classes["wrapper-page-product"]}>
			<ProductView product={product} />
		</div>
	)
}

export const getStaticProps: GetStaticProps = async(context) => {
	
	const { pid } = context.params!; 
	const res = await fetch("https://res.cloudinary.com/dhqlxce9z/raw/upload/v1648857188/perseus/products_bvqqdk.json", {
		method: "GET"
	})
	.then(res => res.json())
	.then((res: ProductArray) => 
		res.find(res => res.id === Number(pid))
	)


	return {
		props: {
			product: res
		},
		revalidate: 10
	}
}

export const getStaticPaths = async() => {

	const res = await fetch("https://res.cloudinary.com/dhqlxce9z/raw/upload/v1648857188/perseus/products_bvqqdk.json", {
		method: "GET"
	})
	.then(res => res.json())	
	.then((res: ProductArray) => {
		return res.map(res => ( { params: { pid: res.id.toString()} }))
	}
)

	return {
	  paths: res,
	  fallback: true
	};
  }

export default ProductDisplay;