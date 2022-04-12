import { createPortal } from 'react-dom';
import usePortalMountCheck from '../../../lib/usePortalMountCheck';
import useMobileCheck from '../../../lib/useMobileCheck';
import ProductFilters from './ProductFilters';
import Sorting from './Sorting';
import useStateToggle from '../../../lib/useStateToggle';
import { useState } from 'react';

const FilterSortWrapper = () => {
	const isMounted = usePortalMountCheck();
	const isMobile = useMobileCheck();
	const [sortPageOpen, toggleSortPageOpen] = useStateToggle(false);
	const [closeAnimLoading, setCloseAnimLoading] = useState(false);

	const handleCloseAnim = () => {
		setCloseAnimLoading(true);
		setTimeout(() => {
			toggleSortPageOpen();
			setCloseAnimLoading(false);
		}, 600);
	}

	return isMounted
		? createPortal(
				<div
					id="wrapper-filter-sort"
					className={closeAnimLoading ? "fullscreen bar" : sortPageOpen && isMobile ? "fullscreen" : ""}
				>
					{!isMobile || sortPageOpen ? (
						<>
							{isMobile && (
								<svg
									focusable="false"
									aria-label="Close Sort / Filter Menu"
									viewBox="0 0 24 24"
									className="open accent"
									onClick={handleCloseAnim}
								>
									<path d="m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
								</svg>
							)}
							<ProductFilters />
							<Sorting />
						</>
					) : (
						<>
							<h4>Sort / Filter</h4>
							<svg
								focusable="false"
								aria-label="Open Sort and Filter page"
								viewBox="0 0 24 24"
								className="accent"
								onClick={toggleSortPageOpen}
							>
								<path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
							</svg>
						</>
					)}
				</div>,
				document.querySelector('#filterbar')!
		  )
		: null;
};

export default FilterSortWrapper;
