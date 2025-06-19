"use client"
import { cn } from "@/lib/utils";
import {
  School,
  Home,
  Layers,
  Lightbulb,
  PackagePlus,
  Phone,
  User2,
} from "lucide-react";
import { buttonVariants } from "./ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const items = [
    { name: "Home", icon: <Home /> , link: "/"},
    { name: "About", icon: <User2 />,link: "/about" },
    { name: "Skills", icon: <Lightbulb />, link: "/skills" },
    { name: "Projects", icon: <Layers />, link: "/projects" },
    { name: "School", icon: <School />, link: "/education" },
    { name: "Contact", icon: <Phone />, link: "/contact" },
  ];

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 w-full flex justify-center items-center py-3 px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out",
      scrolling ? "bg-secondary shadow-md" : "bg-transparent",
    )}>
      <div className="flex gap-2 max-sm:gap-1"> {/* Adjusted gap for responsiveness */}
        {items.map((itm) => {
          return (
            <TooltipProvider key={itm.name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={itm.link}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "text-foreground hover:text-primary hover:bg-primary/10 active:text-primary focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-md" // Adjusted styling for colors and states
                    )}
                  >
                    {itm.icon}
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-background border-border text-foreground">
                  <p>{itm.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
