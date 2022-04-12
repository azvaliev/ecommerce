import { createPortal } from "react-dom";
import type { ProductArray } from "../../components/ProductTypes";
import useFetch from "../../lib/useFetch";
import useMountCheck from "../../lib/useMountCheck";

const ProductData = () => {
	const {res, isLoading} = useFetch<ProductArray>("/api/products", "json");
	const isMounted = useMountCheck();

	return isMounted ? createPortal(
		<div id="data">
			{isLoading ? 
				<div>Data loading...</div>
			:
				<pre className="json">{JSON.stringify(res, null, 2)}</pre>}
		</div>,
		document.getElementById("data-portal")!
	): null

}

export default ProductData;