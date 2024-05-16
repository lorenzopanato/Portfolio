import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

export default function SideMenu() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <nav>
      <ul className="text-lg flex flex-col gap-2 font-medium">
        <li>
          <ScrollLink
            className={`transition-all flex flex-col ${
              location.hash === "#about" && "text-primary dark:text-primaryDark"
            } text-base lg:text-lg group hover:text-primary dark:hover:text-primaryDark duration-300 cursor-pointer w-24 lg:w-28 relative`}
            to="about"
            onClick={() => navigate("#about")}
            href="#about"
            spy={true}
            smooth={true}
            duration={400}
          >
            <span className="mb-1">{t("aboutTitle")}</span>
            <span
              className={`h-[2px] rounded-full w-0 ${
                location.hash === "#about" && "w-full"
              } absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary dark:from-blue-200 dark:to-primaryDark transition-all duration-300`}
            ></span>
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            className={`transition-all flex flex-col ${
              location.hash === "#technologies" &&
              "text-primary dark:text-primaryDark"
            } text-base lg:text-lg group hover:text-primary dark:hover:text-primaryDark duration-300 cursor-pointer w-24 lg:w-28 relative`}
            to="technologies"
            onClick={() => navigate("#technologies")}
            href="#technologies"
            spy={true}
            smooth={true}
            duration={400}
          >
            <span className="mb-1">{t("skillsTitle")}</span>
            <span
              className={`h-[2px] rounded-full w-0 ${
                location.hash === "#technologies" && "w-full"
              } absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary dark:from-blue-200 dark:to-primaryDark transition-all duration-300`}
            ></span>
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            className={`transition-all flex flex-col ${
              location.hash === "#projects" &&
              "text-primary dark:text-primaryDark"
            } text-base lg:text-lg group hover:text-primary dark:hover:text-primaryDark duration-300 cursor-pointer w-24 lg:w-28 relative`}
            to="projects"
            onClick={() => navigate("#projects")}
            href="#projects"
            spy={true}
            smooth={true}
            duration={400}
          >
            <span className="mb-1">{t("projectsTitle")}</span>
            <span
              className={`h-[2px] rounded-full w-0 ${
                location.hash === "#projects" && "w-full"
              } absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary dark:from-blue-200 dark:to-primaryDark transition-all duration-300`}
            ></span>
          </ScrollLink>
        </li>

        <li>
          <ScrollLink
            className={`transition-all flex flex-col ${
              location.hash === "#contact" &&
              "text-primary dark:text-primaryDark"
            } text-base lg:text-lg group hover:text-primary dark:hover:text-primaryDark duration-300 cursor-pointer w-24 lg:w-28 relative`}
            to="contact"
            onClick={() => navigate("#contact")}
            href="#contact"
            spy={true}
            smooth={true}
            duration={400}
          >
            <span className="mb-1">{t("contactTitle")}</span>
            <span
              className={`h-[2px] rounded-full w-0 ${
                location.hash === "#contact" && "w-full"
              } absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary dark:from-blue-200 dark:to-primaryDark transition-all duration-300`}
            ></span>
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
}
