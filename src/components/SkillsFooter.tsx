import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";


interface MyComponentProps{
    items:Array<{ alt: string; img: any }>
}

const SkillsFooter:React.FC<MyComponentProps> = ({items}) => {
  return (
    <>
      { items && items.map((val, indx) => {
        return (
          <div className="p-4 flex flex-col items-center gap-2" key={indx}>
            <Image src={val?.img} alt={val?.alt} className="rounded-full w-auto max-h-20" />
            <Badge variant='outline' className="h-2 w-2 pr-12 ">{val?.alt}</Badge>
          </div>
        );
      })}
    </>
  );
};

export default SkillsFooter;
