import Typography from '@/components/Typography/Typography'
import CountUp from 'react-countup';

interface ICountProps {
  number: number
  duration: number
  className?: string
  text?: string
  isVisiable?: boolean
  isPlus?: boolean
}

const Count = (props: ICountProps) => {
  // props
  const {
    number,
    duration,
    className,
    text,
    isVisiable = true,
    isPlus = false
  } = props

  return (<>
    <div className={`${className} col-span-2 flex flex-col text-center text-3xl laptop:text-4xl desktop:text-5xl text-white font-bold`}>
      {isVisiable && (
        <div className="flex justify-center font-orbitron">
          <CountUp
            end={number}
            duration={duration}
          />
          {isPlus && '+'}
        </div>
      )}
      <Typography
        text={text}
        className="text-white mt-3"
        variant="subtitle2"
        uppercase={true}
      />
    </div>
  </>)
}

export default Count
