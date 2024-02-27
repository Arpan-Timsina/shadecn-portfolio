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
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <Layers className="h-5 w-5" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Projects</Heading>

        <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
        Welcome to my showcase of innovative projects, where creativity meets technical prowess! Each creation embodies a journey of problem-solving and continuous learning. Dive in and explore the fruits of my passion and expertise in action
        </p>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-2 max-lg:flex-col overflow-hidden">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
