
import { useState } from "react";
import HeroContent from "./hero/HeroContent";
import VideoPlayer from "./video/VideoPlayer";
import FloatingBadge from "./ui/floating-badge";
import BrandsSection from "./hero/BrandsSection";
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const isMobile = useIsMobile();

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  return (
    <div className="relative overflow-hidden pt-16 md:pt-24 pb-16 md:pb-20 min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800/20 via-gray-900 to-gray-900 pointer-events-none"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-16 md:w-24 h-16 md:h-24 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-12 w-24 md:w-32 h-24 md:h-32 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-48 md:h-64 bg-purple-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <HeroContent onPlayVideo={handlePlayVideo} />
          
          {/* Video section */}
          <div className="lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="rounded-xl overflow-hidden relative group z-0">
              <VideoPlayer 
                isPlaying={showVideo}
                onPlay={handlePlayVideo}
              />
            </div>
            
            {/* Floating badge */}
            <FloatingBadge 
              text="AI Generated" 
              subtext="In just 45 seconds" 
            />
          </div>
        </div>
        
        {/* Clients/Brands */}
        <BrandsSection />
      </div>
    </div>
  );
};

export default HeroSection;
