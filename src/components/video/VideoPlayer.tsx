
import { Play } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface VideoPlayerProps {
  thumbnail?: string;
  videoUrl?: string;
  onPlay?: () => void;
  isPlaying?: boolean;
}

const VideoPlayer = ({ 
  thumbnail = "/lovable-uploads/9e438371-5ee4-4b69-8d87-5f993032a4c2.png",
  videoUrl = "https://player.vimeo.com/video/1070826551",
  onPlay,
  isPlaying = false
}: VideoPlayerProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="browser-window rounded-xl overflow-hidden shadow-2xl border border-purple-900/40">
      {/* Browser header */}
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
      
      {/* Video content */}
      {isPlaying ? (
        <div className="relative w-full bg-black">
          <div className="relative aspect-video w-full">
            <iframe
              src={`${videoUrl}?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1`}
              className="w-full h-full absolute inset-0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="RocketVideosAI Demo"
              style={{ border: 'none' }}
            ></iframe>
            
            <VideoControls />
          </div>
        </div>
      ) : (
        <div 
          className="relative aspect-video w-full bg-cover bg-center"
          style={{backgroundImage: `url(${thumbnail})`}}
        >
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40"
            onClick={onPlay}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 transition-transform hover:scale-110">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white" />
            </div>
          </div>
          
          <VideoControls />
        </div>
      )}
    </div>
  );
};

const VideoControls = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
      <div className="flex items-center justify-between text-white">
        <div className="flex items-center gap-4">
          <button className="hover:text-purple-300 transition-colors">
            <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />
          </button>
          <span className="text-xs md:text-sm">00:00 / 01:45</span>
        </div>
        {!isMobile && (
          <div className="flex items-center gap-4">
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
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
