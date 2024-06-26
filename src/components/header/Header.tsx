import { Box, Drawer } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuGithub, LuLinkedin, LuMail, LuMenu, LuX } from "react-icons/lu";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ color: "#082b47", height: "100vh" }}
    >
      <div className="h-full bg-textLight dark:text-textLight dark:bg-slate-900">
        <div className="py-4 px-6 flex items-center justify-end ">
          <LuX size={30} className="cursor-pointer" />
        </div>
        <ul className="text-lg flex flex-col pl-10 gap-2 font-medium w-full">
          <li>
            <ScrollLink
              className={`transition-all flex flex-col ${
                location.hash === "#about" &&
                "text-primary dark:text-primaryDark"
              } group hover:text-primary dark:hover:text-primaryDark duration-300 cursor-pointer w-40 relative`}
              to="about"
              href="#about"
              onClick={() => {
                navigate("#about");
                handleDrawerToggle();
              }}
              spy={true}
              smooth={true}
              duration={700}
            >
              <span className="mb-1">{t("aboutTitle")}</span>
              <span
                className={`h-[2px] rounded-full w-0 ${
                  location.hash === "#about" && "w-full"
                } absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary dark:from-blue-200 dark:to-primaryDark  transition-all duration-300`}
              ></span>
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              className={`transition-all flex flex-col ${
                location.hash === "#technologies" &&
                "text-primary dark:text-primaryDark"
              } group hover:text-primary dark:hover:text-primaryDark duration-300 cursor-pointer w-40 relative`}
              to="technologies"
              href="#technologies"
              onClick={() => {
                navigate("#technologies");
                handleDrawerToggle();
              }}
              spy={true}
              smooth={true}
              duration={700}
            >
              <span className="mb-1">{t("skillsTitle")}</span>
              <span
                className={`h-[2px] rounded-full w-0 ${
                  location.hash === "#technologies" && "w-full"
                } absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary dark:from-blue-200 dark:to-primaryDark  transition-all duration-300`}
              ></span>
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              className={`transition-all flex flex-col ${
                location.hash === "#projects" &&
                "text-primary dark:text-primaryDark"
              } group hover:text-primary dark:hover:text-primaryDark duration-300 cursor-pointer w-40 relative`}
              to="projects"
              href="#projects"
              onClick={() => {
                navigate("#projects");
                handleDrawerToggle();
              }}
              spy={true}
              smooth={true}
              duration={700}
            >
              <span className="mb-1">{t("projectsTitle")}</span>
              <span
                className={`h-[2px] rounded-full w-0 ${
                  location.hash === "#projects" && "w-full"
                } absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary dark:from-blue-200 dark:to-primaryDark  transition-all duration-300`}
              ></span>
            </ScrollLink>
          </li>

          <li>
            <ScrollLink
              className={`transition-all flex flex-col ${
                location.hash === "#contact" &&
                "text-primary dark:text-primaryDark"
              } group hover:text-primary dark:hover:text-primaryDark duration-300 cursor-pointer w-40 relative`}
              to="contact"
              href="#contact"
              onClick={() => {
                navigate("#contact");
                handleDrawerToggle();
              }}
              spy={true}
              smooth={true}
              duration={700}
            >
              <span className="mb-1">{t("contactTitle")}</span>
              <span
                className={`h-[2px] rounded-full w-0 ${
                  location.hash === "#contact" && "w-full"
                } absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary dark:from-blue-200 dark:to-primaryDark  transition-all duration-300`}
              ></span>
            </ScrollLink>
          </li>
        </ul>
        <div className="flex gap-6 pt-16 pl-10">
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
      </div>
    </Box>
  );

  return (
    <header className="flex justify-end w-full py-3">
      <LuMenu
        size={32}
        onClick={handleDrawerToggle}
        className="cursor-pointer"
      />

      <div>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", xl: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              maxWidth: 400,
              backgroundColor: "var(--primary)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </div>
    </header>
  );
}
