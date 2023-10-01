import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppContext } from "@/providers/app.provider";
import menuItems from "@/lib/menuItems";
import NavLink from "@/components/NavLink/NavLink";
import Button from "@/components/Button/Button";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import appConfig from "@/config/app.config";
import IMenuItems from "@/types/MenuItems@types";
import Icon from "@/components/Icons/Icon";

const intermediate = ["dot", "dot", "line", "dot", "dot"];
const endCompassPoint = "nav-line-44";

let sectionPos: any;
let scrollMaxHeight: number;
let navItems: string[] = [
  "header",
  "services",
  "aboutUs",
  "references",
  "contacts",
];
let compassItems: string[] = [];

navItems.map((bar: string, i: number) => {
  if (i === 0) {
    compassItems = [
      ...intermediate,
      navItems[navItems.length - 2] + "-F",
      ...intermediate,
      navItems[navItems.length - 1] + "-F",
    ];
  }

  compassItems = [...compassItems, ...intermediate, bar];

  if (i === navItems.length - 1) {
    compassItems = [
      ...compassItems,
      ...intermediate,
      navItems[0] + "-F",
      ...intermediate,
      navItems[1] + "-F",
      ...intermediate,
    ];
  }
});

const getSectionPos = (scrollMaxHeight: number) => {
  sectionPos = {};
  navItems.map((item: string) => {
    const element: any = document.getElementById(item);

    return (sectionPos[item] = {
      per: Math.ceil(
        (element.getBoundingClientRect().y * 100) / scrollMaxHeight
      ),
    });
  });
};

const getItemsPos = (compass: any, compassBody: any, scrollPos: number) => {
  let previewItem: any = null;
  const compassBodySizes = compassBody.getBoundingClientRect();
  const compassSizes = compass.getBoundingClientRect();
  let compassMid = compassSizes.width / 2 + compassSizes.x;

  sectionPos.compass = {
    widt: Math.ceil(compassBodySizes.width),
    x: Math.ceil(compassBodySizes.x),
    mid: compassMid,
  };

  navItems.map((item: string, i) => {
    const element: any = document.getElementById(`nav-${item}`);
    const elementSizes = element.getBoundingClientRect();

    sectionPos[item].midPos =
      Math.ceil(elementSizes.x) + Math.ceil(elementSizes.width) / 2;

    if (previewItem) {
      sectionPos[previewItem].difference =
        (sectionPos[item].midPos - sectionPos[previewItem].midPos) / 100;
      sectionPos[previewItem].differenceP =
        (sectionPos[item].per - sectionPos[previewItem].per) / 100;
    }

    if (i === navItems.length - 1) {
      const endLineElement: any = document.getElementById(endCompassPoint);
      const endLineElementSizes = endLineElement.getBoundingClientRect();
      const endLineMidPos =
        endLineElementSizes.x + endLineElementSizes.width / 2;

      sectionPos[item].difference =
        (endLineMidPos - sectionPos[item].midPos) / 100;

      sectionPos[item].differenceP = (100 - sectionPos[item].per) / 100;
    }

    previewItem = item;
  });
};

const Navbar = () => {
  const compass: any = useRef(null);
  const compassBody: any = useRef(null);

  let selectedItem = navItems[0];
  let scrollPos = 0;

  const setCompassItemPos = (item: string | null = null) => {
    const itemMidScrollPos =
      sectionPos[selectedItem].midPos -
      sectionPos.compass.mid +
      compass.current.scrollLeft;

    if (item) {
      compass.current.scrollLeft = itemMidScrollPos;
    } else {
      compass.current.scrollLeft =
        itemMidScrollPos +
        ((scrollPos - sectionPos[selectedItem].per) /
          sectionPos[selectedItem].differenceP) *
          sectionPos[selectedItem].difference;
    }
  };

  const onItemClick = (item: string) => {
    const element = document.documentElement || document.body;
    const maxScroll = element.scrollHeight - element.clientHeight;
    const scrollTo = (sectionPos[item].per / 100) * maxScroll;

    return (element.scrollTop = scrollTo);
  };

  useEffect(() => {
    if (!sectionPos) {
      scrollMaxHeight = document.body.scrollHeight - window.innerHeight;
      getSectionPos(scrollMaxHeight);
    }

    getItemsPos(compass.current, compassBody.current, scrollPos);
    compass.current.scrollLeft =
      sectionPos[selectedItem].midPos -
      sectionPos.compass.mid +
      compass.current.scrollLeft;

    window.addEventListener("scroll", () => {
      scrollPos = (window.scrollY / scrollMaxHeight) * 100;
      scrollPos = scrollPos > 100 ? 100 : scrollPos;

      navItems.map((item: string, index: number) => {
        if (
          (index === navItems.length - 1 &&
            scrollPos >= sectionPos[item].per) ||
          (sectionPos[item].per <= scrollPos &&
            navItems[index + 1] &&
            sectionPos[navItems[index + 1]].per >= scrollPos)
        ) {
          selectedItem = item;
        }
      });

      getItemsPos(compass.current, compassBody.current, scrollPos);
      setCompassItemPos();
    });

    return () => {};
  });

  return (
    <nav className="flex fixed top-0 w-full h-16 z-30 justify-around items-center text-center truncate">
      <div className="bg-logo w-10 h-10 bg-contain bg-no-repeat -skew-x-12"/>
      <Icon
        type="Spot"
        size={30}
        className="absolute top-0 scale-150 text-white z-10 hover:scale-125 "
      />
      <div
        id="compassWrapper"
        className="fixed flex justify-around bg-black/20 w-full min-h-[40px] lg:max-w-[60%] border-white
          before:absolute before:top-0 before:left-0 before:w-[10px] before:h-full before:border-4 before:border-r-0
          after:absolute after:top-0 after:right-0 after:w-[10px] after:h-full after:border-4 after:border-l-0"
      >
        <div
          id="compass"
          ref={compass}
          className={`fixed flex overflow-hidden lg:max-w-[59%] whitespace-nowrapXXX py-1`}
        >
          <div ref={compassBody} className="flex">
            {compassItems.map((item, index) => {
              return (
                <div
                  id={
                    "nav-" +
                    item +
                    (intermediate.includes(item) ? "-" + index : "")
                  }
                  key={item + "-" + index}
                  className="inline-block my-auto mx-[1px] transition-all transform duration-1000 ease-in"
                  onClick={() =>
                    navItems.includes(item) ? onItemClick(item) : null
                  }
                >
                  {item === "dot" ? (
                    <Icon
                      type="Dot"
                      size={30}
                      className="text-white hover:scale-125"
                    />
                  ) : item === "line" ? (
                    <Icon
                      type="Minus"
                      size={30}
                      className="text-white hover:scale-125 rotate-90"
                    />
                  ) : (
                    item
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
