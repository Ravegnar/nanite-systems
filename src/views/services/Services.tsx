import { useTranslation } from 'react-i18next'
import servicesCards from '@/lib/servicesCards'
import Typography from '@/components/Typography/Typography'
import Card from '@/components/Card/Card'

const Services = () => {
  const { t } = useTranslation()

  return (
    <div id="services" className="w-full text-center mx-auto pt-20">
      <Typography text={t('services.label')} className="" variant='h3' />
      <div id='title-line' className="w-28 h-1 bg-white mx-auto" />
      <div className="max-w-7xl mx-auto mt-10">
      <Typography text={t('services.text')} className="" variant='subtitle1' />
        <div className="grid grid-cols-3 gap-8 mt-10">
          {servicesCards.map(card => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              text={card.text}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services