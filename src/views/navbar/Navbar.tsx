import { useContext, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { AppContext } from '@/providers/app.provider'
import menuItems from '@/lib/menuItems'
import NavLink from '@/components/NavLink/NavLink'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import appConfig from '@/config/app.config'

const Navbar = () => {
  const { setSelectTab } = useContext(AppContext)
  const { t } = useTranslation()

  const liner: any = useRef();

  const linerPosition = (event: any) => {
    const left = event.currentTarget.getBoundingClientRect().left
    const width = event.currentTarget.getBoundingClientRect().width
    liner.current.style.left = (left - 8) + 'px';
    liner.current.style.width = (width + 16) + 'px';
  }

  return (
    <nav className="flex fixed top-0 w-full h-24 z-30 justify-around items-center text-center truncate">
      <div className="bg-logo w-10 h-10 bg-contain bg-no-repeat"></div>
      <div className="my-auto">
        {appConfig.appName}
      </div>
      <div className='flex items-center bg-zinc-600/25'>
        {menuItems.map(item => {
          return (
            <NavLink
              hashScroll={item.hashScroll}
              key={item.key}
              name={t(item.name)}
              linerPosition={(event: any) => linerPosition(event)}
            />
          )
        })}
        <div
          id='liner'
          ref={liner}
          className="absolute w-20 h-[6px] top-[65%] bg-white skew-x-[-50deg] transition-all transform duration-300 ease-in"
        />
        <LanguageSwitcher />
      </div>
    </nav>
  )
}

export default Navbar