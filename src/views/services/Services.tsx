import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import servicesCards from '@/lib/servicesCards'
import Typography from '@/components/Typography/Typography'
import Card from '@/components/Card/Card'
import Count from '@/components/Count/Count'

const Services = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const targetRef: any = useRef(null)

  const { t } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(targetRef.current)
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.5, // minimal percentage of the target's visible area before triggering the callback
      },
    )

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div id="services" className="w-full text-center mx-auto pt-20 relative XXX-mt-96">
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
      <div ref={targetRef} className="flex justify-center">
        <Count
          number={1010}
          duration={4}
          text={"Něco"}
          isPlus={true}
          isVisiable={isVisible}
        />
      </div>
    </div>
  )
}

export default Services