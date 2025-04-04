
import { Check, X } from "lucide-react";
import { useIsMobile, useBreakpoint } from "@/hooks/use-mobile";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ComparisonTable = () => {
  const isMobile = useIsMobile();
  const isTablet = useBreakpoint(1024);
  
  // Define features data for reusability
  const features = [
    { feature: "AI Storyboarding", rocket: true, pictory: false, synthesia: true, invideo: true },
    { feature: "Voiceover Cloning", rocket: true, pictory: false, synthesia: true, invideo: false },
    { feature: "Animation Sequences", rocket: true, pictory: false, synthesia: false, invideo: true },
    { feature: "Custom Branding", rocket: true, pictory: false, synthesia: false, invideo: true },
    { feature: "Unlimited Projects", rocket: true, pictory: false, synthesia: false, invideo: false },
  ];

  // Determine which columns to display based on screen size
  const competitors = [
    { name: "RocketVideosAI", price: "Starting from Free", key: "rocket", highlight: true },
    { name: "Pictory AI", price: "$19/month", key: "pictory", highlight: false },
    { name: "Synthesia", price: "$30/month", key: "synthesia", highlight: false },
    { name: "InVideo", price: "$15/month", key: "invideo", highlight: false }
  ];

  // For mobile view, determine which competitor to show besides RocketVideosAI
  const displayCompetitors = isMobile 
    ? [competitors[0], competitors[1]] // Only show RocketVideosAI and Pictory AI on mobile
    : isTablet 
      ? competitors.slice(0, 3) // Show first 3 on tablet
      : competitors; // Show all on desktop

  const renderCheckmark = (isSupported: boolean, isHighlighted: boolean) => (
    <div className={`h-8 w-8 rounded-full ${
      isSupported 
        ? isHighlighted 
          ? "bg-purple-500/20 flex items-center justify-center" 
          : "bg-green-500/20 flex items-center justify-center"
        : "bg-gray-800/40 flex items-center justify-center"
    }`}>
      {isSupported ? (
        <Check className={`h-5 w-5 ${isHighlighted ? "text-purple-400" : "text-green-400"}`} />
      ) : (
        <X className="h-5 w-5 text-gray-500" />
      )}
    </div>
  );

  return (
    <section id="compare" className="py-20 relative overflow-hidden">
      {/* Gradient elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How We Compare
          </h2>
          <p className="text-xl text-gray-300">
            See how RocketVideosAI stacks up against other video creation tools
          </p>
          
          {isMobile && (
            <div className="mt-4 text-sm text-gray-400">
              <p>Swipe left to see more competitors →</p>
            </div>
          )}
        </div>
        
        {/* Mobile-friendly table */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4">
          <Table className="w-full border-collapse min-w-[500px]">
            <TableHeader className="bg-gray-900/50 backdrop-blur-md rounded-t-xl">
              <TableRow className="border-b border-white/10">
                <TableHead className="p-4 text-gray-300 font-medium w-1/3">Feature</TableHead>
                {displayCompetitors.map((competitor, idx) => (
                  <TableHead 
                    key={idx} 
                    className={`p-4 text-white ${competitor.highlight ? 'text-purple-400 font-bold' : 'font-medium'}`}
                  >
                    <div>{competitor.name}</div>
                    <div className="text-sm text-gray-400 font-normal mt-1">{competitor.price}</div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((row, rowIndex) => (
                <TableRow 
                  key={rowIndex}
                  className={`${
                    rowIndex % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-900/20'
                  } border-b border-white/5`}
                >
                  <TableCell className="p-4 text-gray-300">{row.feature}</TableCell>
                  {displayCompetitors.map((competitor, idx) => (
                    <TableCell key={idx} className="p-4 text-center">
                      <div className="flex justify-center">
                        {renderCheckmark(row[competitor.key as keyof typeof row] as boolean, competitor.highlight)}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              <TableRow className="rounded-b-xl overflow-hidden">
                <TableCell className="p-4 bg-gray-900/30"></TableCell>
                {displayCompetitors.map((competitor, idx) => (
                  <TableCell 
                    key={idx} 
                    className={`p-4 text-center ${
                      competitor.highlight 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
                        : 'bg-gray-800/50'
                    }`}
                  >
                    <a 
                      href={competitor.highlight ? "#pricing" : "#"} 
                      className={`${competitor.highlight ? 'text-white font-medium hover:underline' : 'text-gray-400'}`}
                    >
                      {competitor.highlight ? 'Get Started Free' : 'Visit site'}
                    </a>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        {/* Mobile pagination indicators */}
        {isMobile && (
          <div className="flex justify-center gap-2 mt-4">
            {competitors.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-2 w-2 rounded-full ${idx < 2 ? 'bg-purple-500' : 'bg-gray-700'}`}
              ></div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ComparisonTable;
