import { Github } from "lucide-react";
import Link from "next/link";
// Removed unused cn import

const GithubBtn = () => {
  return (
    <Link
      href={"https://github.com/Arpan-Timsina"}
      target="_blank" // Use _blank for consistency
      rel="noopener noreferrer" // Security best practice
      className=
        "animate-pulse absolute left-0 bottom-5 flex items-center justify-center gap-2 z-50 w-fit h-fit p-3 shadow-lg border-t border-r border-b border-border rounded-r-full bg-background hover:bg-primary/10 hover:text-primary text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 hover:animate-none transition-colors duration-200"
      // Theme-aligned colors and hover. Note: cn() was removed as it's not strictly needed for a single static string.
    >
      <Github className="h-6 w-6" /> {/* Adjusted icon size */}
      <span className="font-sans text-lg sm:text-xl">Github</span> {/* Changed font, adjusted size */}
    </Link>
  );
};

export default GithubBtn;
