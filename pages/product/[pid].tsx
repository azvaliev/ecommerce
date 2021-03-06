import { GetServerSideProps } from "next";
import Head from "next/head";
import ErrorPage from "../../components/ErrorPage";
import ProductView from "../../components/product/ProductView";
import ProductPreview from "../../components/products/ProductPreview";
import { Product, ProductArray } from "../../components/ProductTypes";
import useMobileCheck from "../../lib/useMobileCheck";
import styles from "../../styles/modules/Product.module.scss";

const ProductDisplay = ({
	product,
	reccomendedProducts,
}: {
	product: Product;
	reccomendedProducts: Product[];
}) => {
	const isMobile = useMobileCheck();

	const reccomendedProductsFormat = reccomendedProducts
		? isMobile
			? reccomendedProducts.filter((p, idx) => idx !== 2)
			: [...reccomendedProducts]
		: [];

	return product ? (
		<>
			<Head>
				<title>{product.title}</title>
				<meta name="description" content={product.description} />
			</Head>
			<div className={styles["wrapper-page-product"]}>
				<ProductView product={product} />

				<section className={styles["reccomended-wrapper"]}>
					<h2>Reccomended Products</h2>
					<div className={`reccomended ${styles["reccomended"]}`}>
						{reccomendedProductsFormat &&
							reccomendedProductsFormat.map((rec) => (
								<ProductPreview product={rec} key={rec.id} />
							))}
					</div>
				</section>
			</div>
		</>
	) : (
		<ErrorPage errorCode={404} errorName="Product Not Found" />
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { pid } = context.params!;
	const [res, reccomendedProducts] = await fetch(
		process.env.PRODUCTS_ENDPOINT!,
		{
			method: "GET",
		}
	)
		.then((res) => res.json())
		.then((res: ProductArray) => {
			const product = res.find((res) => res.id === Number(pid));
			const reccomendedProducts: Product[] = [];
			res.forEach((item: Product) => {
				if (
					reccomendedProducts.length < 3 &&
					item.categories.includes(product!.categories[0]) &&
					item.id !== product!.id
				) {
					reccomendedProducts.push(item);
				}
			});
			if (reccomendedProducts.length < 3) {
				const matching = res.filter((item) =>
					item.categories.includes(product!.categories[2])
				);
				matching.forEach((match) => {
					if (
						!reccomendedProducts.includes(match) &&
						reccomendedProducts.length < 3 &&
						product!.id !== match.id
					) {
						reccomendedProducts.push(match);
					}
				});
			}
			return [product, reccomendedProducts];
		});

	return {
		props: {
			product: res,
			reccomendedProducts: reccomendedProducts,
		},
	};
};


export default ProductDisplay;
