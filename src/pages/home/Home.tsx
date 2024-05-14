import { Link } from "react-router-dom";
import About from "../../components/about/About";
import Projects from "../../components/projects/Projects";
import SideBar from "../../components/sidebar/SideBar";
import Technologies from "../../components/technologies/Technologies";
import Typewriter from "typewriter-effect";
import { LuGithub, LuLinkedin, LuMail } from "react-icons/lu";

export default function Home() {
  return (
    <div className="w-screen px-4 sm:px-10 flex flex-col md:flex-row justify-between max-w-screen-xl h-screen text-textDark">
      <div className="min-w-[330px] hidden md:block flex-1 max-w-[540px]">
        <SideBar />
      </div>
      
      <div className="flex flex-col md:hidden pt-16">
        <div>
          <h1 className="text-4xl sm:text-[2.6rem] font-extrabold">
            Lorenzo Panato
          </h1>
          <h2 className="font-bold flex gap-1.5 mt-2 sm:mt-4 text-xl sm:text-[1.35rem]">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Desenvolvedor Front-End").start();
              }}
              options={{
                delay: 90,
              }}
            />
          </h2>
        </div>
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
      </div>

      <main className="flex-1 z-50 flex flex-col">
        <About />
        <Technologies />
        <Projects />
      </main>
    </div>
  );
}
