import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";

const projectsPage = () => {
  // PROJECTS DATA
  const Projects = [
    { 
      title: "Bingo Game using Django Channels ",
      description:
        "Real Time Multiplayer Bingo Game Using Django Channels and Javascript",
      tags: [ "Django", "Python", "Channels"],
      link: "https://github.com/Arpan-Timsina/django_channels_bingo_game/",
    },
    {
      title: "Image to Text Mobile Application",
      description:
        "ImagetoText is a simple OCR mobile application that displays text by reading image",
      tags: ["Ionic","React", "Typescript", "Django"],
      link: "https://github.com/Arpan-Timsina/imgtxtionic",
    }
  ];

  return (
    // PROJECT PAGE
    <main className="container mx-auto min-h-screen px-4 py-8 pt-16 flex flex-col items-start gap-8"> {/* Standardized top padding */}
      <Badge className="gap-2 self-start">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>

      <div className="flex flex-col gap-5 w-full"> {/* Increased gap */}
        <Heading>My Projects</Heading>

        <p className="font-sans text-lg sm:text-xl w-full text-foreground leading-relaxed"> {/* Themed paragraph */}
        Welcome to my showcase of innovative projects, where creativity meets technical prowess! Each creation embodies a journey of problem-solving and continuous learning. Dive in and explore the fruits of my passion and expertise in action.
        </p>
      </div>

      {/* Container for Project Cards */}
      <div className="w-full flex flex-wrap justify-center sm:justify-start gap-6 mt-4"> {/* Adjusted gap and added mt */}
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} />;
        })}
      </div>
    </main>
  );
};

export default projectsPage;
