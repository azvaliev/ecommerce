import { createPortal } from "react-dom";
import usePortalMountCheck from "../../lib/usePortalMountCheck";
import useMobileCheck from "../../lib/useMobileCheck";
import ProductFilters from "./ProductFilters";
import Sorting from "./Sorting";
import useStateToggle from "../../lib/useStateToggle";


const FilterSortWrapper = () => {
	const isMounted = usePortalMountCheck();
	const isMobile = useMobileCheck();
	const [sortPageOpen, toggleSortPageOpen] = useStateToggle(false);
	
	return isMounted ? createPortal(
		<div id="wrapper-filter-sort" className={sortPageOpen && isMobile ? "fullscreen" : ""}>
			{!isMobile || sortPageOpen ?
				<>
					<ProductFilters />
					<Sorting />
				</>
			:
				<>
					<h4>Sort / Filter</h4>
					<svg 
						focusable="false"
						aria-hidden="true"
						viewBox="0 0 24 24"
						fill="#ebe1b5"
						onClick={toggleSortPageOpen}
						>
						<path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
					</svg>
				</>
			}
		</div>, 
		document.querySelector("#filterbar")!
	): null
	
}

export default FilterSortWrapper;