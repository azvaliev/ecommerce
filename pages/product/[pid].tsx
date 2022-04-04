import { match } from "assert";
import { GetStaticProps } from "next";
import ProductView from "../../components/product/ProductView";
import ProductPreview from "../../components/products/ProductPreview";
import { Product, ProductArray } from "../../components/products/ProductTypes";
import styles from "../../styles/modules/Product.module.scss";

const ProductDisplay = ({product, reccomendedProducts}: {product: Product, reccomendedProducts: Product[]}) => {
	return (
		<div className={styles["wrapper-page-product"]}>
			<ProductView product={product} />
			<section className={styles["reccomended-wrapper"]}>
				<h2>Reccomended Products</h2>
				<div className={`reccomended ${styles["reccomended"]}`}>
					{reccomendedProducts.map((rec) => 
						<ProductPreview product={rec} key={product.id} />
						)}
				</div>
			</section>
		</div>
	)
}

export const getStaticProps: GetStaticProps = async(context) => {
	
	const { pid } = context.params!; 
	const [res, reccomendedProducts] = await fetch("https://res.cloudinary.com/dhqlxce9z/raw/upload/v1648857188/perseus/products_bvqqdk.json", {
		method: "GET"
	})
	.then(res => res.json())
	.then((res: ProductArray) => {
		const product = res.find(res => res.id === Number(pid));
		console.log("product is", product);
		const reccomendedProducts: Product[] = [];
		reccomendedProducts.push(res[res.length - 1]);
		res.forEach((item: Product) => {
			if (reccomendedProducts.length < 3 && 
				item.categories.includes(product!.categories[0]) &&
				item.id !== product!.id) {
				reccomendedProducts.push(item);
			}
		});
		if (reccomendedProducts.length < 3) {
			const matching = res.filter(item => item.categories.includes(product!.categories[1]));
			matching.forEach(match => {
					if (!reccomendedProducts.includes(match) && 
					reccomendedProducts.length < 3 &&
					product!.id !== match.id) { 

						reccomendedProducts.push(match);
					}
			});
		}
		return [product, reccomendedProducts]
	})

	return {
		props: {
			product: res,
			reccomendedProducts: reccomendedProducts
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
	})
	return {
	  paths: res,
	  fallback: true
	};
  }

export default ProductDisplay;