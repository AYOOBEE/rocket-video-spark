
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: "01",
    title: "Enter Your Script",
    description: "Simply input your script or description of what you want to create. Our AI analyzes your text to understand the narrative structure.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "02",
    title: "AI Generates Storyboard",
    description: "Our AI automatically creates a storyboard with scenes, characters, and settings tailored to your script.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "03",
    title: "Customize Elements",
    description: "Modify characters, adjust scenes, add voiceovers, and select music from our vast library to perfect your video.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "04",
    title: "Export and Share",
    description: "Render your finished video in multiple formats and resolutions, then share directly to social media or download.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/20 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            How RocketVideosAI Works
          </h2>
          <p className="text-xl text-gray-300">
            Create professional videos in just four simple steps
          </p>
        </div>
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
            >
              <div className="lg:w-1/2 relative">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl"></div>
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-auto rounded-xl border border-white/10 relative z-0 shadow-xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl md:text-5xl font-bold text-white z-10">
                  {step.number}
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-lg text-gray-300 mb-6">{step.description}</p>
                {index === steps.length - 1 && (
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                  >
                    Start Creating Now
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
