import { useTranslation } from 'react-i18next'
import Typography from '@/components/Typography/Typography'
import aboutUsData from '@/lib/aboutUsData'

const AboutUs = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full max-w-7xl text-center mx-auto pt-20">
      <Typography text={t('aboutUs.label')} className="" variant='h3' />
      <div id='title-line' className="w-28 h-1 bg-white mx-auto" />
      <div className="w-full grid grid-cols-2 mx-auto mt-10">
        <div className="h-[460px] bg-aboutUs bg-cover bg-center">
          asdad
        </div>
        <div className="w-full bg-slate-900">
          <div className="max-w-[640px] text-start pl-12 pr-6 py-8">
            <Typography text={t('aboutUs.title')} className="" variant='h3' />
            <Typography text={t('aboutUs.text')} className="mt-3" variant='subtitle1' />

            {aboutUsData.map(data => (
              <div key={data.id} className="flex flex-col mt-2">
                <Typography text={t(data.name)} className="" variant='h5' />
                <Typography text={t(data.text)} className="" variant='subtitle1' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs