import Link from "next/link";

interface Props {
	display: string;
	href: string;
}

const NavItem = ({ display, href }: Props) => {
	return (
		<Link href={href} passHref>
			<li id={display.toLowerCase()}>{display}</li>
		</Link>
	);
};

export default NavItem;
