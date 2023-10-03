import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Icon from "@/components/Icons/Icon";

const Title = ({
  text,
  direction = ["down", "right"],
  titleOffset = 40,
  children,
}: any) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const canvas: any = useRef(null);
  const titleBody: any = useRef(null);
  const titleText: any = useRef(null);

  const yDirection = direction[0]
  const xDirection = direction[1]
  const isRight = xDirection === "right"
  
  const setElement = (element: any, types: string, values: string, timeout: number = 0) => {
    let typesData: string[] = types.split(",")
    let valuesData: string[] = values.split(",")

    if (element.current) {
      element = element.current
    }

    setTimeout(() => {
      typesData.map((type: string, index) => {
        if (type.includes("opacity")) {
          console.log( element.classList)
          element.classList.replace(valuesData[0], valuesData[1])
          console.log( element.classList)
        } else {
          element.style[type] = valuesData[index]
        }
      })
    }, timeout);
  }

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    const ctx = canvas.current.getContext("2d");

    window.devicePixelRatio = 2;
    let scale = window.devicePixelRatio;

    canvas.current.style.width = titleOffset + "px";
    canvas.current.style.height = titleOffset + "px";

    canvas.current.width = Math.floor(titleOffset * scale);
    canvas.current.height = Math.floor(titleOffset * scale);
    ctx.scale(scale, scale);

    //CSS pixels for coordinate systems
    ctx.lineWidth = 2;
    // Start a new Path
    ctx.beginPath();
    ctx.moveTo((isRight ? 0 : titleOffset), 0);
    ctx.lineTo((isRight ? titleOffset : 0), titleOffset);

    // Draw the Path
    ctx.strokeStyle = "white";
    ctx.stroke();

    const titleWidth = titleText.current.getBoundingClientRect().width
    setElement(titleBody, "width", "0px")
    setElement(titleBody, "width", titleWidth +"px", 150)
  }, [showTooltip]);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block"
    >
      {children}
      {showTooltip && (
        <>
          <Icon
            type="ArrangeSendBackward"
            size={16}
            className={`absolute top-full ${isRight ? "left" : "[transform:rotateY(0.5turn)] right"}-full flex-nowrapXXX text-white `}
          />
          <canvas
            ref={canvas}
            width={titleOffset + "px"}
            height={titleOffset + "px"}
            className={`absolute inline-block w-auto -bottom-[13px] -${xDirection}-[13px] translate-y-full ${isRight ? "translate-x-full" : "-translate-x-full"} flex-nowrapXXX text-white`}
          ></canvas>
          <div
            ref={titleBody}
            style={{
              bottom: -(titleOffset - 28 + 13) + "px",
              right: isRight ? -(titleOffset - 1) + "px" : "none",
              left: xDirection === "left" ? -(titleOffset - 1) + "px" : "none",
            }}
            className={`absolute w-0 flex h-7 whitespace-nowrap bg-cyan-600/50 text-black translate-y-full ${isRight ? "translate-x-full" : "-translate-x-full"}
              skew-x-[${isRight ? "" : "-"}45deg] border-${isRight ? "l" : "r"}-[10px] border-b-[2px] border-white animate-blinkX2X transition-all transform duration-75 ease-in 
            `}
          >
            <div ref={titleText} className="flex items-center text-white animate-blinkV2 font-medium px-6" style={{ transform: `skewX(${isRight ? "-" : ""}45deg)` }}>
              {text}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Title;
