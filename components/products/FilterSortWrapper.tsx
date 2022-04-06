import { createPortal } from "react-dom";
import usePortalMountCheck from "../../lib/usePortalMountCheck";
import useMobileCheck from "../../lib/useMobileCheck";
import ProductFilters from "./ProductFilters";
import Sorting from "./Sorting";

const FilterSortWrapper = () => {
	const isMounted = usePortalMountCheck();
	const isMobile = useMobileCheck();
	
	return isMounted ? createPortal(
		<div id="wrapper-filter-sort">
			{!isMobile ?
				<>
					<ProductFilters />
					<Sorting />
				</>
			:
				<>
					<h4>Sort / Filter</h4>
					<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" fill="#ebe1b5">
						<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
					</svg>
				</>
			}
		</div>, 
		document.querySelector("#filterbar")!
	): null
	
}

export default FilterSortWrapper;