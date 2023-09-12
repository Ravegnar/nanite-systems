import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';

interface IButtonLinkProps {
  name: string
  index?: number
  onClick?: any
  linerPosition?: any
}

const Button = ({
  name,
  index = 1,
  linerPosition
}: IButtonLinkProps) => {
  const [start, setStart] = useState<boolean>(false);

  const buttonRef: any = useRef(null)
  const linkRef: any = useRef(null)


  const setElement = (element: any, types: string, values: string, timeout: number = 0) => {
    let typesData: string[] = types.split(",")
    let valuesData: string[] = values.split(",")

    if (element.current) {
      element = element.current
    }

      setTimeout(() => {
      typesData.map((type: string, index) => {
        element.style[type] = valuesData[index]
      })
    }, timeout);
  }


  setTimeout(() => {
    setStart(true)
  }, 200 * index);


  
  useEffect(() => {
    if (!start) {
      return
    }

    if (index === 0) {
      linkRef.current.click()
    }
    
    setTimeout(() => {
      buttonRef.current.classList.replace("bg-opacity-40", "bg-opacity-0")
      buttonRef.current.classList.replace("bg-white", "bg-cyan-900")
    }, 600);

    setTimeout(() => {
      buttonRef.current.classList.replace("bg-opacity-0", "bg-opacity-60")
      buttonRef.current.classList.remove("text-transparent")
    }, 700);

    setTimeout(() => {
      buttonRef.current.classList.add("text-transparent")
    }, 900);

    setTimeout(() => {
      buttonRef.current.classList.remove("text-transparent")
    }, 1100);

    setTimeout(() => {
      buttonRef.current.classList.add("text-transparent")
    }, 1300);

    setTimeout(() => {
      buttonRef.current.classList.remove("text-transparent")
    }, 1500);
  }, [start]);

  return <>
    <Link
      className={`min-w-[140px] flex justify-center items-center`}
      href={''} scroll={false}
      target={''}
      ref={linkRef}
      onClick={linerPosition}
    >
      {start && <>
        <div
          id='XXXshadowCss'
          ref={buttonRef}
          className="bg-white bg-opacity-40 border-b-4 mx-[2px] text-transparent -skew-x-[45deg] transition-all duration-75 ease-linear animate-blinkX2"
        >
          <div className="skew-x-[45deg] px-4 py-1">
            {name}
          </div>
        </div>
      </>}
    </Link>
  </>
}

export default Button