import Typography from '@/components/Typography/Typography'
import CountUp from 'react-countup';

interface ICountProps {
  end: number
  duration: number
  start?: number
  className?: string
  text?: string
  isVisiable?: boolean
  isPlus?: boolean
}

const Count = (props: ICountProps) => {
  // props
  const {
    end,
    duration,
    start = 0,
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
            start={start}
            end={end}
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
