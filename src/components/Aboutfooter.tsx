import {Circle, Dna, Globe2, Languages} from "lucide-react"

const Aboutfooter = () => {


    const items = [
        {name:"Language", answer:"English", icon:<Languages className="h-8 w-8" />}, // Reduced size
        {name:"Nationality",answer:"Nepali", icon:<Globe2   className="h-6 w-6" />}, // Reduced size
        {name:"Gender",answer:"Male", icon:<Dna  className="h-6 w-6" />}, // Reduced size
    ]


    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"> {/* Responsive grid layout */}
        {
            items.map((val, indx) => {
              return(
                <div className="flex flex-col items-start gap-2 p-4 rounded-lg bg-secondary/50 dark:bg-secondary/20" key={indx}> {/* Added bg for subtle card look */}
                  <div className="flex items-center gap-3">
                    <div className="text-primary"> {/* Icon color */}
                      {val.icon}
                    </div>
                    <h2 className="text-xl font-poppins text-heading font-semibold icon_underline relative"> {/* Changed h1 to h2, adjusted classes */}
                      {val.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-lg text-foreground/90 pl-10"> {/* Adjusted text color and padding */}
                    <Circle className="h-3 w-3 text-primary" /> {/* Explicitly color the circle icon */}
                    {val.answer}
                  </div>
                </div>
              )
            })
          }
        </div>
    )
}

export default Aboutfooter;