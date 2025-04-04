
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CallToAction = () => {
  const [showVideo, setShowVideo] = useState(false);
  const isMobile = useIsMobile();
  
  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <section className="py-12 md:py-20 relative overflow-hidden" id="get-started">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-6 md:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 text-sm text-purple-200 mb-6 mx-auto">
              <Sparkles className="h-4 w-4 text-purple-300" />
              <span>Limited Time Offer</span>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 gradient-text">
                Ready to Revolutionize Your Video Creation?
              </h2>
              
              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
                Join thousands of content creators who are already using RocketVideosAI to produce high-quality videos in minutes, not days.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-10">
                <Button 
                  size={isMobile ? "default" : "lg"}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 text-white font-medium px-6 py-5 md:px-8 md:py-6 text-sm md:text-lg border-0 shadow-lg shadow-purple-900/30"
                >
                  Start Creating For Free
                </Button>
                <Button 
                  variant="outline" 
                  size={isMobile ? "default" : "lg"}
                  className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2 px-6 py-5 md:px-8 md:py-6 text-sm md:text-lg backdrop-blur-sm"
                  onClick={handlePlayVideo}
                >
                  <Play size={16} className="text-purple-400" /> Watch How It Works
                </Button>
              </div>
              
              {showVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
                  <div className={`relative w-full ${isMobile ? "max-w-full" : "max-w-3xl"} mx-auto rounded-xl overflow-hidden shadow-2xl`}>
                    <button 
                      onClick={handleCloseVideo}
                      className="absolute right-3 top-3 z-50 p-2 bg-black/50 rounded-full text-white hover:bg-black/70"
                    >
                      <X size={20} />
                    </button>
                    
                    <div className="browser-window rounded-xl overflow-hidden border border-purple-900/40">
                      {/* Browser header */}
                      {!isMobile && (
                        <div className="bg-gray-900 p-2 px-4 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <div className="bg-gray-800 rounded-md px-3 py-1 text-xs text-gray-400 flex-1 max-w-xs">
                              rocketvideosai.com
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <div className="w-4 h-4 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="w-4 h-4 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Video content */}
                      <div className="relative w-full bg-black">
                        <div className="relative w-full aspect-video">
                          <iframe
                            src="https://player.vimeo.com/video/1070826551?autoplay=1&title=0&byline=0&portrait=0&background=1"
                            className="w-full h-full absolute inset-0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            title="RocketVideosAI Demo"
                            style={{ border: 'none' }}
                          ></iframe>
                          
                          {/* Video Controls Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <div className="flex items-center justify-between text-white">
                              <div className="flex items-center gap-4">
                                <button className="hover:text-purple-300 transition-colors">
                                  <Play className="w-6 h-6 fill-current" />
                                </button>
                                <span className="text-sm">00:00 / 01:45</span>
                              </div>
                              <div className="hidden md:flex items-center gap-4">
                                <button className="hover:text-purple-300 transition-colors">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5L8.25 12l7.5-7.5" />
                                  </svg>
                                </button>
                                <button className="hover:text-purple-300 transition-colors">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                  </svg>
                                </button>
                                <button className="hover:text-purple-300 transition-colors">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="4" y="5" width="16" height="14" rx="2" />
                                    <path d="M19 3v4" />
                                    <path d="M15 3v4" />
                                    <path d="M9 3v4" />
                                    <path d="M5 3v4" />
                                    <path d="M20 15l-5 5" />
                                    <path d="M15 15l5 5" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <p className="mt-6 text-sm md:text-base text-gray-400">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
