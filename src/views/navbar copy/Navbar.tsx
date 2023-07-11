import { useContext, useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AppContext } from '@/providers/app.provider'
import menuItems from '@/lib/menuItems'
import NavLink from '@/components/NavLink/NavLink'
import Button from '@/components/Button/Button'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import appConfig from '@/config/app.config'
import IMenuItems from '@/types/MenuItems@types'

const Navbar = () => {
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  const [selectedTab, setSelectedTab] = useState<IMenuItems | null>(null)
  //const { setSelectTab } = useContext(AppContext)
  const { t } = useTranslation()

  const liner: any = useRef()

  const linerPosition = (event: any, index: number) => {
    const left = event.currentTarget.getBoundingClientRect().left
    const width = event.currentTarget.getBoundingClientRect().width
    //const children = liner.querySelector("div")
    
   // console.log(children)
    liner.current.style.left = (left - 0) + 'px';
    liner.current.style.width = (width + 0) + 'px';

    return setSelectedTab(menuItems[index])
  }



// XXX toggle button
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="flex fixed top-0 w-full h-24 z-30 justify-around items-center text-center truncate">

      <div className="bg-logo w-10 h-10 bg-contain bg-no-repeat"/>
      <div className="my-auto">
        {appConfig.appName}
      </div>
      <div className={`flexitems-center grid grid-flow-col bg-zinc-600/25x`}>
        {menuItems.map((item, index) => {
          return (
              <Button
                key={item.key}
                name={t(item.name)}
                index={index}
                linerPosition={(event: any) => linerPosition(event, index)}
              />
          )
        })}
        <div
          id='liner'
          ref={liner}
          className="absolute h-[40px] mt-[2px] bg-cyan-600/30 px-4 py-1 border-x-8s border-b-[4px] border-cyan-600 skew-x-[-45deg] transition-all transform duration-300 ease-in"
        >
          <div className="text-cyan-500xxx text-transparent skew-x-[45deg]">
            {selectedTab && selectedTab.name && t(selectedTab.name)}
          </div>
        </div>
        <LanguageSwitcher />
      </div>

      <button id="toggle" onClick={() => toggleTheme()} className="bg-white dark:bg-slate-800 text-black dark:text-white py-2 px-4 rounded">
        Dark Mode
      </button>
 
    </nav>
  )
}

export default Navbar