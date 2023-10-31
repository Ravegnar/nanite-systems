import { ReactNode } from "react"

interface ICallUsTabs {
	id: string
	name: string
	link?: string
	hashScroll?: string
	icon?: ReactNode
	isSpecial?: boolean
}

export default ICallUsTabs
