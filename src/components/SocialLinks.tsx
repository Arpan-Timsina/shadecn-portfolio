import { cn } from "@/lib/utils";
import { Facebook, Linkedin, Twitter, ExternalLink } from "lucide-react";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const SocialLinks = () => {
  const links = [
    { name: "Facebook", link: "https://www.facebook.com/arpan.timsina.1923", icon: <Facebook  /> },
    // { name: "Github", link: "https://github.com/Taquiimam14", icon: <Twitter /> },
    { name: "Linkedin", link: "https://www.linkedin.com/in/arpan-timsina-a892721a1/", icon: <Linkedin /> },
 
  ];
  return (
    <div className="flex gap-3"> {/* Added wrapper div for horizontal spacing */}
      {links.map((itm, indx) => {
        return (
          <Link
            key={indx}
            target="_blank" // Ensure _blank for external links
            rel="noopener noreferrer" // Security best practice for _blank links
            href={itm.link}
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "text-foreground/80 hover:text-primary hover:bg-primary/10 active:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md" // Consistent styling with Navbar links
            )}
          >
            {itm.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialLinks;
