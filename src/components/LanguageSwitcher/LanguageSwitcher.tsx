import { languages } from "@/lib/languages";
import { AppContext } from "@/providers/app.provider";
import { useContext } from "react";
import Icon from "@/components/Icons/Icon";

interface ILanguageSwitcherProps {
  styles?: string;
  type?: string;
}

const LanguageSwitcher = ({ styles, type }: ILanguageSwitcherProps) => {
  // context
  const { getLanguage, setLanguage } = useContext(AppContext);

  const handleChangeLanguage = () => {
    if (getLanguage === null || getLanguage === languages.cs) {
      setLanguage(languages.en);
    } else {
      setLanguage(languages.cs);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className={`
        flex items-center
        transition-all
        delay-75
        text-gray-200
        hover:text-white
        p-2
        ${styles}
        `}
        onClick={handleChangeLanguage}
      >
        {type ? (
          <Icon type="Translate" size={26} className={`text-white transition-all transform duration-200 ease-in mt-px hover:scale-125 ${getLanguage === languages.en ? "[transform:rotateY(0.5turn)]" : ""}`} />
        ) : (
          <span className="ml-2 ">
            {getLanguage === languages.en ? "czech" : "english"}
          </span>
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
