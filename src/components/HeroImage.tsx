import logo from "../../public/programmer.png";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image
          src={logo}
          alt="logo"
          loading="eager"
          priority
          width={1000} // Intrinsic width for aspect ratio
          height={1000} // Intrinsic height for aspect ratio
          className="w-full h-auto rounded-lg shadow-lg object-cover" // Added styling
        />
        </>
    )
}
export default HeroImage