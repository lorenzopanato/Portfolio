import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import SideMenu from "../sideMenu/SideMenu";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function SideBar() {
  return (
    <aside className="flex fixed w-full h-full">
      <div className="flex flex-col justify-between h-full pt-28 pb-10 max-h-[680px]">
        <div>
          <h1 className="text-[2.6rem] font-extrabold lg:text-5xl">
            Lorenzo Panato
          </h1>
          <h2 className="font-bold mt-1 flex gap-1.5 lg:mt-4 text-[1.35rem] lg:text-2xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Desenvolvedor Front-End")
                  .start();
              }}
              options={{
                delay: 90
              }}
            />
          </h2>
        </div>
        <SideMenu />
        <div className="flex gap-6 mt-20">
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
      </div>
    </aside>
  );
}
