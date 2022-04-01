import Image from "next/image";
import { Product } from "./ProductTypes";
import classes from "../../styles/Products.module.scss";

interface Props {
	product: Product;
	key: number;
}

const ProductPreview = ({product, key}: Props) => {
	return (
		<div className={classes.productWrapper} key={key}>
			<div className={classes.productImageWrapper}>
				<Image 
					objectFit="contain"
					src={product.images[0].src}
					alt={product.title} 
					layout="fill"
					/>
			</div>						
			<h3>
				{product.title}
			</h3>
			<h4>
				${product.price}
			</h4>

		</div>
	)
}

export default ProductPreview;