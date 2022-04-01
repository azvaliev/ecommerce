import { useState, useEffect } from "react";

// This custom hook just checks for mounting so React Portal can be succesfully initialized
const usePortalMountCheck = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		return () => setIsMounted(false);
	}, [])

	return isMounted;
}

export default usePortalMountCheck;