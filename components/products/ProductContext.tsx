import { createContext } from "react";

interface ProductContextObj {
	id: number;
	title: string;
	price: string;
	category: string;
	description: string;
	image: string;
}
export type ProductArray = Array<ProductContextObj>;
export type ProductChangeHandler = (products: ProductArray) => void;

export interface ProductContextType {
	products: ProductArray;
	handleChangeProducts?: ProductChangeHandler;
}

const Products = createContext<ProductContextType>({products: []})

export default Products;