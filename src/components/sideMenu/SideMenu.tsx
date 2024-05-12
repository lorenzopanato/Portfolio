export default function SideMenu() {
  return (
    <nav>
      <ul className="text-lg flex flex-col gap-2 font-medium">
        <li className="transition-all flex flex-col text-primary group hover:text-primary duration-300 cursor-pointer w-32 relative">
          <span className="mb-1">Sobre mim</span>
          <span className="h-[2px] rounded-full w-full absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary transition-all duration-300"></span>
        </li>

        <li className="transition-all flex flex-col group hover:text-primary duration-300 cursor-pointer w-32 relative">
          <span className="mb-1">Tecnologias</span>
          <span className="h-[2px] rounded-full w-0 absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary transition-all duration-300"></span>
        </li>

        <li className="transition-all flex flex-col group hover:text-primary duration-300 cursor-pointer w-32 relative">
          <span className="mb-1">Projetos</span>
          <span className="h-[2px] rounded-full w-0 absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary transition-all duration-300"></span>
        </li>

        <li className="transition-all flex flex-col group hover:text-primary duration-300 cursor-pointer w-32 relative">
          <span className="mb-1">Contato</span>
          <span className="h-[2px] rounded-full w-0 absolute bottom-0 left-0 group-hover:w-full bg-gradient-to-r from-blue-400 to-primary transition-all duration-300"></span>
        </li>
      </ul>
    </nav>
  );
}
