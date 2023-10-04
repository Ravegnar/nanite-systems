import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Icon from "@/components/Icons/Icon";
import {setElement} from '@/utils/setElement'

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

  const yDirection = direction[0];
  const xDirection = direction[1];
  const isRight = xDirection === "right";

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
    ctx.moveTo(isRight ? 0 : titleOffset, 0);
    ctx.lineTo(isRight ? titleOffset : 0, titleOffset);

    // Draw the Path
    ctx.strokeStyle = "white";
    ctx.stroke();

    const titleWidth = titleText.current.getBoundingClientRect().width;
    setElement(titleBody, "width", "0px");
    setElement(titleBody, "width", titleWidth + "px", 150);
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
            className={`absolute top-full ${
              isRight ? "left-full" : "[transform:rotateY(0.5turn)] right-full"
            } flex-nowrapXXX text-white `}
          />
          <canvas
            ref={canvas}
            width={titleOffset + "px"}
            height={titleOffset + "px"}
            className={`absolute inline-block w-auto -bottom-[13px] ${
              isRight ? "-right-[13px]" : "-left-[13px]"
            } translate-y-full ${
              isRight ? "translate-x-full" : "-translate-x-full"
            } flex-nowrapXXX text-white transition-all transform duration-300 ease-in `}
          ></canvas>
          <div
            ref={titleBody}
            style={{
              bottom: -(titleOffset - 24 + 13) + "px",
              right: isRight ? -(titleOffset + 1) + "px" : "none",
              left: isRight ? "none" : -(titleOffset + 1) + "px",
            }}
            className={`absolute w-0 flex h-6 whitespace-nowrap bg-cyan-600/50 text-black translate-y-full ${
              isRight ? "translate-x-full" : "-translate-x-full"
            }
              ${isRight ? "skew-x-[45deg]" : "skew-x-[-45deg]"} ${
              isRight ? "border-l-[10px]" : "border-r-[10px]"
            } border-b-[2px] border-white animate-blinkX2X transition-all transform duration-75 ease-in 
            `}
          >
            <div
              ref={titleText}
              className="flex items-center text-white text-sm animate-blinkV2 font-medium px-6"
              style={{ transform: `skewX(${isRight ? "-" : ""}45deg)` }}
            >
              {text}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Title;
