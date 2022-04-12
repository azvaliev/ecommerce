import Image from 'next/image';
import { Product } from '../ProductTypes';
import classes from '../../styles/pages/Products.module.scss';
import Link from 'next/link';

interface Props {
	product: Product;
}

const ProductPreview = ({ product }: Props) => {
	return (
		<Link href="/product/[pid]" as={`/product/${product.id}`} passHref>
			<div className={`product ${classes['product-wrapper']}`}>
				<div className={classes['product-image-wrapper']}>
					<Image
						objectFit="cover"
						src={product.images[0].src}
						alt={product.title}
						layout="fill"
						sizes="40vw"
						quality={40}
						priority={product.id <= 4 && true}
					/>
				</div>
				<h3>{product.title}</h3>
				<span className={classes['product-prices']}>
					{product.discount && (
						<h4 className={`discount pricing ${classes['product-discount']}`}>
							<s>${product.discount}</s>
						</h4>
					)}
					<h4>${product.price}</h4>
				</span>
			</div>
		</Link>
	);
};

export default ProductPreview;
