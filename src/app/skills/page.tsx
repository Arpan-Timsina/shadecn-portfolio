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
    <main className="container mx-auto min-h-screen px-4 py-8 pt-16 flex flex-col items-start gap-8"> {/* Standardized top padding */}
      <Badge className="gap-2 self-start">
        <Lightbulb className="h-5 w-5" />
        My Skills
      </Badge>

      <div className="flex flex-col gap-6 w-full"> {/* Increased gap */}
        <Heading>My Technical Experience/Skills.</Heading>

        <p className="font-sans text-lg sm:text-xl w-full text-foreground leading-relaxed"> {/* Themed paragraph */}
          I possess a solid understanding of HTML5, CSS3, JavaScript (JS),
          TypeScript (TS), and React, along with responsive design principles.
          Specializing in building web applications and sites, I excel in
          utilizing JavaScript, TypeScript, React, and Next.js. With expertise
          in Django, I am adept at delivering comprehensive web solutions.
        </p>

        <section className="flex flex-col gap-4"> {/* Section for languages */}
          <h2 className="text-2xl sm:text-3xl font-poppins text-heading font-semibold flex items-center text_underline relative"> {/* Themed heading */}
            Programming Languages
          </h2>
          {/* SkillsFooter now handles its own wrapping and padding */}
          <SkillsFooter items={language} />
        </section>

        <section className="flex flex-col gap-4"> {/* Section for frameworks */}
          <h2 className="text-2xl sm:text-3xl font-poppins text-heading font-semibold flex items-center text_underline relative"> {/* Themed heading */}
            Framework/Libraries and Version Control
          </h2>
          {/* SkillsFooter now handles its own wrapping and padding */}
          <SkillsFooter items={framework} />
        </section>
      </div>
    </main>
  );
};

export default skillPage;
