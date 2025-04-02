
import { 
  BookOpen, 
  Image, 
  UserCircle, 
  Play, 
  Mic, 
  Video, 
  Music, 
  CheckCircle
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
  }
];

const FeatureCard = ({ feature, index }) => {
  return (
    <div 
      className="glass-card p-6 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <feature.icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </div>
  )
}

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 text-sm text-purple-200 mb-6">
            <CheckCircle className="h-4 w-4 text-purple-300" />
            <span>Powerful AI Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Create Professional Videos <span className="text-purple-400">in Minutes</span>
          </h2>
          
          <p className="text-xl text-gray-400">
            Our comprehensive suite of AI-powered tools makes video creation effortless
          </p>
        </div>
        
        {/* Main feature preview */}
        <div className="mb-16 relative">
          <div className="glass-card p-1 glow-effect">
            <div className="rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2978&auto=format&fit=crop" 
                alt="AI Video Creation" 
                className="w-full h-auto object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Cinematic Audio Library</h3>
                <p className="text-gray-200 max-w-xl">Built-in collection of music and audio effects to enhance your videos with professional sound.</p>
              </div>
            </div>
          </div>
          
          {/* Floating stats badge */}
          <div className="absolute -bottom-6 right-8 md:right-16 glass-card p-4 shadow-xl">
            <div className="text-sm text-gray-400">Videos Generated</div>
            <div className="text-2xl font-bold gradient-text">2M+</div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
