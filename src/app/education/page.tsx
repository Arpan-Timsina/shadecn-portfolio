import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { School } from "lucide-react";

const educationPage = () => {
  return (
    // EDUCATION PAGE
    <main className="container mx-auto min-h-screen px-4 py-8 pt-16 flex flex-col items-start gap-8"> {/* Standardized top padding */}
      <Badge className="gap-2 self-start">
        <School className="h-5 w-5" />
        Education
      </Badge>

      <div className="flex flex-col gap-5 w-full">
        <Heading>My Education</Heading>
      </div>

      {/* Timeline Container */}
      <div className="w-full flex flex-col gap-8 mt-4"> {/* Added gap for multiple entries if any */}
        {/* Single Education Entry */}
        <div className="w-full flex flex-col sm:flex-row"> {/* Responsive flex direction */}
          <div className="w-full sm:w-1/4 font-sans text-base sm:text-lg text-foreground/80 py-2 sm:py-0 sm:pr-4 text-left sm:text-right"> {/* Themed date */}
            January 2019 - Present {/* Changed "running" to "Present" for clarity */}
          </div>
          <div className="relative w-full sm:w-3/4 border-l-4 border-primary p-4 sm:pl-8 education_point"> {/* Themed border, adjusted padding */}
            <h2 className="text-xl sm:text-2xl font-poppins text-heading mb-2"> {/* Themed institution/degree heading */}
              Bachelor of Science in Computer Science and Information Technology, <br /> Tribhuvan University
            </h2>
            <p className="font-sans text-sm sm:text-base text-foreground leading-relaxed"> {/* Themed description */}
              I am currently studying Bachelor of Science in Computer Science and Information Technology at Academia International College.
              This program has been instrumental in sculpting my understanding of computer science, offering a comprehensive curriculum that delves into both theoretical foundations and practical applications.
            </p>
          </div>
        </div>
        {/* More entries could be added here following the same structure */}
      </div>
    </main>
  );
};

export default educationPage;
