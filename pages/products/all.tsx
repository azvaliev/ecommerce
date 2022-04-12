import { GetStaticProps } from "next";
import { Product, ProductArray } from "../../components/products/ProductTypes";
import classes from "../../styles/pages/Products.module.scss";

import ProductPreview from "../../components/products/ProductPreview";
import { createContext, useMemo, useReducer } from "react";
import FilterSortWrapper from "../../components/products/filter-sort/FilterSortWrapper";

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
	sortingState?: string;
	updateSortingState?: (newSortingState: string) => void;
}

// Filtering logic

const handleUpdateFilter = (prevFilter: filterOpts, newFilterOpts: filterOpts) => {
	return {...prevFilter, ...newFilterOpts};
}

const checkFilter = (filter: string, product: Product) => {
	if (filter.length === 0) return true
	return product.categories.includes(filter);
}

export const filterContext = createContext<filterContext>({});

// Sorting logic

const sortItems = (itemA: Product, itemB: Product, sortState: string) => {

	if (sortState.includes("0")) {
		if (sortState === "0-1") return itemA.price - itemB.price;
		return itemB.price - itemA.price;	

	} else if (sortState.includes("a")) {
		if (sortState === "a-z") {
			if(itemA.title < itemB.title) return -1; 
			if(itemA.title > itemB.title) return 1; 
			return 0;
		}
		if(itemB.title < itemA.title) return -1; 
		if(itemB.title > itemA.title) return 1; 
		return 0;	

	} else {
		if (sortState === "new-old") return itemB.timestamp - itemA.timestamp; 
		return itemA.timestamp - itemB.timestamp;
	}
}

const handleUpdateSort = (prevState: string, newState: string) => newState;

const AllProducts = ({products}: {products: ProductArray}) => {
	
	const [filterState, updateFilterState] = useReducer(handleUpdateFilter, initialFilter);
	const [sortingState, updateSortingState] = useReducer(handleUpdateSort, "")

	const filteredProducts = useMemo(() => 
		products.filter(product => 
			checkFilter(filterState.productType!, product) &&
			checkFilter(filterState.edition!, product) &&
			checkFilter(filterState.style!, product)
	), [products, filterState])

	const sortedProducts = useMemo(() =>
		filteredProducts.sort((a, b) => sortItems(a, b, sortingState))
	, [filteredProducts, sortingState]);
	

	return (
		<div className={classes.root}>
			<h1 className={classes.title}>All Products</h1>
			<filterContext.Provider value={{
				filterState: filterState,
				updateFilterState: updateFilterState,
				sortingState: sortingState,
				updateSortingState: updateSortingState 
				}}>
				<FilterSortWrapper />
			</filterContext.Provider>
			<main className={classes.allProductsWrapper} id="allProductsWrapper">
				{sortedProducts.length > 0 ? 
					sortedProducts.map(product => 
						<ProductPreview product={product} key={product.id} />
					)
				:
					<h2>No matching products found</h2>
					}
			</main>
		</div>
	)
}
export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch(process.env.PRODUCTS_ENDPOINT!, {
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