
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  return (
    <div className="relative overflow-hidden pt-24 pb-20 min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-800/20 via-gray-900 to-gray-900 pointer-events-none"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-12 w-24 h-24 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0 text-left">
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 text-sm text-purple-200 mb-6">
              <Sparkles className="h-4 w-4 text-purple-300" />
              <span>Next-Generation Video Creation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight gradient-text leading-tight">
              AI Video Creation <br /> in <span className="text-purple-400">Minutes</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              Turn simple text prompts into professional videos with AI-generated characters,
              voiceovers, and cinematic effects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 text-white font-medium px-8 py-6 rounded-lg text-lg border-0 shadow-lg shadow-purple-900/30"
              >
                Start Creating Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2 px-8 py-6 rounded-lg text-lg backdrop-blur-sm"
                onClick={handlePlayVideo}
              >
                <Play size={18} className="text-purple-400" /> Watch Demo
              </Button>
            </div>
            
            {/* Social proof */}
            <div className="mt-12 flex items-center gap-2 text-sm text-gray-400">
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/women/32.jpg" className="w-8 h-8 rounded-full border-2 border-gray-900" alt="User" />
                <img src="https://randomuser.me/api/portraits/men/44.jpg" className="w-8 h-8 rounded-full border-2 border-gray-900" alt="User" />
                <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-8 h-8 rounded-full border-2 border-gray-900" alt="User" />
              </div>
              <span>Trusted by <span className="text-white font-semibold">100,000+</span> content creators worldwide</span>
            </div>
          </div>
          
          {/* Video section */}
          <div className="lg:w-1/2 relative">
            <div className="rounded-xl overflow-hidden relative group z-0">
              {showVideo ? (
                <div className="glass-card p-1.5 glow-effect">
                  <div className="relative overflow-hidden rounded-lg aspect-video w-full">
                    <iframe
                      src="https://player.vimeo.com/video/1070826551?autoplay=1&loop=1&title=0&byline=0&portrait=0"
                      className="w-full h-full absolute inset-0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="RocketVideosAI Demo"
                      style={{ border: 'none' }}
                    ></iframe>
                  </div>
                </div>
              ) : (
                <div className="glass-card p-1.5 glow-effect">
                  <div className="relative overflow-hidden rounded-lg aspect-video">
                    {/* Vimeo thumbnail */}
                    <div 
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage: `url('https://i.vimeocdn.com/video/1070826551_640x360.jpg')`,
                        aspectRatio: '16/9'
                      }}
                    >
                      {/* Play button overlay */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                        onClick={handlePlayVideo}
                      >
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors">
                          <Play className="w-6 h-6 text-gray-900 fill-gray-900" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Floating badge */}
            <div className="absolute -left-5 top-5 bg-black/70 backdrop-blur-md rounded-lg p-3 border border-purple-500/30 shadow-lg animate-bounce">
              <div className="text-xs text-gray-400">AI Generated</div>
              <div className="font-semibold text-white">In just 45 seconds</div>
            </div>
          </div>
        </div>
        
        {/* Clients/Brands */}
        <div className="mt-24 border-t border-white/5 pt-8">
          <p className="text-center text-sm text-gray-500 mb-6">TRUSTED BY INNOVATIVE TEAMS</p>
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
