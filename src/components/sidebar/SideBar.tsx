import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import SideMenu from "../sideMenu/SideMenu";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className=" lg:w-2/5 flex flex-col justify-between h-full py-28">
      <div>
        <h1 className="text-4xl font-extrabold sm:text-[3.2rem]">
          Lorenzo Panato
        </h1>
        <h2 className="font-bold mt-4 text-2xl">
          Desenvolvedor <span className="text-primary">Front-End</span>
        </h2>
      </div>
      <SideMenu />
      <div className="flex gap-6 mt-20">
        <Link to="https://www.linkedin.com/in/lorenzo-panato-400586268/" target="_blank">
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
    </aside>
  );
}
