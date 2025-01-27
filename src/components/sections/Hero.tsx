import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <div className="relative h-screen w-full bg-[#0B5DD0]">
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-center px-8 md:px-16 lg:px-24 animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl">
          Building What{" "}
          <span className="font-cursive italic relative">
            Matters
            <div className="absolute -bottom-2 left-0 w-full">
              <svg height="12" width="100%" className="text-[#FF4A17]">
                <line x1="0" y1="2" x2="100%" y2="2" stroke="currentColor" strokeWidth="4"/>
              </svg>
            </div>
          </span>
          {" "}To You
        </h1>
        
        <div className="mt-12 flex items-center gap-2 text-white hover:translate-x-2 transition-transform">
          <span className="text-lg uppercase tracking-wider">What do you want to build?</span>
          <ArrowRight className="h-6 w-6" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white uppercase text-sm tracking-widest rotate-90 origin-left transform translate-y-8">
            Scroll
          </span>
          <div className="w-[1px] h-16 bg-white/50" />
        </div>
      </div>
    </div>
  );
}