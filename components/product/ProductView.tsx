import Image from "next/image";
import { useReducer } from "react";
import useMobileCheck from "../../lib/useMobileCheck";
import classes from "../../styles/modules/Product.module.scss";
import ErrorPage from "../ErrorPage";
import { Product } from "../ProductTypes";
import Counter from "./QuantityCounter";


interface productDetails {
	size: string;
	quantity: number;
}

const handleUpdateDetails = (prevState: productDetails, newData: { type?: string, newVal?: productDetails }) => {
	if (newData.newVal) return {...prevState, ...newData.newVal}
	switch (newData.type) {
		case ("increment"): 
			return {...prevState, quantity: prevState.quantity + 1}
		default: 
			if (prevState.quantity > 1) return {...prevState, quantity: prevState.quantity - 1}	
			return {...prevState, quantity: prevState.quantity}	
	}

}

const initialProductDetails: productDetails = {
	size: "sm",
	quantity: 1
}

const ProductView = ({product}: {product: Product}) => {
	
	const [productDetails, updateProductDetails] = useReducer(handleUpdateDetails, initialProductDetails)
	const isMobile = useMobileCheck();

	return product ? (
		<main className={classes["wrapper-product"]}>
			<div className={classes["wrapper-image-col"]}>
				{product.images.map((image, idx) =>
					!isMobile || idx < 2 ?
					<div className={classes["wrapper-image"]} key={idx}>
						<Image 
							src={image.src}
							alt={image.alt} 
							objectFit="contain"
							layout="fill" 
							sizes="45vw"
							priority
							/>
					</div>
				: null)}
			</div>
			<section className={classes["wrapper-main"]}>
				<h1>{product.title}</h1>
				<p className={classes["description"]}>
					{product.description}
				</p>
				<div className={classes["pricing"]}>
					{product.discount && 
						<h4 className={`discount pricing ${classes["product-discount"]}`}>
							<s>
								${product.discount}
							</s>
						</h4>
					}
					<h4 className={classes["price"]}>
						${product.price}
					</h4>
 				</div>
				<select className={classes["select-size"]}>
					<option value="" disabled>Pick a size:</option>
					<option value="sm">Small</option>
					<option value="md">Medium</option>
					<option value="xl">Large</option>
				</select>
				<Counter 
					value={productDetails.quantity}
					onCountIncrease={() => updateProductDetails({ type: "increment" })}
					onCountDecrease={() => updateProductDetails({ type: "decrement" })}
					/>
				<button className={`btn btn-outline mtop-2 ${classes["add-to-cart"]}`}>
					Add to Cart
				</button>
			</section>
		</main>
	): <ErrorPage errorCode={404} errorName="Page Not Found"/>
}

export default ProductView;