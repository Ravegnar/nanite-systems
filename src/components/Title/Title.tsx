import Link from 'next/link'
import { useState, useRef, useEffect } from 'react';
import Icon from "@/components/Icons/Icon";

const Title = ({ text, children }: any) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const canvas: any = useRef(null);

  const titleOffset = 80

  useEffect(() => {
    console.log(canvas)
    if (!canvas.current) {
      return
    }
    const dpi = window.devicePixelRatio;
    const ctx = canvas.current.getContext("2d")
    //canvas.current.translate(0.5, 0.5);
    ctx.scale(dpi, dpi); 
    canvas.current.setAttribute("width", titleOffset + "px");
    canvas.current.setAttribute("height", titleOffset + "px");

    canvas.current.width=canvas.current.clientWidth
    canvas.current.height=canvas.current.clientHeight
    ctx.lineWidth = 4;
    // Start a new Path
    ctx.beginPath();
    ctx.moveTo(0.5, 0);
    ctx.lineTo(80.5, titleOffset);

    // Draw the Path
    ctx.strokeStyle = "white";
    ctx.stroke();

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
      className='relative inline-block'
    >
      {children}
      {showTooltip && (<>
        <Icon
          type="ArrangeSendBackward"
          size={16}
          className="absolute top-full left-full flex-nowrapXXX text-white"
        />
        <canvas
          ref={canvas}
          width="1px"
          height="1px"
          className="absolute inline-block w-auto -bottom-[18px] -right-[18px] translate-y-full translate-x-full flex-nowrapXXX text-white"
        ></canvas>
        <div
          className="absolute inline-block w-auto bg-black/25 -bottom-20 -right-20 translate-y-full translate-x-full flex-nowrapXXX text-white"
        >
          {text}
        </div>
      </>)}
    </div>
  );
};

export default Title