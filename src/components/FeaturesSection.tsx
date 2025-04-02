
import { 
  BookOpen, 
  Image, 
  UserCircle, 
  Play, 
  Mic, 
  Video, 
  Music 
} from "lucide-react";

const features = [
  {
    title: "AI Storyboard Creator",
    description: "Convert text prompts into structured storyboards to streamline video planning and production.",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Image-to-Video Converter",
    description: "Transform static images into dynamic video sequences — ideal for product showcases and presentations.",
    icon: Image,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Character Design Engine",
    description: "Generate and customize animated characters based on your input — perfect for unique brand avatars.",
    icon: UserCircle,
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Animation Sequence Generator",
    description: "Create AI-generated animations tailored to your script, enhancing storytelling without manual work.",
    icon: Play,
    color: "from-pink-500 to-red-500"
  },
  {
    title: "AI Voiceover Integration",
    description: "High-quality, AI-generated voiceovers with multiple language options and text-to-speech functionality.",
    icon: Mic,
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Timeline Editing Suite",
    description: "Fine-tuned editing, scene transitions, and camera controls for users who need more precise control.",
    icon: Video,
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Cinematic Audio Library",
    description: "Built-in collection of music and audio effects to enhance your videos with professional sound.",
    icon: Music,
    color: "from-red-500 to-orange-500"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Gradient elements */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Powerful AI Features
          </h2>
          <p className="text-xl text-gray-300">
            Create professional videos in minutes with our comprehensive suite of AI-powered tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
