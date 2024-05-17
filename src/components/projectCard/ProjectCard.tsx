import { LuInfo, LuMonitorPlay } from "react-icons/lu";
import { IProject } from "../../utils/types/Project";
import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ProjectCard({ project }: { project: IProject }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <div className="flex flex-col gap-4 lg:gap-6 w-full h-full">
      <div className="w-full h-full bg-transparent group perspective">
        <div
          className={`relative preserve-3d ${
            isFlipped && "my-rotate-y-180"
          } w-full h-full duration-1000 z-50`}
          onClick={() => setIsFlipped(!isFlipped)}
        >          
          <div className="flex items-center border shadow rounded-md overflow-hidden w-full h-full">
            <img
              src={project.image}
              alt={`imagem do projeto ${project.title}`}
              className="w-full h-full transition-all grayscale hover:grayscale-0"
            />
          </div>
          <div className="absolute top-0 my-rotate-y-180 rounded-md backface-hidden shadow-2xl shadow-zinc-800 border w-full h-full bg-zinc-50/90 dark:bg-zinc-800/90 overflow-hidden">
            <div className="text-center flex flex-col items-center justify-center h-full px-1 lg:px-6">
              <strong className="text-lg sm:text-xl lg:text-2xl font-extrabold">
                {project.title}
              </strong>
              <p className="font-medium mt-1 lg:mt-2 text-sm lg:text-base">{i18n.language === "br" ? project.brDescription : project.usDescription}</p>
              <div className="flex gap-1 lg:gap-4 mt-3 lg:mt-6 flex-wrap justify-center text-xs lg:text-sm">
                {project.tecnologies.map((tech, index) => (
                  <div key={index} className="rounded-full py-1 px-2 lg:px-3 shadow-xl bg-textDark dark:bg-zinc-50 dark:text-textDark font-medium text-textLight cursor-default">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pr-2">
        <div className="flex gap-2 lg:gap-3">
          <Link to={project.website} target="_blank">
            <button className="before:ease relative border-none rounded-md h-full flex gap-1 lg:gap-2 items-center text-sm lg:text-base py-1 lg:py-1.5 px-2 lg:px-3 overflow-hidden border bg-gradient-to-tr from-blue-500 to-primary text-white transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40">
              <LuMonitorPlay size={23} />
              <span className="relative z-10">{t("liveDemo")}</span>
            </button>
          </Link>

          <Link to={project.sourceCode} target="_blank">
            <button className="before:ease relative group text-sm lg:text-base py-1 lg:py-1.5 px-2 lg:px-3 flex gap-1 lg:gap-2 rounded-md font-medium overflow-hidden border border-textDark dark:border-textLight before:absolute before:left-0 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-[400ms] hover:text-white hover:before:-rotate-180">
              <AiFillGithub className="z-10" size={26} />
              <span className="relative z-10 pt-[3px] lg:pt-[1px]">{t("sourceCode")}</span>
            </button>
          </Link>
        </div>
        <LuInfo
          size={26}
          title={t("moreInfo")}
          className="cursor-pointer transition-colors z-50 text-zinc-700 hover:text-textDark dark:text-zinc-50 dark:hover:text-textLight"
          onClick={() => setIsFlipped(!isFlipped)}
        />
      </div>
    </div>
  );
}
