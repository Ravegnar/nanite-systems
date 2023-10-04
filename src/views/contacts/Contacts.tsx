import { useTranslation } from 'react-i18next'
import Typography from '@/components/Typography/Typography'
import MabBox from '@/components/MabBox/MabBox'
import ContactForm from '@/components/ContactForm/ContactForm'

const Contacts = () => {
  const { t } = useTranslation()

  return (
    <div id="contacts" className="w-full text-center mx-auto pt-20">
      <Typography text={t('contacts.label')} className="" variant='h3' />
      <div id='title-line' className="w-28 h-1 bg-white mx-auto" />

      <div id='contact-section' className="rotate-180 mt-10">
        <div id='contact-mapBox' className="rotate-180 contrast-[1.3] border-y-[10px] border-black bg-cyan-500 dark:bg-orange-600 py-4 my-4">
          <MabBox />
        </div>
        <div id='contact-form' className="max-w-sm bg-black border-4 border-cyan-500 dark:border-orange-600 rotate-180">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contacts