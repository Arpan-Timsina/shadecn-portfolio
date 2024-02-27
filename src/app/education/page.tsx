import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { School } from "lucide-react";

const educationPage = () => {
  return (
    // ABOUT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge className=" gap-2">
        <School className="h-5 w-5" />
        Education
      </Badge>
      <div className="flex flex-col gap-3">
        <Heading>My Education</Heading>
      </div>
      <div className="w-full h-fit flex flex-col">
        <div className="w-full h-fit flex">
          <div className="w-1/4 font-rubik flex items-center justify-evenly text-lg max-sm:text-base ">
            {" "}
            January 2019- running
          </div>
          <div className="relative w-3/4 border-l-4 border-l-[#3c3c3c] p-4 gap-3 education_point ">
            <div className="text-2xl font-rubik max-sm:text-xl">
            Bachelor of Science in Computer Science and Information Technology, <br /> Tribhuvan University
          
            </div>
            <p className=" font-poppins text-base w-full text-primary  max-sm:text-xs">
                I am currently studying Bachelor of Science in Computer Science and Information Technology at Academia International College. 
                This program has been instrumental in sculpting my understanding of computer science, offering a comprehensive curriculum that delves into both theoretical foundations and practical applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default educationPage;
