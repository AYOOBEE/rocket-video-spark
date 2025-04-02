
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden pt-24 pb-20">
      {/* Gradient elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 -left-24 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              AI-Powered Video Creation in Minutes
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Turn simple text prompts into professional videos with characters, 
              voiceovers, and cinematic effects using the power of AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-8 py-3 rounded-lg text-lg"
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white flex items-center gap-2 px-8 py-3 rounded-lg text-lg"
              >
                <Play size={18} /> Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 backdrop-blur-sm z-10 rounded-xl"></div>
              <video 
                className="w-full h-auto rounded-xl relative z-0" 
                autoPlay 
                muted 
                loop 
                playsInline
                poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -left-10 top-10 bg-black/70 backdrop-blur-md rounded-lg p-3 border border-white/10 shadow-lg animate-bounce">
              <div className="text-xs text-gray-400">AI Generated</div>
              <div className="font-semibold text-white">In just 45 seconds</div>
            </div>
            <div className="absolute -right-5 bottom-20 bg-black/70 backdrop-blur-md rounded-lg p-3 border border-white/10 shadow-lg animate-bounce delay-300">
              <div className="text-xs text-gray-400">Voice cloned</div>
              <div className="font-semibold text-white">15+ languages</div>
            </div>
          </div>
        </div>
        
        {/* Clients/Brands */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-gray-400 mb-6">TRUSTED BY INNOVATIVE TEAMS AROUND THE WORLD</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-70">
            <div className="h-8 w-auto grayscale hover:grayscale-0 transition-all">
              <svg className="h-full w-auto" viewBox="0 0 124 34" fill="white">
                <path d="M11.5 3.5c-4.4 0-8 3.6-8 8s3.6 8 8 8h16v-16h-16zm21 0v16h8c4.4 0 8-3.6 8-8s-3.6-8-8-8h-8z"/>
              </svg>
            </div>
            <div className="h-8 w-auto grayscale hover:grayscale-0 transition-all">
              <svg className="h-full w-auto" viewBox="0 0 124 34" fill="white">
                <path d="M26 18.5c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5z"/>
                <path d="M48 22.5c0-1.9-1.6-3.5-3.5-3.5s-3.5 1.6-3.5 3.5 1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5z"/>
                <path d="M63.5 9h-9c-1.9 0-3.5 1.6-3.5 3.5v9c0 1.9 1.6 3.5 3.5 3.5h9c1.9 0 3.5-1.6 3.5-3.5v-9c0-1.9-1.6-3.5-3.5-3.5z"/>
              </svg>
            </div>
            <div className="h-8 w-auto grayscale hover:grayscale-0 transition-all">
              <svg className="h-full w-auto" viewBox="0 0 124 34" fill="white">
                <rect x="10" y="9" width="24" height="16" rx="2"/>
                <rect x="40" y="9" width="16" height="16" rx="8"/>
                <rect x="62" y="9" width="24" height="16" rx="2"/>
              </svg>
            </div>
            <div className="h-8 w-auto grayscale hover:grayscale-0 transition-all">
              <svg className="h-full w-auto" viewBox="0 0 124 34" fill="white">
                <circle cx="19" cy="17" r="8"/>
                <rect x="33" y="9" width="16" height="16" rx="2"/>
                <path d="M73 9h-10c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V11c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
