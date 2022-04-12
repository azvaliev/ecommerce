import { useEffect, useState } from "react";

const useMobileCheck = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
	
		const mobileCheck = () => {
			setIsMobile(window.innerWidth < 768 ? true : false);	
		}
		mobileCheck();
		
		window.addEventListener("resize", mobileCheck);

		return () => {
			window.removeEventListener("resize", mobileCheck);	
		}
	}, [])

	return isMobile
}
export default useMobileCheck;