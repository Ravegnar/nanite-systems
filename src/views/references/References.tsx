import { useTranslation } from 'react-i18next'
import Typography from '@/components/Typography/Typography'
import references from '@/lib/references'

const References = () => {
  const { t } = useTranslation()

  return (
    <div id="references" className="w-full text-center mx-auto pt-20">
      <Typography text={t('references.label')} className="" variant='h3' />
      <div id='title-line' className="w-28 h-1 bg-white mx-auto" />
      <div className="max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-3 gap-10">
          {references.map(reference => (
            <div key={reference.id} className="flex-col bg-black p-6">
              <Typography text={t(reference.text)} className="" variant='subtitle1' />
              <Typography text={t(reference.name)} className="mt-4" variant='h5' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default References