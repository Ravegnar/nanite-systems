import { createContext, ReactNode, useState } from "react"
import { useTranslation } from "react-i18next"
import { loadFromStorage } from "@/utils/stores.utils"
import { localStorages } from "@/lib/localStorages"

import { callUsTabs } from "@/lib/callUsTabs"

export const AppContext = createContext<Context>(null as any)

type Context = {
	setLanguage: (lang: string) => void
	getLanguage: string | null
	setSelectTab: (tabId: string | null) => void
	getSelectTab: string
	setTheme: (theme: string) => void
	getTheme: string
}

const AppProvider = (props: any) => {
	// Props
	const { children } = props

	// States
	const [selectedTab, setSelectedTab] = useState<string>(callUsTabs[0].id)
	const [theme, setTheme] = useState(
		window.matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark"
	)

	// Hooks
	const { i18n } = useTranslation()

	// Language
	const getLanguage = loadFromStorage(localStorages.i18n)

	const setLanguage = (lang: string) => {
		i18n.changeLanguage(lang)
	}

	// SELECT TAB
	const getSelectTab = selectedTab

	const setSelectTab = (tabId: string | null) => {
		if (tabId === null) return
		setSelectedTab(tabId)
	}

	const getTheme = theme

	return (
		<AppContext.Provider
			value={{
				getLanguage,
				setLanguage,
				getSelectTab,
				setSelectTab,
				getTheme,
				setTheme
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export default AppProvider
