interface ProductImage {
	src: string;
	alt: string;
}

export interface Product {
	id: number;
	title: string;
	price: number;
	discount: number;
	description: string;
	categories: string[];
	modelIG: string;
	images: ProductImage[];
}
export type ProductArray = Array<Product>;
