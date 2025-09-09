import Aboutfooter from "@/components/Aboutfooter";
import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { User2 } from "lucide-react"; // Removed unused Circle, Heart
const page = () => {
  // Removed unused 'items' array for hobbies

  return (
    // ABOUT PAGE
    <main className="container mx-auto min-h-screen px-4 py-8 pt-16 flex flex-col items-start gap-8"> {/* Standardized top padding */}
      <Badge className="gap-2 self-start"> {/* Ensure badge is at the start */}
        <User2 className="h-5 w-5" />
        About me
      </Badge>

      <div className="flex flex-col gap-5 w-full"> {/* Increased gap */}
        <Heading>
          Software Developer And Web <br /> Developer
        </Heading>

        <p className="font-sans text-lg sm:text-xl w-full text-foreground leading-relaxed"> {/* Changed font, color, size, leading */}
          I am a Full Stack Web Developer situated in Kathmandu, Nepal. My work
          consists of creating and developing web applications with pixel
          perfect design and seemlessly integrating frontend with backend
          architecture.
          <br /> {/* Use self-closing br for JSX consistency */}
          Beyond just writing code, I am deeply invested in staying updated with
          the latest trends and best practices in frontend development. Driven
          by a relentless pursuit of excellence and a genuine love for crafting
          exceptional user experiences, I&apos;m excited to collaborate, innovate,
          and contribute to projects that make a meaningful impact in the
          digital landscape. Let&apos;s build something incredible together!
        </p>
      </div>

      {/* Footer section taking full width and centering its content if needed */}
      <div className="w-full mt-8"> {/* Added margin-top for separation */}
        <Aboutfooter />
      </div>
    </main>
  );
};

export default page;
