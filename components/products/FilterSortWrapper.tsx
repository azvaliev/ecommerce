import { createPortal } from "react-dom";
import usePortalMountCheck from "../../lib/usePortalMountCheck";
import ProductFilters from "./ProductFilters";

const FilterSortWrapper = () => {
	const isMounted = usePortalMountCheck();
	
	return isMounted ? createPortal(
		<div>
			<ProductFilters />
		</div>, 
		document.querySelector("#filterbar")!
	): null
	
}

export default FilterSortWrapper;