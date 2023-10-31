import Link from "next/link"

interface IButtonLinkProps {
	key?: string
	name: string
	link?: string
	hashScroll?: string
	blank?: boolean
	isSpecial?: boolean
	onClick?: any
	linerPosition?: any
}

const NavLink = ({ name, link, hashScroll, blank, isSpecial, linerPosition }: IButtonLinkProps) => (
	<Link
		id="XXX"
		className={`
      ${isSpecial ? "bg-white text-black p-3.5 rounded-lg" : ""}
     hover:text-orange-600 text-sm font-bold mr-5 laptop:mr-7 uppercase text-center px-2 drop-shadow-2xl`}
		href={link || `#${hashScroll}` || ""}
		scroll={false}
		target={blank ? "_blank" : ""}
		onClick={linerPosition}
	>
		{name}
	</Link>
)

export default NavLink
