import { GetStaticProps } from "next";
import Image from "next/image";
import { Product, ProductArray } from "../../components/products/ProductTypes";

const Product = ({product}: {product: Product}) => {
	return (
		<div>
			<Image 
				src={product.images[0].src}
				alt={product.images[0].alt} 
				layout="fixed" 
				height="500" 
				width="500" 
				priority
				/>
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

export default Product;