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
    <>
      {links.map((itm, indx) => {
        return (
          <Link key={indx} target="blank"
            href={itm.link}
            className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
          >{itm.icon}</Link>
        );
      })}
    </>
  );
};

export default SocialLinks;
