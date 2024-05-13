import {
  BiLogoAngular,
  BiLogoBootstrap,
  BiLogoCss3,
  BiLogoGit,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPostgresql,
  BiLogoRedux,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { DiMysql, DiReact } from "react-icons/di";
import { FaSass } from "react-icons/fa";
import { LuCode2 } from "react-icons/lu";
import { SiMui, SiMysql } from "react-icons/si";

export default function Technologies() {
  return (
    <section className="h-screen">
      <div className="flex items-center gap-4">
        <LuCode2 size={28} />
        <h3 className="font-bold sm:text-2xl">Tecnologias</h3>
        <span className="border-b border-textDark flex-1"></span>
      </div>
      
      <div className="w-full grid lg:grid-cols-4 gap-y-6 text-center text-zinc-500 mt-12 mb-96">
        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-orange-600 hover:text-orange-600 cursor-default border-b-[10px]">
          <BiLogoHtml5 size={46} />
          HTML
        </div>
        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-sky-500 hover:text-sky-500 cursor-default border-b-[10px]">
          <BiLogoCss3 size={46} />
          CSS
        </div>
        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-sky-500 hover:text-sky-500 cursor-default border-b-[10px]">
          <DiReact size={46} />
          React
        </div>
        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-sky-600 hover:text-sky-600 cursor-default border-b-[10px]">
          <BiLogoTypescript size={46} />
          TypeScript
        </div>
        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-yellow-500 hover:text-yellow-500 cursor-default border-b-[10px]">
          <BiLogoJavascript
            size={46}
            className="rounded-full overflow-hidden"
          />
          JavaScript
        </div>
        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-indigo-600 hover:text-indigo-600 cursor-default border-b-[10px]">
          <BiLogoRedux size={46} />
          Redux
        </div>
        <div className="flex pt-2 flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-primary hover:text-primary cursor-default border-b-[10px]">
          <SiMui size={38} />
          Material UI
        </div>

        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-sky-500 hover:text-sky-500 cursor-default border-b-[10px]">
          <BiLogoTailwindCss size={46} />
          Tailwind CSS
        </div>
        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-pink-600 hover:text-pink-600 cursor-default border-b-[10px]">
          <FaSass size={46} />
          Sass
        </div>
        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-rose-700 hover:text-rose-700 cursor-default border-b-[10px]">
          <BiLogoAngular size={46} />
          Angular
        </div>
        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-indigo-600 hover:text-indigo-600 cursor-default border-b-[10px]">
          <BiLogoBootstrap size={46} />
          Bootstrap
        </div>
        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-orange-600 hover:text-orange-600 cursor-default border-b-[10px]">
          <BiLogoGit size={46} />
          Git
        </div>

        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-orange-400 hover:text-orange-400 cursor-default border-b-[10px]">
          <BiLogoJava size={46} />
          Java
        </div>
        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-green-500 hover:text-green-500 cursor-default border-b-[10px]">
          <BiLogoSpringBoot size={46} />
          Spring
        </div>
        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-sky-700 hover:text-sky-700 cursor-default border-b-[10px]">
          <DiMysql size={46} />
          MySQL
        </div>
        <div className="flex flex-col gap-1 lg:text-base font-medium items-center justify-center rounded-md bg-zinc-50 shadow max-w-28 h-28 transition-colors hover:border-sky-800 hover:text-sky-800 cursor-default border-b-[10px]">
          <BiLogoPostgresql size={46} />
          PostgreSQL
        </div>
      </div>
    </section>
  );
}
