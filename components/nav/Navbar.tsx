import { createPortal } from "react-dom";
import Image from "next/image";
import NavItem from "./Navitem";
import PerseusIcon from "../../public/img/logo/perseus-icon.webp";
import PerseusFullLogo from "../../public/img/logo/text-logo.webp";
import Link from "next/link";
import useMountCheck from "../../lib/useMountCheck";

const Navbar = () => {

	const isMounted = useMountCheck();

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
							aria-hidden="true"
							placeholder="blur"
							sizes="11vw"
							/>
					</div>
				</Link>
				<Link href="/" passHref>
					<div className="wrapper-logo">
						<Image 
							src={PerseusFullLogo} 
							layout="fill"
							objectFit="contain"
							alt="Perseus"
							sizes="25vw"
							priority
							/>
					</div>
				</Link>
				<span className="cart-icon" title="Your Cart">
					<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalMallIcon" className="accent">
						<path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zm0 10c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5z"></path>
					</svg>
				</span>
			</div>
			<ul>
				<NavItem display="Home" href="/" />
				<NavItem display="Shop" href="/products/all" />
				<NavItem display="Contact" href="/contact"/>
				<NavItem display="About" href="/about"/>
			</ul>
		</nav>,
		document.getElementById("nav-portal")!
	) : null
}

export default Navbar;