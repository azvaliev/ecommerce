import { GetStaticProps } from "next";
import { Product, ProductArray } from "../../components/products/ProductTypes";
import classes from "../../styles/modules/Products.module.scss";

import ProductPreview from "../../components/products/ProductPreview";
import ProductFilters from "../../components/products/ProductFilters";
import { createContext, useReducer } from "react";
import FilterSortWrapper from "../../components/products/FilterSortWrapper";

// Types

interface filterOpts {
	productType?: string;
	style?: string;
	edition?: string;
}

const initialFilter: filterOpts = {
	productType: "",
	style: "",
	edition: ""
}

interface filterContext {
	filterState?: filterOpts;
	updateFilterState?: (newFilterOpts: filterOpts) => void;
}

// Filtering logic

const handleUpdateFilter = (prevFilter: filterOpts, newFilterOpts: filterOpts) => {
	console.log(newFilterOpts);
		return {...prevFilter, ...newFilterOpts};
}

const checkFilter = (filter: string, product: Product) => {
	if (filter.length === 0) return true
	return product.categories.includes(filter);
}

export const filterContext = createContext<filterContext>({});

const AllProducts = ({products}: {products: ProductArray}) => {
	
	const [filterState, updateFilterState] = useReducer(handleUpdateFilter, initialFilter);

	const filteredProducts = products.filter(product => 
		checkFilter(filterState.productType!, product) &&
		checkFilter(filterState.edition!, product) &&
		checkFilter(filterState.style!, product)
		);
	console.log(products)

	return (
		<>
			<h1 className={classes.title}>All Products</h1>
			<filterContext.Provider value={{filterState: filterState, updateFilterState: updateFilterState}}>
				<FilterSortWrapper />
			</filterContext.Provider>
			<main className={classes.allProductsWrapper} id="allProductsWrapper">
				{filteredProducts.length > 0 ? 
					filteredProducts.map(product => 
						<ProductPreview product={product} key={product.id} />
					)
				:
					<h2>No matching products found</h2>
					}
			</main>
		</>
	)
}
export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch("https://res.cloudinary.com/dhqlxce9z/raw/upload/v1648847984/perseus/products_ksfeqb.json", {
		method: "GET"
	})
	.then(res => res.json());

	return {
	  props: {
		products: res
	  }, 

	  // Regenerate page
	  revalidate: 10
	}
}

export default AllProducts;