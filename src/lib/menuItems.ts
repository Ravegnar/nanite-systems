import IMenuItems from "@/types/MenuItems@types"

const menuItems: IMenuItems[] = [
	{
		key: "header",
		tabId: null,
		name: "nav.header",
		hashScroll: "header"
	},
	{
		key: "services",
		tabId: null,
		name: "nav.services",
		hashScroll: "services"
	},
	{
		key: "aboutUs",
		tabId: "aboutUs",
		name: "nav.aboutUs",
		hashScroll: "aboutUs"
	},
	{
		key: "references",
		tabId: "references",
		name: "nav.references",
		hashScroll: "references"
	},
	{
		key: "contacts",
		tabId: "contacts",
		name: "nav.contacts",
		hashScroll: "contacts"
	}
]

export default menuItems
