
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useState } from "react";

const CallToAction = () => {
  const [showVideo, setShowVideo] = useState(false);
  
  const handlePlayVideo = () => {
    setShowVideo(true);
  };

  return (
    <section className="py-20 relative overflow-hidden" id="get-started">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-900/20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-8 md:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 text-sm text-purple-200 mb-6 mx-auto">
              <Sparkles className="h-4 w-4 text-purple-300" />
              <span>Limited Time Offer</span>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                Ready to Revolutionize Your Video Creation?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of content creators who are already using RocketVideosAI to produce high-quality videos in minutes, not days.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-r hover:from-purple-700 hover:to-pink-700 text-white font-medium px-8 py-6 text-lg border-0 shadow-lg shadow-purple-900/30"
                >
                  Start Creating For Free
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2 px-8 py-6 text-lg backdrop-blur-sm"
                  onClick={handlePlayVideo}
                >
                  <Play size={18} className="text-purple-400" /> Watch How It Works
                </Button>
              </div>
              
              {showVideo && (
                <div className="mt-8 max-w-3xl mx-auto glass-card p-1.5 glow-effect rounded-xl overflow-hidden">
                  <div className="relative w-full aspect-video">
                    <iframe
                      src="https://player.vimeo.com/video/1070826551?autoplay=1&title=0&byline=0&portrait=0"
                      className="w-full h-full absolute inset-0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="RocketVideosAI Demo"
                      style={{ border: 'none' }}
                    ></iframe>
                  </div>
                </div>
              )}
              
              <p className="mt-6 text-gray-400">
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
