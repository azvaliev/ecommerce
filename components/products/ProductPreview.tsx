import Image from "next/image";
import { Product } from "./ProductTypes";
import classes from "../../styles/modules/Products.module.scss";
import Link from "next/link";

interface Props {
	product: Product;
}

const ProductPreview = ({product}: Props) => {
	return (
		<Link href={`/products/${product.id}`} passHref>
			<div className={`product ${classes["product-wrapper"]}`} >
				<div className={classes["product-image-wrapper"]}>
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
				<span className={classes["product-prices"]}>
					{product.discount && 
						<h4 className={classes["product-discount"]}>
							<s>
								${product.discount}
							</s>
						</h4>
					}
					<h4>
						${product.price}
					</h4>
				</span>

			</div>
		</Link>
	)
}

export default ProductPreview;