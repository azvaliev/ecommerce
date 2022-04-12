import { useState, useEffect } from "react";

// This custom hook just checks for mounting so React Portal can be succesfully initialized
// Without, this hook I was encountering error 'document is not defined'
const useMountCheck = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		return () => setIsMounted(false);
	}, [])

	return isMounted;
}

export default useMountCheck;