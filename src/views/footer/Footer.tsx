import { useTranslation } from 'react-i18next'
import Typography from '@/components/Typography/Typography'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div id="footer" className="w-full">
      <div className="max-w-7xl mx-auto">
        <p>adresa</p>
        <p>tel</p>
        <p>mail</p>
        <p>follow</p>
        <div className="text-center py-3 mt-8 border-t">
          <Typography text={"Copyright ©2023 Design by Lukus Navratil"} variant='subtitle1' />
        </div>
      </div>
    </div>
  )
}

export default Footer