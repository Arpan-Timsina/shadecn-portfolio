

import SocialLinks from "@/components/SocialLinks";
import HeroTexts from "@/components/HeroTexts";
import HeroImage from "@/components/HeroImage";
import GithubBtn from "@/components/GithubBtn";
import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";

export const siteConfig = {
  name: "Arpan Timsina",
  description: "I am a Software Developer",
  ogImage: "",
  url: "",
}
export default function Home() {
  return (
    <main className="container mx-auto min-h-screen flex flex-col items-center justify-center px-4 py-8 pt-16"> {/* Standardized top padding */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
        {/* LEFT SIDE - Text Content */}
        <div className="flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-left order-2 lg:order-1 lg:w-1/2">
          <HeroTexts />
          <SocialLinks /> {/* Assuming SocialLinks has its own padding/margins or we adjust its container if needed */}
          <DownLoadResumeBtn />
        </div>

        {/* RIGHT SIDE - Image */}
        <div className="relative w-full max-w-md lg:max-w-none lg:w-1/2 flex justify-center order-1 lg:order-2">
          {/* IMAGE - Ensure HeroImage is responsive within this container */}
          <HeroImage />
        </div>
      </div>
      {/* GITHUB BUTTON - Will address its positioning later, might need to move into the flex flow or adjust its absolute positioning based on new layout */}
      <GithubBtn />
    </main>
  );
}
