import { useState, useEffect } from "react";

const usePortalMountCheck = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		return () => setIsMounted(false);
	}, [])

	return isMounted;
}

export default usePortalMountCheck;