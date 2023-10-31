import { ReactNode } from "react"

interface IMenuItems {
	key: string
	name: string
	tabId: string | null
	link?: string
	hashScroll?: string
	icon?: ReactNode
	isSpecial?: boolean
}

export default IMenuItems
