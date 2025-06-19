import TextRotator from "./TextRotator";

 
const HeroTexts = () => {
 
  
  return (
    <>
      <h3 className="font-poppins text-xl sm:text-2xl text-foreground/80" >My Name is</h3> {/* Adjusted size & color */}
      <h1 className="font-poppins text-5xl sm:text-6xl md:text-7xl lg:text-8xl name_underline text-heading leading-tight sm:leading-tight lg:leading-tight" > {/* Adjusted responsive font sizes */}
        Arpan<br /> Timsina
      </h1>
      <TextRotator/> {/* Assuming TextRotator styles are handled globally or within its own component file */}
    </>
  );
};
export default HeroTexts