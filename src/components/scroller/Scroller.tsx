import { useContext, useEffect, useRef, useState } from "react";
import { setElement } from "@/utils/setElement";
import { AppContext } from "@/providers/app.provider";
import Icon from "@/components/Icons/Icon";

let scrollPos = 0;

export const Scroller = () => {
  const { getTheme, setTheme } = useContext(AppContext);
  const canvas: any = useRef(null);
  const spot: any = useRef(null);
  const spotSize = 28;
  const scrollerWidth = 22;
  const scrollerHeight = window.innerHeight;
  const scrollerMid = scrollerHeight / 2;
  const scrollerOffsetY = 60;
  const scrollerLeft = 1;
  const scrollerRight = scrollerWidth - 1;
  const lineOffsetY =
    (scrollerMid - (scrollerOffsetY + scrollerWidth * 2 + scrollerWidth)) / 3.5;

	let scrollMaxHeight: number;
  let color = getTheme === "dark" ? "249 115 22" : "8 145 178"

  useEffect(() => {
    if (!canvas.current) {
      return;
    }
		scrollMaxHeight = document.body.scrollHeight - window.innerHeight;

    const ctx = canvas.current.getContext("2d");

    window.devicePixelRatio = 2;
    const scale = window.devicePixelRatio;

    canvas.current.style.width = scrollerWidth + "px";
    canvas.current.style.height = scrollerHeight + "px";

    canvas.current.width = Math.floor(scrollerWidth * scale);
    canvas.current.height = Math.floor(scrollerHeight * scale);
    ctx.scale(scale, scale);

    //CSS pixels for coordinate systems
    ctx.lineWidth = 4;
    // Start a new Path
    ctx.beginPath();
    ctx.moveTo(scrollerRight, scrollerOffsetY);
    ctx.lineTo(scrollerRight, scrollerOffsetY + scrollerWidth * 2);
    ctx.lineTo(
      scrollerLeft,
      scrollerOffsetY + scrollerWidth * 2 + scrollerWidth
    );
    ctx.lineTo(scrollerLeft, scrollerMid + 4 - scrollerWidth);
    ctx.lineTo(scrollerRight - 4, scrollerMid);
    ctx.lineTo(scrollerLeft, scrollerMid - 4 + scrollerWidth);
    ctx.lineTo(
      scrollerLeft,
      scrollerHeight - scrollerOffsetY - scrollerWidth * 2 - scrollerWidth
    );
    ctx.lineTo(
      scrollerRight,
      scrollerHeight - scrollerOffsetY - scrollerWidth * 2
    );
    ctx.lineTo(scrollerRight, scrollerHeight - scrollerOffsetY);

    // Draw the Path
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.lineTo(scrollerLeft, scrollerMid - scrollerWidth + 12);
    ctx.lineTo(scrollerRight - 12, scrollerMid);
    ctx.lineTo(scrollerLeft, scrollerMid + scrollerWidth - 12);

    ctx.fillStyle = `rgb(${color})`;
    ctx.fill();
    ctx.closePath();

    for (let i = 0; i <= 6; i++) {
      let linePosY = scrollerMid - lineOffsetY * 2.5 + i * lineOffsetY;

			if (i < 6) {
				ctx.lineWidth = 3;
				ctx.beginPath();

				ctx.moveTo(scrollerLeft + 8, linePosY);
				ctx.lineTo(scrollerRight, linePosY);

				// Draw the Path
				ctx.strokeStyle = "white";
				ctx.stroke();
				ctx.closePath();
			}

      for (let index = 0; index <= 9; index++) {
        ctx.lineWidth = 2;
        ctx.beginPath();

        if ((i === 0 && index === 9) || (i === 3 && index === 0) || (i === 6 && index === 0)) {
					for (let indexMid = 0; indexMid < 2; indexMid++) {
						ctx.moveTo(scrollerLeft + 8, scrollerMid - lineOffsetY * 2.5 + 2 * lineOffsetY + (lineOffsetY / 9) * (indexMid + (i === 0 ? 1 : 7)));
						ctx.lineTo(scrollerRight - 8, scrollerMid - lineOffsetY * 2.5 + 2 * lineOffsetY + (lineOffsetY / 9) * (indexMid + (i === 0 ? 1 : 7)));
					}
        } else {
					linePosY =
						i === 3
							? scrollerMid - lineOffsetY * 2.5 + 6 * lineOffsetY
							: linePosY;

          ctx.moveTo(scrollerLeft + 8, linePosY - (lineOffsetY / 9) * index);
          ctx.lineTo(scrollerRight - 8, linePosY - (lineOffsetY / 9) * index);
        }

        // Draw the Path
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
      }
    }
  }, [getTheme]);

  useEffect(() => {
		const spotTop = 10 + scrollerOffsetY + scrollerWidth * 2 + scrollerWidth - spotSize / 2
		const spotBottom = -10 + scrollerHeight - scrollerOffsetY - scrollerWidth * 2 - scrollerWidth - spotSize / 2
		const spotP = (spotBottom - spotTop) / 100

		//spot.current.style.top = (spotP * (scrollPos >= 100 ? 100 : scrollPos)) + spotTop + "px"
		spot.current.style.top = scrollerMid - spotSize / 2 + "px"

    setTimeout(() => {
		  spot.current.style.top = scrollerMid - 30 + "px"
    }, 400);
    
    setTimeout(() => {
		  spot.current.style.top = scrollerMid + 45 + "px"
    }, 800);

    setTimeout(() => {
		  spot.current.style.top = spotTop + "px"
    }, 1400);
    window.addEventListener("scroll", () => {
      scrollPos = (window.scrollY / scrollMaxHeight) * 100;
			spot.current.style.top = (spotP * (scrollPos >= 100 ? 100 : scrollPos)) + spotTop + "px"
    });
  }, [scrollPos]);


  return (
    <>
      <canvas
        ref={canvas}
        width={scrollerWidth + "px"}
        height={scrollerHeight + "px"}
        className={`fixed inline-block h-full mr-3 right-0 z-30`}
      >
			</canvas>
			<span ref={spot} className="fixed inline-block -right-2 z-30 rotate-45 transition-all transform duration-1000 ease-in-out">
				<Icon
					type="MdiSetSquare"
					size={spotSize}
          className="text-white"
				/>
			</span>
    </>
  );
};

export default Scroller;
