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
import Menu from "@/components/Menu/Menu";

const intermediate = ["dot", "dot", "line", "dot", "dot"];
const endCompassPoint = "nav-line-44";

let sectionPos: any;
let scrollMaxHeight: number;
let scrollPos = 0;
let navItems: string[] = Object.values(menuItems).map((n) => n.key);
let compassItems: string[] = [];
let selectedItem = navItems[0];

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

const getItemsPos = (compass: any, compassBody: any) => {
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

    sectionPos[item].midPos = elementSizes.x + elementSizes.width / 2;

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
  const { getLanguage, setLanguage } = useContext(AppContext);
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
  const compass: any = useRef(null);
  const compassBody: any = useRef(null);
  const { t } = useTranslation();

  const setCompassItemPos = () => {
    const itemMidScrollPos =
      sectionPos[selectedItem].midPos -
      sectionPos.compass.mid +
      compass.current.scrollLeft;

    console.log(
      "selectedItem",
      selectedItem,
      "itemMidScrollPos",
      itemMidScrollPos,
      "scrollPos",
      scrollPos,
      "- sectionPos[selectedItem].per",
      sectionPos[selectedItem].per,
      "/ sectionPos[selectedItem].differenceP",
      sectionPos[selectedItem].differenceP,
      "* sectionPos[selectedItem].difference",
      sectionPos[selectedItem].difference
      , ((scrollPos - sectionPos[selectedItem].per) /
      sectionPos[selectedItem].differenceP) *
      sectionPos[selectedItem].difference
    );

    compass.current.scrollLeft =
      itemMidScrollPos +
      ((scrollPos - sectionPos[selectedItem].per) /
        sectionPos[selectedItem].differenceP) *
        sectionPos[selectedItem].difference;
  };

  const onItemClick = (item: string) => {
    const element = document.documentElement || document.body;
    const scrollTo = (sectionPos[item].per / 100) * scrollMaxHeight;

    selectedItem = item;
    element.scrollTop = scrollTo;
  };

  useEffect(() => {
    if (!sectionPos) {
      return;
    }

    setTimeout(() => {
      getItemsPos(compass.current, compassBody.current);
      setCompassItemPos();
    }, 0);

  }, [getLanguage]);

  useEffect(() => {
    if (!sectionPos) {
      scrollMaxHeight = document.body.scrollHeight - window.innerHeight;
      getSectionPos(scrollMaxHeight);
    }

    getItemsPos(compass.current, compassBody.current);
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
      console.clear()

      getItemsPos(compass.current, compassBody.current);
      setCompassItemPos();
    });

    return () => {};
  }, [scrollPos]);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (

    <nav className="fixed top-0 w-full h-16 z-30 justify-around items-center text-center">
      <div className="grid grid-cols-[15%_70%_15%] items-center max-w-7xl mx-auto">
        <div className="flex justify-center items-center h-full">
          <div className="bg-logo w-12 h-12 mt-1 bg-contain bg-no-repeat -skew-x-[25deg] brightness-0 invert" />
        </div>
        <div id="compassWrapper" className="w-full min-h-[40px] lg:max-w-[60%]">
          <div
            id="compass"
            className="fixed flex justify-around bg-black/20 w-full min-h-[40px] lg:max-w-[60%] p border-transparent
              before:absolute before:top-0 before:left-0 before:w-[10px] before:h-full before:border-4 before:border-r-0
              after:absolute after:top-0 after:right-0 after:w-[10px] after:h-full after:border-4 after:border-l-0"
          >
            <Icon
              type="MdiSetSquare"
              size={20}
              className="absolute -top-4 -rotate-45 scale-150 text-white z-0 hover:scale-125 "
            />
            <div
              id="compassBody"
              ref={compass}
              className="fixed flex overflow-hidden lg:max-w-[59%] whitespace-nowrapXXX truncate py-1"
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
                      className={`inline-block my-auto mx-[0px] z-40 
                        ${
                          navItems.includes(item.replace("-F", ""))
                            ? "hover:scale-110 cursor-pointer"
                            : ""
                        }`}
                      onClick={() =>
                        navItems.includes(item.replace("-F", ""))
                          ? onItemClick(item.replace("-F", ""))
                          : null
                      }
                    >
                      {item === "dot" ? (
                        <Icon type="Dot" size={30} className="text-white" />
                      ) : item === "line" ? (
                        <Icon
                          type="Minus"
                          size={30}
                          className="text-white rotate-90"
                        />
                      ) : (
                        t(`nav.${item.replace("-F", "")}`)
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center">
          <LanguageSwitcher type="icon" />
          <button
            id="toggle"
            onClick={() => toggleTheme()}
            className="py-2 px-4 rounded"
          >
            <Icon
              type={theme === "dark" ? "Night" : "Day"}
              size={26}
              className="text-white transition-all transform duration-1000 ease-in mb-1"
            />
          </button>
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
