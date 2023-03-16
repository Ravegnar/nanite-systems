import { useTranslation } from 'react-i18next'
import Typography from '@/components/Typography/Typography'
import IconBook from '@/components/Icon/IconBook'
import appConfig from '@/config/app.config'

import Icon from '@/components/Icons/Icon'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div id="footer" className="w-full -mt-10">
      <div className="max-w-7xl mx-auto">

        <div id='contact-titles' className="flex">
          <div className="max-w-4xl w-full flex">
            <Typography text={t('contacts.info')} className="" variant='h3' />
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <div className="flex max-w-4xl">
            <div className="w-1/2 flex flex-col">
              <p>Velké Hamry 615</p>
              <p>46845</p>
            </div>
            <div className="w-1/2 flex flex-col">
              
              <div className="flex mt-2">
                <a href={`tel:${appConfig.phone}`}>
                  <IconBook size={22} className="mr-2" />
                </a>
                <a href={`tel:${(appConfig.phone).replaceAll(" ","")}`}>
                  {appConfig.phone}
                </a>
              </div>

              <div className="flex mt-2">
                <a href={`mailto:${appConfig.email}`}>
                  <IconBook size={22} className="mr-2" />
                </a>
                <a href={`mailto:${appConfig.email}`}>
                  {appConfig.email}
                </a>
              </div>

              <div className="flex mt-2">
                <a
                  href={`https://www.${appConfig.web}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBook size={22} className="mr-2" />
                </a>
                <a
                  href={`https://www.${appConfig.web}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {appConfig.web}
                </a>
              </div>

            </div>
          </div>
          <Typography text={"Follow us"} className="text-center mt-8" variant='h3' />
          <div className="flex mx-auto mt-6">
            <IconBook size={20} className={"mx-2"} />
            <IconBook size={20} className={"mx-2"} />
            <IconBook size={20} className={"mx-2"} />
            <IconBook size={20} className={"mx-2"} />
            <IconBook size={20} className={"mx-2"} />
          </div>
        </div>
        <div className="text-center border-t border-slate-700 py-5 mt-6">
          <Typography text={"Copyright ©2023 Design by Lukas Navratil"} variant='subtitle1' />

          <Icon
            type="Book"
            size={50}
          />
          <Icon
            type="Book"
            size={50}
          />

        </div>
      </div>
    </div>
  )
}

export default Footer