import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      br: {
        translation: {
          subtitle: "Desenvolvedor Front-End",
          aboutTitle: "Sobre mim",
          about:
            "Meu nome é Lorenzo Panato, tenho 19 anos e sou estudante de Engenharia de Software. Desenvolvo <span>interfaces modernas e de alta qualidade</span>, priorizando performance, responsividade, acessibilidade e SEO. Além disso, possuo experiência em <span>projetos colaborativos</span> com desenvolvimento gerenciado por <span>metodologias ágeis</span>. Estou comprometido em buscar constantemente meu aprimoramento e em contribuir de forma significativa em equipes e projetos desafiadores.",
          skillsTitle: "Tecnologias",
          projectsTitle: "Projetos",
          contactTitle: "Contato",
          experienceTitle: "Experiência",
          experience:
            'Durante o período que estive na DBC, participei do programa <span>"Vem Ser DBC"</span>, uma formação intensiva e abrangente que estimula o desenvolvimento pessoal e profissional dos colaboradores. Dentro do programa, fiz parte da trilha de Front-End, onde aprimorei meu conhecimento nas <span>tecnologias mais utilizadas no mercado</span>, como: HTML/CSS, JavaScript, React, Angular, TypeScript, Redux, ContextAPI, Git, entre outras.',
          liveDemo: "Ver Projeto",
          sourceCode: "Código Fonte",
          sourceCodeOfPortfolio: "Código fonte deste portfólio",
          moreInfo: "Mais informações",
          footer:
            "Desenvolvido por <span>Lorenzo Panato</span>. Sinta-se à vontade para contatar-me por e-mail em <span>lorenzohpanato@gmail.com</span> para qualquer convite ou oportunidade.",
        },
      },
      us: {
        translation: {
          subtitle: "Frontend Developer",
          aboutTitle: "About me",
          about:
            "My name is Lorenzo Panato, I'm 19 years old, and I'm a Software Engineering student. I develop <span>modern and high-quality interfaces</span>, prioritizing performance, responsiveness, accessibility, and SEO. Furthermore, I have experience in <span>collaborative projects</span> with development managed by <span>agile methodologies</span>. I am committed to constantly looking for personal improvements and to contributing significantly to teams and challenging projects.",
          skillsTitle: "Skills",
          projectsTitle: "Projects",
          contactTitle: "Contact",
          experienceTitle: "Experience",
          liveDemo: "Live Demo",
          sourceCode: "Source Code",
          sourceCodeOfPortfolio: "Source code of this portfolio",
          moreInfo: "More info",
          experience:
            'During my time at DBC, I participated in a program called <span>"Vem ser DBC"</span>, an intensive and complete training that simulates the personal and professional development of colaborators. In the program, I was part of the Frontend trail, where I improved my knowledge of <span>the most used technologies on the market</span>, such as: HTML/CSS, JavaScript, React, Angular, TypeScript, Redux, ContextAPI, Git, etc.',
          footer:
            "Developed by <span>Lorenzo Panato</span>. Feel free to contact me via email at <span>lorenzohpanato@gmail.com</span> for any invitation or opportunity.",
        },
      },
    },
    lng: "us",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
