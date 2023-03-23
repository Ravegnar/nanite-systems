import Typography from '@/components/Typography/Typography'
import IconBook from '@/components/Icon/IconBook'
import { useTranslation } from 'react-i18next'
import IServicesCards from '@/types/ServicesCards@types'

interface CardIcon {
  [key: string]: JSX.Element
  fire: JSX.Element
  water: JSX.Element
  sunSnowflake: JSX.Element
}

export const Card = (props: IServicesCards) => {
  const { id, name, icon, text } = props

  const { t } = useTranslation()

  const iconClasses = ''

  const cardIcon: CardIcon = {
    fire: <IconBook size={20} className={iconClasses} type={'Book'} />,
    water: <IconBook size={20} className={iconClasses} type={'Book'} />,
    sunSnowflake: <IconBook size={20} className={iconClasses} type={'Book'} />,
  }

  return (
    <div className="flex flex-col items-center bg-slate-900 px-6 py-12">
      <div className="icon">
        {cardIcon[icon]}
      </div>
      <div className="mt-5">
          <Typography
            text={t(name)}
            className="uppercase"
            variant="h5"
          />
        </div>
      <div className="mt-5">
          <Typography
            text={t(text)}
            className="uppercase"
            variant="subtitle2"
          />
      </div>
    </div>
  )
}

export default Card