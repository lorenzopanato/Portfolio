import { LuInfo } from "react-icons/lu";

export default function About() {
  return (
    <section>
      <div className="flex items-center gap-4">
        <LuInfo size={24} />
        <h3 className="font-bold sm:text-2xl">Sobre mim</h3>
        <span className="border-b border-textDark flex-1"></span>
      </div>
      <h4 className="mt-8 mb-2 font-semibold text-zinc-700 lg:text-[1.1rem]">
        Estudante de{" "}
        <span className="text-primary">Engenharia de Software</span>
      </h4>
      <p className="text-justify">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
        itaque necessitatibus aspernatur perspiciatis consectetur voluptates
        eum, temporibus suscipit, possimus velit aliquam sint earum cupiditate
        ut eligendi natus obcaecati sequi porro incidunt et similique eius
        doloremque facere minus? Optio repudiandae explicabo ipsam dolore at
        repellat eligendi? Asperiores excepturi ab eveniet tempora.
      </p>
      <h4 className="mt-8 mb-2 font-semibold text-zinc-700 lg:text-[1.1rem]">
        Experiência
      </h4>
      <div className="flex mt-4 mb-2 gap-4 items-end">
        <strong className=" font-semibold">DBC Company</strong>
        <span className="text-zinc-500 font-medium text-sm">
          12/2023 - 05/2024
        </span>
      </div>
      <p className="text-justify">
        Durante o período que estive na DBC, participei do programa "Vem Ser
        DBC", uma formação intensiva e abrangente que estimula o desenvolvimento
        pessoal e profissional dos colaboradores. Dentro do programa "Vem Ser",
        fiz parte da trilha de Frontend, onde aprimorei meu conhecimento nas
        tecnologias mais utilizadas no mercado, como: HTML/CSS, JavaScript,
        React, Angular, TypeScript, Redux, ContextAPI, Git, entre outras.
      </p>
      {/* <button className="mt-6 flex items-center gap-2 justify-center before:ease relative h-11 w-[136px] rounded-md font-medium overflow-hidden bg-gradient-to-tr from-blue-500 to-primary text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-16 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-blue-400 hover:before:-translate-x-40">
        <LuInfo size={20} />
        Veja mais
      </button> */}
    </section>
  );
}
