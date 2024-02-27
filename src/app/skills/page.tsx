import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFooter";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import scss from "../../../public/scss.png";
import js from "../../../public/js.png";
import ts from "../../../public/ts.png";
import react from "../../../public/react.png";
import nextjs from "../../../public/nextjs.jpeg";
import cplus from "../../../public/c++.jpeg";
import tailwind from "../../../public/tailwindcss.png";
import github from "../../../public/github.png";
import vscode from "../../../public/vscode.png";
import django from "../../../public/django-icon.png";
const skillPage = () => {
  const language = [
    { alt: "HTML", img: html },
    { alt: "CSS", img: css },
    { alt: "JavaScript", img: js },
    { alt: "TypeScript", img: ts },
  ];
  const framework = [
    { alt: "React", img: react },
    { alt: "Nextjs", img: nextjs },
    { alt: "SCSS", img: scss },
    { alt: "Tailwind", img: tailwind },
    { alt: "Github", img: github },
    { alt: "VSCode", img: vscode },
    { alt: "Django", img: django },
  ];

  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Technical Experience/Skills.</Heading>

        <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
          I possess a solid understanding of HTML5, CSS3, JavaScript (JS),
          TypeScript (TS), and React, along with responsive design principles.
          Specializing in building web applications and sites, I excel in
          utilizing JavaScript, TypeScript, React, and Next.js. With expertise
          in Django, I am adept at delivering comprehensive web solutions.
        </p>
        <div className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Programming Languages
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={language} />
          </div>
        </div>
        <div className="block">
          <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl">
            Framework/Libraries and Version Control
          </h1>
          <div className="w-full h-fit flex-row flex justify-between items-center">
            <SkillsFooter items={framework} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default skillPage;
