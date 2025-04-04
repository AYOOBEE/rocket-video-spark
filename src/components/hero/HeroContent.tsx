
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroContentProps {
  onPlayVideo: () => void;
}

const HeroContent = ({ onPlayVideo }: HeroContentProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="lg:w-1/2 lg:pr-6 xl:pr-12 mb-10 lg:mb-0 text-left">
      {/* Label */}
      <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/10 text-xs md:text-sm text-purple-200 mb-4 md:mb-6">
        <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-purple-300" />
        <span>Next-Generation Video Creation</span>
      </div>
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight gradient-text leading-tight">
        AI Video Creation <br className="hidden sm:block" /> in <span className="text-purple-400">Minutes</span>
      </h1>
      
      <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-lg">
        Turn simple text prompts into professional videos with AI-generated characters,
        voiceovers, and cinematic effects.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
        <Button 
          size={isMobile ? "default" : "lg"} 
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 text-white font-medium px-6 py-5 md:px-8 md:py-6 rounded-lg text-sm md:text-lg border-0 shadow-lg shadow-purple-900/30"
        >
          Start Creating Free
        </Button>
        <Button 
          variant="outline" 
          size={isMobile ? "default" : "lg"}
          className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2 px-6 py-5 md:px-8 md:py-6 rounded-lg text-sm md:text-lg backdrop-blur-sm"
          onClick={onPlayVideo}
        >
          <Play size={isMobile ? 16 : 18} className="text-purple-400" /> Watch Demo
        </Button>
      </div>
      
      {/* Social proof */}
      <div className="mt-8 md:mt-12 flex items-center gap-2 text-xs md:text-sm text-gray-400">
        <div className="flex -space-x-2">
          <img src="https://randomuser.me/api/portraits/women/32.jpg" className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-gray-900" alt="User" />
          <img src="https://randomuser.me/api/portraits/men/44.jpg" className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-gray-900" alt="User" />
          <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-gray-900" alt="User" />
        </div>
        <span>Trusted by <span className="text-white font-semibold">100,000+</span> content creators worldwide</span>
      </div>
    </div>
  );
};

export default HeroContent;
