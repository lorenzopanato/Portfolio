import { LuGithub, LuLinkedin, LuMail, LuMoon, LuSunMedium } from "react-icons/lu";
import SideMenu from "../sideMenu/SideMenu";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function SideBar() {
  const [isChecked, setIsChecked] = useState(true);
  const [lang, setLang] = useState("BR");
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [dark, setDark] = useState(localStorage.getItem("dark") === null);

  useEffect(() => {
    i18n.changeLanguage(lang.toLowerCase());
  }, [lang]);

  const handleLanguageChange = () => {
    setIsChecked(!isChecked);
    setLang(isChecked ? "US" : "BR");
  };

  const handleDarkMode = () => {
    const isDarkMode = !dark; 
  
    if (isDarkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("dark", "");
    } else {
      document.body.classList.remove("dark");
      localStorage.removeItem("dark");
    }
  
    setDark(isDarkMode); 
  };

  return (
    <aside className="flex fixed w-full h-full">
      <div className="flex flex-col justify-between h-full pt-28 pb-10 max-h-[680px]">
        <div>
          <h1 className="text-[2.6rem] font-extrabold lg:text-5xl">
            Lorenzo Panato
          </h1>
          <h2 className="font-bold mt-1 flex gap-1.5 lg:mt-4 text-[1.35rem] lg:text-2xl">
            <Typewriter
              options={{
                strings: [t("subtitle")],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </h2>
        </div>
        <SideMenu />
        <div className="flex justify-between items-end">
          <div className="flex gap-6 mt-20">
            <Link
              to="https://www.linkedin.com/in/lorenzo-panato-400586268/"
              target="_blank"
            >
              <LuLinkedin
                size={26}
                title="Linkedin"
                className="transition-all cursor-pointer hover:text-primary dark:hover:text-primaryDark"
              />
            </Link>
            <Link to="https://github.com/lorenzopanato" target="_blank">
              <LuGithub
                size={26}
                title="Github"
                className="transition-all cursor-pointer hover:text-primary dark:hover:text-primaryDark"
              />
            </Link>
            <Link to="mailto:lorenzohpanato@gmail.com" target="_blank">
              <LuMail
                size={26}
                title="Email"
                className="transition-all cursor-pointer hover:text-primary dark:hover:text-primaryDark"
              />
            </Link>
          </div>

          <div className="flex gap-4">
            <label
              htmlFor="toogleLang"
              className="flex items-center gap-2 cursor-pointer select-none text-dark dark:text-white"
            >
              <p className="font-semibold">{lang}</p>
              <div className="relative">
                <input
                  id="toogleLang"
                  onChange={handleLanguageChange}
                  type="checkbox"
                  className="peer sr-only"
                />
                <div className="h-[17px] rounded-full shadow-inner bg-gray-200 w-11"></div>
                <div className="absolute left-0 transition bg-primary dark:bg-primaryDark rounded-full dot shadow-switch-1 dark:bg-dark-4 -top-[3px] h-[23px] w-[23px] peer-checked:translate-x-full"></div>
              </div>
            </label>

            <button
              onClick={handleDarkMode}
              className="border rounded-md p-1 transition-all hover:bg-zinc-50 active:bg-zinc-100 dark:hover:bg-zinc-700 dark:active:bg-zinc-900"
              aria-label="dark-mode-button"
              title="Light/dark mode"
            >
              {localStorage.getItem("dark") !== null ? <LuMoon size={20} /> : <LuSunMedium size={20} />}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
