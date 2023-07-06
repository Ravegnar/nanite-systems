import Typography from '@/components/Typography/Typography'
import Icon from '@/components/Icons/Icon'
import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react';

interface props {
  onClose: any
  textHeader?: string
  textBody?: string
}

export const Modal = (props: props) => { 
  let {
    onClose,
    textHeader,
    textBody,
  } = props

  const [isReady, setIsReady] = useState<boolean>(false);

  const modalRef: any = useRef(null)
  const headerRef: any = useRef(null)
  const bodyRef: any = useRef(null)

  let transitionClasses = "transition-all duration-75 ease-in-out"
  let arrayedTransitionClasses = transitionClasses.split(" ")
  let isClosing: boolean = false


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

      headerRef.current.classList.replace("bg-white", "bg-cyan-900")
      bodyRef.current.classList.replace("bg-white", "bg-cyan-700")

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
    let spaners: any = modalRef.current.querySelectorAll(".modalSpanner")
    let closeIcon: any = modalRef.current.querySelector("#closeIcon")
    let closeButton: any = modalRef.current.querySelector("#closeButton")

    if (e && e.target.id !== "modalOverlay" || !isReady || isClosing) {
      return
    }

    isClosing = true;

    [headerRef, bodyRef].map((ref: any) => {
      ref.current.classList.add(...arrayedTransitionClasses)
      ref.current.classList.replace("duration-75", "duration-300")
      ref.current.classList.replace("bg-opacity-75", "bg-opacity-0")
    })


    let closeGroup = [...texters, closeButton]

    closeGroup.forEach((e: any) => {
      e.classList.add(...arrayedTransitionClasses, "animate-blink")
    })

    setTimeout(() => {
      closeGroup.forEach((e: any) => {
        e.classList.add("hidden")
      })


      modalRef.current.classList.replace("w-full", "w-[60%]")
      spaners.forEach((e: any) => {
        e.classList.add(...arrayedTransitionClasses)
        e.classList.replace("duration-75", "duration-300")
        e.classList.replace("right-0", "right-[25%]")
        e.classList.replace("left-0", "left-[25%]")
      })

      modalRef.current.classList.add(...arrayedTransitionClasses, "animate-blink")
      closeIcon.classList.replace("hidden", "flex")
    }, 600);


    setTimeout(() => {
      closeIcon.classList.replace("flex", "hidden")
      
      spaners.forEach((e: any) => {
        e.classList.add("bg-white", "bg-opacity-70")
        e.classList.replace("h-full", "h-[10%]")
        e.classList.replace("top-0", "top-[50%]")
        e.classList.remove("border-y-4", "border-l-4", "border-r-4")
      })
    }, 1200);

    setTimeout(() => {
      onClose()
      isClosing = false;
    }, 1900);
  }


  return (
    <div
      id='modalOverlay'
      className="fixed flex top-0 w-screen h-screen z-50 bg-black bg-opacity-20"
      onClick={(e) => closeModal(e)}
    >
      <div ref={modalRef} className="relative w-full max-w-4xl flex flex-col items-center m-auto">
        {isReady &&
          <>
            <span className="modalSpanner absolute h-full w-[25%] top-0 left-0 border-y-4 border-l-4"/>
            <span className="modalSpanner absolute h-full w-[25%] top-0 right-0 border-y-4 border-r-4"/>
          </>
        }
        <div className="relative w-full h-48 flex p-4 pb-0 animate-blink">
          <div id="header" ref={headerRef} className={`bg-white bg-opacity-75 m-auto ${transitionClasses}`}>
            {isReady && <>
              <button id='closeButton' type="button" className='absolute top-6 right-6' onClick={(e) => closeModal(null)}>
                <Icon type="Close" size={30} className="text-white hover:scale-125" />
              </button>
              <div className="texter h-full flex justify-center items-center text-5xl uppercase p-4">
                {textHeader}
              </div>
            </>}
          </div>
        </div>
        <div className="relative w-full h-32 flex p-4 pt-0 animate-blink">
          <div id="body" ref={bodyRef} className={`bg-white bg-opacity-75 m-auto ${transitionClasses}`}>
            {isReady &&
              <div className="texter h-full flex justify-center items-center p-4">
                {textBody}
              </div>
            }
          </div>
        </div>
        <div id="closeIcon" className="hidden absolute h-full w-full justify-center items-center">
          <Icon type="CloseCircle" size={150} className="text-white animate-spin" />
        </div>
      </div>
    </div>
  )
}

export default Modal