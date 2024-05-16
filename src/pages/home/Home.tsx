import { Link } from "react-router-dom";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import SideBar from "../../components/sidebar/SideBar";
import Technologies from "../../components/technologies/Technologies";
import Typewriter from "typewriter-effect";
import {
  LuGithub,
  LuLinkedin,
  LuMail,
  LuMoon,
  LuSunMedium,
} from "react-icons/lu";
import Header from "../../components/header/Header";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Home() {
  const [isChecked, setIsChecked] = useState(true);
  const [lang, setLang] = useState("BR");
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const [dark, setDark] = useState(true);

  useEffect(() => {
    i18n.changeLanguage(lang.toLowerCase());
  }, [lang]);

  const handleLanguageChange = () => {
    setIsChecked(!isChecked);
    setLang(isChecked ? "US" : "BR");
  };

  useEffect(() => {
    document.body.classList.add("dark");
    localStorage.setItem("dark", "true");
  }, []);

  const handleDarkMode = () => {
    const isDarkMode = !dark;

    setDark(isDarkMode);
    document.body.classList.toggle("dark", isDarkMode);

    if (isDarkMode) {
      localStorage.setItem("dark", "true");
    } else {
      localStorage.removeItem("dark");
    }
  };

  return (
    <div className="flex justify-center dark:bg-slate-950/90">
      <div
        className={`w-screen sm:px-10 flex flex-col md:flex-row justify-between max-w-screen-xl text-textDark dark:text-textLight`}
      >
        <div className="block md:hidden px-6">
          <Header />
        </div>
        <div className="min-w-[330px] hidden md:block flex-1 max-w-[540px]">
          <SideBar />
        </div>

        <div className="flex flex-col md:hidden pt-6 md:pt-16 px-6">
          <div>
            <h1 className="text-4xl sm:text-[2.6rem] font-extrabold">
              Lorenzo Panato
            </h1>
            <h2 className="font-bold flex gap-1.5 mt-2 sm:mt-4 text-xl sm:text-[1.35rem]">
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

          <div className="flex justify-between items-end">
            <div className="flex gap-6 mt-12">
              <Link
                to="https://www.linkedin.com/in/lorenzo-panato-400586268/"
                target="_blank"
              >
                <LuLinkedin
                  size={24}
                  title="Linkedin"
                  className="transition-all cursor-pointer hover:text-primary dark:hover:text-primaryDark"
                />
              </Link>
              <Link to="https://github.com/lorenzopanato" target="_blank">
                <LuGithub
                  size={24}
                  title="Github"
                  className="transition-all cursor-pointer hover:text-primary dark:hover:text-primaryDark"
                />
              </Link>
              <Link to="mailto:lorenzohpanato@gmail.com" target="_blank">
                <LuMail
                  size={24}
                  title="Email"
                  className="transition-all cursor-pointer hover:text-primary dark:hover:text-primaryDark"
                />
              </Link>
            </div>

            <div className="flex gap-4">
              <label
                htmlFor="toogleLng"
                className="flex items-center gap-3 cursor-pointer select-none"
              >
                <p className="font-semibold">{lang}</p>
                <div className="relative">
                  <input
                    id="toogleLng"
                    onChange={handleLanguageChange}
                    type="checkbox"
                    className="peer sr-only"
                  />
                  <div className="h-[17px] rounded-full shadow-inner bg-gray-200 dark:bg-zinc-400 w-11"></div>
                  <div className="absolute left-0 transition bg-primary dark:bg-primaryDark rounded-full dot shadow-switch-1 -top-[3px] h-[23px] w-[23px] peer-checked:translate-x-full"></div>
                </div>
              </label>

              <button
                onClick={handleDarkMode}
                className="border rounded-md p-1 transition-all hover:bg-zinc-50 active:bg-zinc-100 dark:hover:bg-zinc-800 dark:active:bg-zinc-900"
              >
                {localStorage.getItem("dark") !== null ? (
                  <LuMoon size={20} />
                ) : (
                  <LuSunMedium size={20} />
                )}
              </button>
            </div>
          </div>
        </div>

        <main className="flex-1 z-50 flex flex-col px-6">
          <About />
          <Technologies />
          <Projects />

          <span className="border-b border-textDark dark:border-textLight w-full mb-4"></span>
          <footer
            dangerouslySetInnerHTML={{
              __html: t("footer", {
                interpolation: { escapeValue: false },
              }),
            }}
            className="footer pb-5 text-sm lg:text-base"
          />
        </main>
      </div>
    </div>
  );
}
