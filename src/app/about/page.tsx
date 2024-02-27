import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { Circle, Heart, User2 } from "lucide-react";
const page = () => {
  const items = [
    { hobby: "coding" },
    { hobby: "playing games" },
    { hobby: "Watching Anima" },
    { hobby: "Tect Blog writing" },
    { hobby: "creating Cool Projects" },
  ];

  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <User2 className="h-5 w-5" />
        About me
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>
          Software Developer And Web <br /> Developer
        </Heading>

        <p className=" font-poppins  text-xl w-full text-primary max-sm:text-lg">
          I am a Full Stack Web Developer situated in Kathmandu, Nepal. My work
          consists of creating and developing web applications with pixel
          perfect design and seemlessly integrating frontend with backend
          architecture.
          <br></br>
          Beyond just writing code, I am deeply invested in staying updated with
          the latest trends and best practices in frontend development. Driven
          by a relentless pursuit of excellence and a genuine love for crafting
          exceptional user experiences, I`&apos;`m excited to collaborate, innovate,
          and contribute to projects that make a meaningful impact in the
          digital landscape. Let`&apos;`s build something incredible together!
        </p>
      </div>
      <div className="w-full flex flex-row justify-between max-lg:flex-col ">
        <Aboutfooter />
      </div>
    </div>
  );
};

export default page;
