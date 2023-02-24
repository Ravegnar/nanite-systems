import { languages } from '@/lib/languages'
import { AppContext } from '@/providers/app.provider'
import { useContext } from 'react'

interface ILanguageSwitcherProps {
  styles?: string
}

const LanguageSwitcher = ({ styles }: ILanguageSwitcherProps) => {
  // context
  const { getLanguage, setLanguage } = useContext(AppContext)

  const handleChangeLanguage = () => {
    if (getLanguage === null || getLanguage === languages.cs) {
      setLanguage(languages.en)
    } else {
      setLanguage(languages.cs)
    }
  }

  return (
    <div className="flex items-center ml-auto">
      <button
        className={`
        flex items-center
        transition-all
        delay-75
        text-gray-200
        hover:text-white
        p-2
        ${styles}
        `}
        onClick={handleChangeLanguage}
      >
        <span className="ml-2 ">
          {getLanguage === languages.en ? 'czech' : 'english'}
        </span>
      </button>
    </div>
  )
}

export default LanguageSwitcher
