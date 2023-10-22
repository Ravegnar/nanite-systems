import { useContext, useEffect, useRef, useState } from "react";
import { setElement } from "@/utils/setElement";
import { AppContext } from "@/providers/app.provider";
import Icon from "@/components/Icons/Icon";

let scrollPos = 0;
let isScrolling = false;

export const Scroller = () => {
  const { getTheme, setTheme } = useContext(AppContext);
  const [isDragging, setIsDragging] = useState(false);
  const canvas: any = useRef(null);
  const spot: any = useRef(null);
  const scrollerWidth = 22;
  const scrollerHeight = window.innerHeight;
  const scrollerMid = scrollerHeight / 2;
  const scrollerOffsetY = 80;
  const scrollerLeft = 2;
  const scrollerRight = scrollerWidth - 2;
  const lineOffsetY =
    (scrollerMid - (scrollerOffsetY + scrollerWidth * 2 + scrollerWidth)) / 3.5;
  const spotSize = 28;
  const spotTop =
    10 + scrollerOffsetY + scrollerWidth * 2 + scrollerWidth - spotSize / 2;
  const spotBottom =
    -10 +
    scrollerHeight -
    scrollerOffsetY -
    scrollerWidth * 2 -
    scrollerWidth -
    spotSize / 2;
  const spotP = (spotBottom - spotTop) / 100;

  let scrollMaxHeight: number = document.body.scrollHeight - window.innerHeight;
  const color = getTheme === "dark" ? "249 115 22" : "8 145 178";
  const colorBG = getTheme === "dark" ? "194 65 12" : "22 78 99";
  const colorBorder = getTheme === "dark" ? "249 115 22" : "255 255 255";

  const handleMouseMove = (e: any) => {
    e.preventDefault();

    if (isDragging) {
      let spotPos =
        (spot.current.getBoundingClientRect().y - spotTop + 5.79) / spotP;
      let scrollTo = (scrollMaxHeight / 100) * spotPos;
      let mousePos = e.clientY - spotSize / 2;

      mousePos =
        mousePos <= spotTop
          ? spotTop
          : mousePos >= spotBottom
          ? spotBottom
          : mousePos;

      spot.current.style.top = mousePos + "px";
      window.scrollTo({ top: scrollTo, left: 0, behavior: "auto" });
      isScrolling = true;
    }
  };

  const handleMouseUp = (e: any) => {
    e.preventDefault();
    setIsDragging(false);
  };

  useEffect(() => {
    if (!canvas.current) {
      return;
    }
    scrollMaxHeight = document.body.scrollHeight - window.innerHeight;

    const ctx = canvas.current.getContext("2d");

    window.devicePixelRatio = 2;
    const scale = window.devicePixelRatio;

    canvas.current.style.width = scrollerWidth + 10 + "px";
    canvas.current.style.height = scrollerHeight + "px";

    canvas.current.width = Math.floor((scrollerWidth + 10) * scale);
    canvas.current.height = Math.floor(scrollerHeight * scale);
    ctx.scale(scale, scale);

    //CSS pixels for coordinate systems
    // Start a new Path
    ctx.beginPath();
    ctx.moveTo(scrollerRight + 12, scrollerOffsetY - 14);
    ctx.lineTo(scrollerRight - 1.25, scrollerOffsetY);
    ctx.lineTo(scrollerRight - 1.25, scrollerOffsetY + 8);
    ctx.lineTo(scrollerRight + 12, scrollerOffsetY - 14 + 8);
    // Draw the Path
    ctx.fillStyle = `rgb(${colorBorder})`;
    ctx.fill();
    ctx.closePath();

    ctx.lineWidth = 2.5;
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
    ctx.lineTo(scrollerRight + 12, scrollerHeight - scrollerOffsetY + 14);

    // Draw the Path
    ctx.strokeStyle = `rgb(${colorBorder})`;
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
    ctx.moveTo(scrollerRight + 12, scrollerHeight - scrollerOffsetY + 14);
    ctx.lineTo(scrollerRight - 1.25, scrollerHeight - scrollerOffsetY);
    ctx.lineTo(scrollerRight - 1.25, scrollerHeight - scrollerOffsetY - 8);
    ctx.lineTo(scrollerRight + 12, scrollerHeight - scrollerOffsetY + 14 - 6);

    ctx.fillStyle = `rgb(${colorBorder})`;
    ctx.fill();
    ctx.closePath();


    // Start a new Path
    ctx.beginPath();
    ctx.moveTo(scrollerRight + 12, scrollerOffsetY + scrollerWidth * 2 - 2.5);
    ctx.lineTo(
      scrollerLeft + 8,
      scrollerOffsetY + scrollerWidth * 2 + scrollerWidth + 2
    );
    ctx.lineTo(scrollerLeft + 8, scrollerMid + 4 - scrollerWidth - 2);
    ctx.lineTo(scrollerRight + 6, scrollerMid);
    ctx.lineTo(scrollerLeft + 8, scrollerMid - 4 + scrollerWidth + 2);
    ctx.lineTo(
      scrollerLeft + 8,
      scrollerHeight - scrollerOffsetY - scrollerWidth * 2 - scrollerWidth - 2
    );
    ctx.lineTo(
      scrollerRight + 12,
      scrollerHeight - scrollerOffsetY - scrollerWidth * 2 + 2.5
    );

    // Draw the Path
    ctx.fillStyle = `rgb(${colorBG}/ 0.4)`;
    ctx.fill();
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

        if (
          (i === 0 && index === 9) ||
          (i === 3 && index === 0) ||
          (i === 6 && index === 0)
        ) {
          for (let indexMid = 0; indexMid < 2; indexMid++) {
            ctx.moveTo(
              scrollerLeft + 8,
              scrollerMid -
                lineOffsetY * 2.5 +
                2 * lineOffsetY +
                (lineOffsetY / 9) * (indexMid + (i === 0 ? 1 : 7))
            );
            ctx.lineTo(
              scrollerRight - 6,
              scrollerMid -
                lineOffsetY * 2.5 +
                2 * lineOffsetY +
                (lineOffsetY / 9) * (indexMid + (i === 0 ? 1 : 7))
            );
          }
        } else {
          linePosY =
            i === 3
              ? scrollerMid - lineOffsetY * 2.5 + 6 * lineOffsetY
              : linePosY;

          ctx.moveTo(scrollerLeft + 8, linePosY - (lineOffsetY / 9) * index);
          ctx.lineTo(scrollerRight - 6, linePosY - (lineOffsetY / 9) * index);
        }

        // Draw the Path
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.closePath();
      }
    }
  }, [getTheme]);

  useEffect(() => {
    spot.current.style.top =
      spotP * (scrollPos >= 100 ? 100 : scrollPos) + spotTop + "px";

    window.addEventListener("scroll", () => {
      if (!isScrolling) {
        scrollPos = (window.scrollY / scrollMaxHeight) * 100;
        spot.current.style.top =
          spotP * (scrollPos >= 100 ? 100 : scrollPos) + spotTop + "px";
      }
    });
  }, [scrollPos]);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      (isScrolling = false),
        window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <>
      <canvas
        ref={canvas}
        width={scrollerWidth + 10 + "px"}
        height={scrollerHeight + "px"}
        className={`fixed inline-block h-full mr-3X right-0 z-30`}
      ></canvas>
      <span
        ref={spot}
        className="fixed inline-block -right-[12px] z-30 rotate-45"
        onMouseDown={() => setIsDragging(true)}
      >
        <Icon
          type="MdiSetSquare"
          size={spotSize}
          className="text-white dark:text-orange-500 cursor-pointer hover:scale-110"
        />
      </span>
    </>
  );
};

export default Scroller;
