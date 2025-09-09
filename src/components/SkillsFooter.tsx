import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";


interface MyComponentProps{
    items:Array<{ alt: string; img: any }>
}

const SkillsFooter:React.FC<MyComponentProps> = ({items}) => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-4 w-full py-4"> {/* Added flex-wrap, gap, and padding */}
      { items && items.map((val, indx) => {
        return (
          <div className="p-3 flex flex-col items-center gap-2 bg-secondary/30 dark:bg-secondary/10 rounded-lg w-28 text-center" key={indx}> {/* Adjusted padding, added bg, rounded, fixed width, text-center */}
            <Image src={val?.img} alt={val?.alt} className="rounded-md w-16 h-16 object-contain" /> {/* Adjusted image style, size, and added object-contain */}
            <Badge variant='outline' className="text-xs px-2 py-0.5"> {/* Adjusted badge padding and text size, removed fixed h/w */}
              {val?.alt}
            </Badge>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsFooter;
