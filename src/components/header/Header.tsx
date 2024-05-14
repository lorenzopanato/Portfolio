import { Box, Drawer } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LuGithub, LuLinkedin, LuMail, LuMenu, LuX } from "react-icons/lu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ color: "#082b47", backgroundColor: "#ffffff", height: "100vh" }}
    >
      <div className="py-4 px-6 flex items-center justify-end ">
        <LuX size={30} className="cursor-pointer" />
      </div>
      <ul className="text-lg flex flex-col pl-10 gap-2 font-medium w-full">
        <ScrollLink
          to="about"
          onClick={() => navigate("#about")}
          spy={true}
          smooth={true}
          duration={700}
        >
          <li
            className={`transition-all flex flex-col ${
              location.hash === "#about" && "text-primary"
            } group hover:text-primary duration-300 cursor-pointer w-40 relative`}
            onClick={handleDrawerToggle}
          >
            <span className="mb-1">Sobre mim</span>
            <span
              className={`h-[2px] rounded-full w-0 ${
                location.hash === "#about" && "w-full"
              } absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary transition-all duration-300`}
            ></span>
          </li>
        </ScrollLink>
        <ScrollLink
          to="technologies"
          onClick={() => navigate("#technologies")}
          spy={true}
          smooth={true}
          duration={700}
        >
          <li
            className={`transition-all flex flex-col ${
              location.hash === "#technologies" && "text-primary"
            } group hover:text-primary duration-300 cursor-pointer w-40 relative`}
            onClick={handleDrawerToggle}
          >
            <span className="mb-1">Tecnologias</span>
            <span
              className={`h-[2px] rounded-full w-0 ${
                location.hash === "#technologies" && "w-full"
              } absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary transition-all duration-300`}
            ></span>
          </li>
        </ScrollLink>

        <ScrollLink
          to="projects"
          onClick={() => navigate("#projects")}
          spy={true}
          smooth={true}
          duration={700}
        >
          <li
            className={`transition-all flex flex-col ${
              location.hash === "#projects" && "text-primary"
            } group hover:text-primary duration-300 cursor-pointer w-40 relative`}
            onClick={handleDrawerToggle}
          >
            <span className="mb-1">Projetos</span>
            <span
              className={`h-[2px] rounded-full w-0 ${
                location.hash === "#projects" && "w-full"
              } absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary transition-all duration-300`}
            ></span>
          </li>
        </ScrollLink>

        <ScrollLink
          to="contact"
          onClick={() => navigate("#contact")}
          spy={true}
          smooth={true}
          duration={700}
        >
          <li
            className={`transition-all flex flex-col ${
              location.hash === "#contact" && "text-primary"
            } group hover:text-primary duration-300 cursor-pointer w-40 relative`}
            onClick={handleDrawerToggle}
          >
            <span className="mb-1">Contato</span>
            <span
              className={`h-[2px] rounded-full w-0 ${
                location.hash === "#contact" && "w-full"
              } absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary transition-all duration-300`}
            ></span>
          </li>
        </ScrollLink>
      </ul>
      <div className="flex gap-6 pt-16 pl-10">
        <Link
          to="https://www.linkedin.com/in/lorenzo-panato-400586268/"
          target="_blank"
        >
          <LuLinkedin
            size={26}
            title="Linkedin"
            className="transition-all cursor-pointer hover:text-primary"
          />
        </Link>
        <Link to="https://github.com/lorenzopanato" target="_blank">
          <LuGithub
            size={26}
            title="Github"
            className="transition-all cursor-pointer hover:text-primary"
          />
        </Link>
        <Link to="mailto:lorenzohpanato@gmail.com" target="_blank">
          <LuMail
            size={26}
            title="Email"
            className="transition-all cursor-pointer hover:text-primary"
          />
        </Link>
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
