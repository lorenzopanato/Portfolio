import { Link } from "react-router-dom";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import SideBar from "../../components/sidebar/SideBar";
import Technologies from "../../components/technologies/Technologies";
import Typewriter from "typewriter-effect";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import Header from "../../components/header/Header";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function Home() {
  const [isChecked, setIsChecked] = useState(true);
  const [lang, setLang] = useState("BR");
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang.toLowerCase());
  }, [lang]);

  const handleLanguageChange = () => {
    setIsChecked(!isChecked);
    setLang(isChecked ? "US" : "BR");
  };

  return (
    <div className="w-screen px-6 sm:px-10 flex flex-col md:flex-row justify-between max-w-screen-xl h-screen text-textDark">
      <div className="block md:hidden">
        <Header />
      </div>
      <div className="min-w-[330px] hidden md:block flex-1 max-w-[540px]">
        <SideBar />
      </div>

      <div className="flex flex-col md:hidden pt-6 md:pt-16">
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
                className="transition-all cursor-pointer hover:text-primary"
              />
            </Link>
            <Link to="https://github.com/lorenzopanato" target="_blank">
              <LuGithub
                size={24}
                title="Github"
                className="transition-all cursor-pointer hover:text-primary"
              />
            </Link>
            <Link to="mailto:lorenzohpanato@gmail.com" target="_blank">
              <LuMail
                size={24}
                title="Email"
                className="transition-all cursor-pointer hover:text-primary"
              />
            </Link>
          </div>

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
              <div className="h-4 rounded-full shadow-inner bg-gray-200 w-12"></div>
              <div className="absolute left-0 transition bg-primary rounded-full dot shadow-switch-1 -top-1 h-6 w-6 peer-checked:translate-x-full"></div>
            </div>
          </label>
        </div>
      </div>

      <main className="flex-1 z-50 flex flex-col">
        <About />
        <Technologies />
        <Projects />

        <span className="border-b border-textDark w-full mb-4"></span>
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
  );
}
