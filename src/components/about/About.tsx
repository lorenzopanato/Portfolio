import { LuInfo } from "react-icons/lu";
import { useIsVisible } from "../../utils/hooks";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);
  const { t, i18n } = useTranslation();

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
        <h3 className="font-bold text-xl lg:text-2xl">{t("aboutTitle")}</h3>
        <span className="border-b border-textDark flex-1"></span>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: t("about", { interpolation: { escapeValue: false } }),
        }}
        className="about text-justify mt-6 text-sm lg:text-base"
      />
      <h4 className="mt-8 mb-2 font-semibold text-zinc-700 text-[1.1rem]">
        {t("experienceTitle")}
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
              {i18n.language === "br" ? "12/2023 - 05/2024" : "December 2023 - May 2024"}
              
            </span>
          </div>
          <div className="flex gap-10">
            <div
              dangerouslySetInnerHTML={{
                __html: t("experience", {
                  interpolation: { escapeValue: false },
                }),
              }}
              className="about text-justify text-sm lg:text-base"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
