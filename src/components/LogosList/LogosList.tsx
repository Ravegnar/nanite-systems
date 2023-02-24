import ILogos from '@/types/Logos@types'

const LogosList = (props: ILogos) => {
  const { background } = props

  return (
    <div
      className="w-36 h-20 cursor-pointer bg-contain bg-center bg-no-repeat grayscale hover:grayscale-0 mx-auto"
      style={{ backgroundImage: background }}
    />
  )
}

export default LogosList
