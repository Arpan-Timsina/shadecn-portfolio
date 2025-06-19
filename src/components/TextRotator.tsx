function TextRotator() { // Removed unused React import
  return (
    <div
      className="py-2 rounded-md flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Text before rotator: Uses Poppins (good for titles), adjusted color */}
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-foreground/90">
        I am a Software Developer &
        <span
          className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden"
        >
          {/* Rotating list: Changed font to Poppins for consistency with other "dynamic" text, color to text-primary */}
          <ul
            className="block text-left font-poppins text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide"
          >
            <li className="text-primary">Student</li>
            <li className="text-primary">ML Enthusiast</li>
            <li className="text-primary">Gamer</li>
            <li className="text-primary">Creator</li>
            <li className="text-primary">Problem Solver</li>
            <li className="text-primary">Tech Nerd</li>
          </ul>
        </span>
      </div>
    </div>
  )
}

export default TextRotator