import Typography from '@/components/Typography/Typography'
import IconBook from '@/components/Icon/IconBook'
import { useTranslation } from 'react-i18next'
import IServicesCards from '@/types/ServicesCards@types'
import { useState, useRef, useEffect } from 'react';

interface props {
  onClose: any
  textHeader?: string
  textBody?: string
  showModal?: boolean
}

export const Modal = (props: props) => { 
  let {
    onClose,
    textHeader,
    textBody,
    showModal = true
  } = props

  //const [show, setShow] = useState<boolean>(showModal);
  const [isReady, setIsReady] = useState<boolean>(false);

  const modalRef: any = useRef(null)
  const headerRef: any = useRef(null)
  const bodyRef: any = useRef(null)

  let transitionClasses = "transition-all duration-75 ease-in-out"
  let arrayedTransitionClasses = transitionClasses.split(" ")


  const setElement = (element: any, types: string, values: string, timeout: number = 0) => {
    let typesData: string[] = types.split(",")
    let valuesData: string[] = values.split(",")

    setTimeout(() => {
      typesData.map((type: string, index) => {
        element.current.style[type] = valuesData[index]
      })
    }, timeout);
  }



  useEffect(() => {
    let blinkers = modalRef.current.querySelectorAll(".animate-blink")

    setElement(headerRef, "width,height", "0%,20%")
    setElement(bodyRef, "width,height", "0%,20%")

    setElement(headerRef, "width", "20%", 300)
    setElement(bodyRef, "width", "20%", 600)

    setElement(headerRef, "width", "80%", 700)
    setElement(bodyRef, "width", "80%", 1000)

    setElement(headerRef, "height", "40%", 900)
    setElement(bodyRef, "height", "40%", 1200)

    setTimeout(() => {
      [headerRef, bodyRef].map((ref: any) => {
        ref.current.classList.remove(...arrayedTransitionClasses)
        ref.current.classList.add("hidden")
      })
      
      setElement(headerRef, "width,height", "100%,100%")
      setElement(bodyRef, "width,height", "100%,100%")
    }, 1400);

    setTimeout(() => {
      [headerRef,bodyRef].map((ref: any) => {
        ref.current.classList.remove("hidden")
      })
      setIsReady(!isReady)
    }, 1500);


    setTimeout(() => {
      blinkers.forEach((e: any) => {
        e.classList.add(...arrayedTransitionClasses)
        e.classList.replace("duration-75", "duration-3000")
        e.classList.remove("animate-blink")
      })
    }, 2100);
  }, [bodyRef]);


  const closeModal = (e: any) => {
    let texters: any = modalRef.current.querySelectorAll(".texter")
    
    if (e.target.id !== "modal-overlay" || !isReady) {
      return
    }

   // console.log(texters)

    [headerRef, bodyRef].map((ref: any) => {
      ref.current.classList.add(...arrayedTransitionClasses)
      ref.current.classList.replace("duration-75", "duration-3000")
      ref.current.classList.replace("bg-opacity-75", "bg-opacity-0")
    })

    texters.forEach((e: any) => {
      e.classList.add(...arrayedTransitionClasses, "animate-blink")
    })

    setTimeout(() => {
      onClose()
    }, 1000);
  }

  return (
    <div
      id='modal-overlay'
      className="fixed flex top-0 w-screen h-screen z-50"
      onClick={(e) => closeModal(e)}
    >
      <div ref={modalRef} className="relative w-full max-w-4xl flex flex-col items-center m-auto">
        <div className="relative w-full h-48 flex p-4 pb-0 animate-blink">
          {isReady &&
            <>
              <span className="absolute h-full w-[30%] top-0 left-0 border-t-4 border-l-4"/>
              <span className="absolute h-full w-[30%] top-0 right-0 border-t-4 border-r-4"/>
            </>
          }
          <div id="header" ref={headerRef} className={`bg-cyan-900 bg-opacity-75 m-auto ${transitionClasses}`}>
            {isReady &&
              <div className="texter h-full flex justify-center items-center text-5xl uppercase p-4">
                {textHeader}
              </div>
          }
          </div>
        </div>
        <div className="relative w-full h-32 flex p-4 pt-0 animate-blink">
          {isReady &&
            <>
              <span className="absolute h-full w-[30%] top-0 left-0 border-b-4 border-l-4"/>
              <span className="absolute h-full w-[30%] top-0 right-0 border-b-4 border-r-4"/>
            </>
          }
          <div id="body" ref={bodyRef} className={`bg-cyan-700 bg-opacity-75 m-auto ${transitionClasses}`}>
            {isReady &&
              <div className="texter h-full flex justify-center items-center p-4">
                {textBody}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal