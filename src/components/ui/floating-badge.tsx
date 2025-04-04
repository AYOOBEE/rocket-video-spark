
import { useIsMobile } from "@/hooks/use-mobile";

interface FloatingBadgeProps {
  text: string;
  subtext: string;
  position?: "left" | "right";
}

const FloatingBadge = ({ 
  text, 
  subtext, 
  position = "left" 
}: FloatingBadgeProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div 
      className={`absolute ${position === "left" ? "-left-5 sm:-left-5" : "-right-5 sm:-right-5"} top-5 
                 bg-black/70 backdrop-blur-md rounded-lg p-2 md:p-3 border border-purple-500/30 
                 shadow-lg animate-bounce ${isMobile ? "scale-75" : ""}`}
    >
      <div className="text-xs text-gray-400">{text}</div>
      <div className="font-semibold text-white text-sm md:text-base">{subtext}</div>
    </div>
  );
};

export default FloatingBadge;
