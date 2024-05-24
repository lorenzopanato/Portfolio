import { LuArrowRight, LuMonitorPlay } from "react-icons/lu";
import ProjectCard from "../projectCard/ProjectCard";
import { IProject } from "../../utils/types/Project";
import EClothing from "../../assets/e-clothing.png";
import CoinTracker from "../../assets/coin-tracker.png";
import Livrux from "../../assets/livrux.png";
import { useRef } from "react";
import { useIsVisible } from "../../utils/hooks";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const projects: IProject[] = [
  {
    image: CoinTracker,
    title: "CoinTracker",
    brDescription:
      "Página integrada à API CoinGecko, com dados atualizados em tempo real de mais de 100 criptomoedas.",
    usDescription: "Page integrated with the CoinGecko API, with real-time updated data for over 100 cryptocurrencies.",
    tecnologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ContextAPI",
      "Material UI",
    ],
    website: "https://coin-tracker-blue.vercel.app/",
    sourceCode: "https://github.com/lorenzopanato/coin-tracker",
  },
  {
    image: EClothing,
    title: "E Clothing",
    brDescription:
      "E-Commerce completo, oferecendo uma ampla variedade de produtos e integrado à Fake Store API para obter os dados dos produtos.",
    usDescription: "A complete e-commerce, offering a wide variety of products and integrated with the Fake Store API to get product data.",
    tecnologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Material UI",
      "Vite",
    ],
    website: "https://e-clothing-silk.vercel.app/",
    sourceCode: "https://github.com/lorenzopanato/E-Clothing",
  },
  {
    image: Livrux,
    title: "Livrux",
    brDescription:
      "Livraria online desenvolvida com o objetivo de praticar Redux, integrada à Google Books API para obter os dados dos livros e à Reqres API para simular o cadastro e login de usuários.",
    usDescription: "Online bookstore developed with the goal of practicing Redux, integrated with the Google Books API to get book data and the Reqres API to simulate user registration and login.",
    tecnologies: [
      "React",
      "TypeScript",
      "Scss",
      "Redux",
      "Material UI",
      "React Hook Form",
      "Yup",
      "Vite",
    ],
    website: "https://livrux.vercel.app/",
    sourceCode: "https://github.com/lorenzopanato/livrux",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className={`py-20 md:py-32 transition-opacity ease-in duration-[900ms] ${
        isVisible ? "opacity-100" : "opacity-0"
      }
`}
      ref={ref}
    >
      <div className="flex items-center gap-4">
        <LuMonitorPlay size={24} />
        <h3 className="font-bold text-xl lg:text-2xl">{t("projectsTitle")}</h3>
        <span className="border-b border-textDark dark:border-textLight flex-1"></span>
      </div>
      <div className="mt-12 flex flex-col gap-10 sm:gap-20">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

        <Link to={"https://github.com/lorenzopanato/Portfolio"} target="_blank">
          <div
            id="contact"
            className="flex gap-1 items-center cursor-pointer transition-all hover:text-primary dark:hover:text-primaryDark hover:gap-2"
          >
            <strong>{t("sourceCodeOfPortfolio")}</strong>
            <LuArrowRight size={20} />
          </div>
        </Link>
      </div>
    </section>
  );
}
