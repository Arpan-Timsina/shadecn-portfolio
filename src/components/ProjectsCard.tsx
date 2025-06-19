import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface projectcardprops {
  value: any;
}
const ProjectCards: React.FC<projectcardprops> = ({ value }) => {
  return (
    // Default to full width, 2 columns on md, 3 columns on xl. Parent container should have flex-wrap and gap.
    <Card className="w-full md:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)] flex flex-col"> {/* Ensure flex-col for consistent height if content varies */}
      <CardHeader>
        <CardTitle>{value.title}</CardTitle> {/* Removed extra space */}

      </CardHeader>
      <CardContent className="flex flex-col gap-4"> {/* Added gap for content spacing */}
        <p className="text-base font-sans text-card-foreground">{value.description}</p> {/* Changed font, ensured text color from card */}
      <div className="w-full flex flex-wrap justify-center gap-2 mt-2"> {/* Ensured tags wrap and have gap */}
        {
          value.tags.map((itm:string, indx:number) => {
            return <Badge variant='outline' key={indx}>{itm}</Badge>
          })
        }
        </div>
      </CardContent>
      <CardFooter className="items-center justify-center flex">
        <Link
          href={value.link}
          target="blank"
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        >
          Visit Project
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCards;
