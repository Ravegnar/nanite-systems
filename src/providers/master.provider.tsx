import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '../services/i18n'
// Providers
import AppProvider from './app.provider'

type MasterProviderProps = {
  children: ReactNode
}

const MasterProvider = (props: MasterProviderProps) => {
  const { children } = props

  return (
    <AppProvider>
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
    </AppProvider>
  )
}

export default MasterProvider
