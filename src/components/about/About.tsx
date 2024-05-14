import { LuInfo } from "react-icons/lu";
import { useIsVisible } from "../../utils/hooks";
import { useRef } from "react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <section
      id="about"
      className={`pt-20 md:pt-32 transition-opacity ease-in duration-[900ms] ${
        isVisible ? "opacity-100" : "opacity-0"
      }
`}
      ref={ref}
    >
      <div className="flex items-center gap-4">
        <LuInfo size={24} />
        <h3 className="font-bold text-xl lg:text-2xl">Sobre mim</h3>
        <span className="border-b border-textDark flex-1"></span>
      </div>

      <p className="text-justify mt-6 text-sm lg:text-base">
        Meu nome é Lorenzo Panato, tenho 19 anos e sou estudante de Engenharia
        de Software. Desenvolvo{" "}
        <span className="text-primary font-medium">
          interfaces modernas e de alta qualidade
        </span>
        , priorizando performance, responsividade, acessibilidade e SEO. Além
        disso, possuo experiência em <span className="text-primary font-medium">projetos colaborativos</span> com desenvolvimento
        gerenciado por{" "}
        <span className="text-primary font-medium">metodologias ágeis</span>.
        Estou comprometido em buscar constantemente meu aprimoramento e em
        contribuir de forma significativa em equipes e projetos desafiadores.
      </p>
      <h4 className="mt-8 mb-2 font-semibold text-zinc-700 text-[1.1rem]">
        Experiência
      </h4>

      <div className="flex mt-4 gap-6">
        <div className="flex flex-col">
          <div className="flex items-end mt-[10px] relative">
            <span className="w-3 h-[2px] bg-primary"></span>
            <span className="rounded-full h-3 w-3 absolute border-2 border-primary -bottom-[5px] left-2.5"></span>
          </div>

          <span className="flex-1 h-full w-[2px] bg-primary"></span>
        </div>

        <div>
          <div className="flex mb-2 gap-4 items-end">
            <strong className="font-semibold">DBC Company</strong>
            <span className="text-zinc-500 font-medium text-sm">
              12/2023 - 05/2024
            </span>
          </div>
          <div className="flex gap-10">
            <p className="text-justify text-sm lg:text-base">
              Durante o período que estive na DBC, participei do programa
              <span className="text-primary font-medium"> Vem Ser DBC</span>,
              uma formação intensiva e abrangente que estimula o desenvolvimento
              pessoal e profissional dos colaboradores. Dentro do programa "Vem
              Ser", fiz parte da trilha de Frontend, onde aprimorei meu
              conhecimento nas
              <span className="text-primary font-medium">
                {" "}
                tecnologias mais utilizadas no mercado
              </span>
              , como: HTML/CSS, JavaScript, React, Angular, TypeScript, Redux,
              ContextAPI, Git, entre outras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
