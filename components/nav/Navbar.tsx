import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Image from "next/image";
import NavItem from "./Navitem";
import PerseusIcon from "../../public/img/logo/perseus-icon.webp";
import Link from "next/link";

const Navbar = () => {

	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);

		return () => setIsMounted(false);
	}, [])


	return isMounted ? createPortal(
		<nav>
			<div className="wrapper-icon-logo">
				<Link href="/" passHref>
					<div className="wrapper-icon">
						<Image 
							src={PerseusIcon}
							layout="fill"
							objectFit="contain"
							alt="Roman with scythe"
							placeholder="blur"
							/>
					</div>
				</Link>
				<Link href="/" passHref>
					<div className="wrapper-logo">
						<Image 
							src="/img/logo/text-logo.webp" 
							layout="fill"
							objectFit="contain"
							alt="Perseus"
							priority
							/>
					</div>
				</Link>
			</div>
			<ul>
				<NavItem display="Home" href="/" />
				<NavItem display="Shop" href="/products/all" />
				<NavItem display="Contact" href="/contact"/>
				<NavItem display="About" href="/about"/>
			</ul>
		</nav>,
		document.getElementById("portal")!
	) : null
}

export default Navbar;