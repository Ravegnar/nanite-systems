import Link from "next/link";
import { AppContext } from "@/providers/app.provider";
import { useContext, useState, useRef, useEffect } from "react";
import Icon from "@/components/Icons/Icon";
import IconTypes from "@/types/Icon@types";

interface IButtonLinkProps {
  name: string;
  subText?: string;
  classses?: string;
  chevron?: boolean;
  index?: number | null;
  icon?: IconTypes["type"];
  revert?: boolean;
  center?: boolean;
  size?: string;
  onClick?: any;
}

const StyledButton = ({
  name,
  subText,
  classses,
  chevron = true,
  index = null,
  icon,
  revert = false,
  center = false,
  size = "normal",
  onClick,
}: IButtonLinkProps) => {
  const { getTheme, setTheme } = useContext(AppContext);

  const canvas: any = useRef(null);
  const buttonRef: any = useRef(null);

  const color = getTheme === "dark" ? "249 115 22" : "255 255 255";
  const colorBG = getTheme === "dark" ? "194 65 12" : "22 78 99";

  const iconSize = 24;
  const lineWidth = 2;
  const separatorWidth = "w-[2px]";
  const separatorHeight = "h-[24px]";

  useEffect(() => {
    if (!canvas.current) {
      return;
    }

    const buttonWidth = buttonRef.current.getBoundingClientRect().width;
    const buttonHeight = buttonRef.current.getBoundingClientRect().height;

    const lineOffset = lineWidth / 2;
    const left = 0 + lineOffset;
    const right = buttonWidth - lineOffset * 1.5;
    const top = 0 + lineOffset * 0.5;
    const bottom = buttonHeight - lineOffset * 0.25;
    const corner = buttonHeight * 0.22;
    const borderHeight = buttonHeight * 0.1;
    const borderWidth = buttonWidth * 0.3;
    const offsetedTop = top + borderHeight;
    const offsetedBottom = bottom - borderHeight;
    const backgroundOffset = 6;

    const ctx = canvas.current.getContext("2d");

    window.devicePixelRatio = 2;
    let scale = window.devicePixelRatio;

    canvas.current.style.width = buttonWidth + "px";
    canvas.current.style.height = buttonHeight + "px";
    canvas.current.width = Math.floor(buttonWidth * scale);
    canvas.current.height = Math.floor(buttonHeight * scale);

    ctx.scale(scale, scale);

    // Border
    //CSS pixels for coordinate systems
    ctx.lineWidth = lineWidth;
    // Start a new Path
    ctx.beginPath();
    ctx.moveTo(right, offsetedTop);
    ctx.lineTo(right, offsetedBottom - corner);
    ctx.lineTo(right - corner, offsetedBottom);
    ctx.lineTo(left, offsetedBottom);
    ctx.lineTo(left, offsetedTop + corner);
    ctx.lineTo(left + corner, offsetedTop);
    ctx.lineTo(right + lineOffset, offsetedTop);
    // Draw the Path
    ctx.strokeStyle = `rgb(${color})`;
    ctx.stroke();

    // Right corner
    // Start a new Path
    ctx.beginPath();
    ctx.moveTo(right + lineOffset, top);
    ctx.lineTo(right - borderWidth * 0.26, top);
    ctx.lineTo(right - borderWidth * 0.26, top + borderHeight * 0.34);
    ctx.lineTo(right - borderWidth * 0.48, top + borderHeight * 0.34);
    ctx.lineTo(right - borderWidth * 0.48, top);
    ctx.lineTo(right - borderWidth, top);
    ctx.lineTo(right - borderWidth - borderHeight * 1.5, offsetedTop);
    ctx.lineTo(right + lineOffset, offsetedTop);
    // Draw the Path
    ctx.fillStyle = `rgb(${color})`;
    ctx.fill();
    ctx.closePath();

    // Left corner
    // Start a new Path
    ctx.beginPath();
    ctx.moveTo(left - lineOffset, bottom);
    ctx.lineTo(left + borderWidth * 0.26, bottom);
    ctx.lineTo(left + borderWidth * 0.26, bottom - borderHeight * 0.34);
    ctx.lineTo(left + borderWidth * 0.48, bottom - borderHeight * 0.34);
    ctx.lineTo(left + borderWidth * 0.48, bottom);
    ctx.lineTo(left + borderWidth, bottom);
    ctx.lineTo(left + borderWidth + borderHeight * 1.5, offsetedBottom);
    ctx.lineTo(left - lineOffset, offsetedBottom);
    // Draw the Path
    ctx.fillStyle = `rgb(${color})`;
    ctx.fill();
    ctx.closePath();

    // Background
    // Start a new Path
    ctx.beginPath();
    ctx.moveTo(right - backgroundOffset, offsetedTop + backgroundOffset);
    ctx.lineTo(
      right - backgroundOffset,
      offsetedBottom - corner - backgroundOffset / 2
    );
    ctx.lineTo(
      right - backgroundOffset / 2 - corner,
      offsetedBottom - backgroundOffset
    );
    ctx.lineTo(left + backgroundOffset, offsetedBottom - backgroundOffset);
    ctx.lineTo(
      left + backgroundOffset,
      offsetedTop + corner + backgroundOffset / 2
    );
    ctx.lineTo(
      left + backgroundOffset / 2 + corner,
      offsetedTop + backgroundOffset
    );
    ctx.lineTo(
      right - backgroundOffset + lineOffset,
      offsetedTop + backgroundOffset
    );
    // Draw the Path
    ctx.fillStyle = `rgb(${colorBG}/ 0.4)`;
    ctx.fill();
    ctx.closePath();
  }, [canvas, getTheme]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={onClick}
        className={`relative w-full flex ${
          revert ? "flex-row-reverse" : ""
        } items-center ${
          center ? "justify-center" : ""
        } z-10 px-4 py-3 whitespace-nowrap ${classses}`}
      >
        {chevron && revert ? (
          <Icon
            type="Chevron"
            size={iconSize}
            className="text-white dark:text-blackX hover:scale-110 ml-auto"
          />
        ) : null}
        {name}
        {chevron && !revert ? (
          <Icon
            type="Chevron"
            size={iconSize}
            className="text-white dark:text-blackX hover:scale-110 ml-auto"
          />
        ) : null}
        {icon || index ? (
            <span
              className={`${separatorWidth} ${separatorHeight} bg-white dark:bg-black  ${
                revert ? "mr-auto ml-[12px]" : "ml-auto mr-[12px]"
              } `}
            />
        ) : null}
        {icon ? (
            <Icon
              type={icon}
              size={iconSize}
              className="text-white dark:text-orange-500X  hover:scale-110"
            />
        ) : null}
        {index ? (
          <span className="font-orbitron text-white dark:text-orange-500X font-bold">
            0{index}
          </span>
        ) : null}
        <canvas
          ref={canvas}
          className={`absolute top-0 left-0 w-full h-full -z-10 bg-cyan-600/40XXX `}
        />
      </button>
    </>
  );
};

export default StyledButton;
