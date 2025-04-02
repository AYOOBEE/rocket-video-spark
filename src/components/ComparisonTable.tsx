
import { Check, X } from "lucide-react";

const ComparisonTable = () => {
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
        </div>
        
        <div className="overflow-x-auto">
          <div className="min-w-max">
            <div className="grid grid-cols-5 bg-gray-900/50 backdrop-blur-md rounded-t-xl border-b border-white/10">
              <div className="p-6 text-gray-300 font-medium">Feature</div>
              <div className="p-6 text-white font-bold">
                <div className="text-purple-400">RocketVideosAI</div>
                <div className="text-sm text-gray-400 font-normal mt-1">Starting from Free</div>
              </div>
              <div className="p-6 text-white">
                <div>Pictory AI</div>
                <div className="text-sm text-gray-400 mt-1">$19/month</div>
              </div>
              <div className="p-6 text-white">
                <div>Synthesia</div>
                <div className="text-sm text-gray-400 mt-1">$30/month</div>
              </div>
              <div className="p-6 text-white">
                <div>InVideo</div>
                <div className="text-sm text-gray-400 mt-1">$15/month</div>
              </div>
            </div>
            
            {/* Table rows */}
            {[
              { feature: "AI Storyboarding", rocket: true, pictory: false, synthesia: true, invideo: true },
              { feature: "Voiceover Cloning", rocket: true, pictory: false, synthesia: true, invideo: false },
              { feature: "Animation Sequences", rocket: true, pictory: false, synthesia: false, invideo: true },
              { feature: "Custom Branding", rocket: true, pictory: false, synthesia: false, invideo: true },
              { feature: "Unlimited Projects", rocket: true, pictory: false, synthesia: false, invideo: false },
            ].map((row, index) => (
              <div 
                key={index}
                className={`grid grid-cols-5 border-b border-white/5 ${
                  index % 2 === 0 ? 'bg-gray-800/20' : 'bg-gray-900/20'
                }`}
              >
                <div className="p-6 text-gray-300">{row.feature}</div>
                <div className="p-6 flex items-center justify-center">
                  {row.rocket ? (
                    <div className="h-8 w-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Check className="h-5 w-5 text-purple-400" />
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gray-800/40 flex items-center justify-center">
                      <X className="h-5 w-5 text-gray-500" />
                    </div>
                  )}
                </div>
                <div className="p-6 flex items-center justify-center">
                  {row.pictory ? (
                    <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-400" />
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gray-800/40 flex items-center justify-center">
                      <X className="h-5 w-5 text-gray-500" />
                    </div>
                  )}
                </div>
                <div className="p-6 flex items-center justify-center">
                  {row.synthesia ? (
                    <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-400" />
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gray-800/40 flex items-center justify-center">
                      <X className="h-5 w-5 text-gray-500" />
                    </div>
                  )}
                </div>
                <div className="p-6 flex items-center justify-center">
                  {row.invideo ? (
                    <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-400" />
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gray-800/40 flex items-center justify-center">
                      <X className="h-5 w-5 text-gray-500" />
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Bottom row with CTA */}
            <div className="grid grid-cols-5 rounded-b-xl overflow-hidden">
              <div className="p-6 bg-gray-900/30"></div>
              <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 text-center">
                <a href="#pricing" className="text-white font-medium hover:underline">
                  Get Started Free
                </a>
              </div>
              <div className="p-6 bg-gray-800/50 text-center">
                <span className="text-gray-400">Visit site</span>
              </div>
              <div className="p-6 bg-gray-800/50 text-center">
                <span className="text-gray-400">Visit site</span>
              </div>
              <div className="p-6 bg-gray-800/50 text-center">
                <span className="text-gray-400">Visit site</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
