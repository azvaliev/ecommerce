import Link from "next/link";

interface Props {
	display: string;
	href: string;
}

const NavItem = ({display, href}: Props) => {
	return (
		<Link href={href} passHref>
			<li>
				{display}
			</li>
		</Link>
	)
}

export default NavItem;