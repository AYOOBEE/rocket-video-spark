
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "RocketVideosAI has completely transformed our content creation process. What used to take us days now takes minutes, and the quality is incredible.",
    author: "Sarah Johnson",
    title: "Marketing Director, TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5
  },
  {
    quote: "As a YouTuber, I need to produce videos consistently. This tool has been a game-changer for my workflow and has helped me scale my content production.",
    author: "Michael Chen",
    title: "Content Creator",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    quote: "The AI character creation and voice cloning features are surprisingly good. Our explainer videos now have a consistent brand voice across all our campaigns.",
    author: "Emma Rodriguez",
    title: "Product Manager, StartupX",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Loved by Content Creators
          </h2>
          <p className="text-xl text-gray-300">
            Don't just take our word for it. See what our users have to say.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="flex mb-4">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
                {Array(5 - testimonial.rating).fill(0).map((_, i) => (
                  <Star key={i + testimonial.rating} className="w-5 h-5 text-gray-600" />
                ))}
              </div>
              
              <blockquote className="text-gray-300 mb-6">"{testimonial.quote}"</blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 border-2 border-purple-500/30"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">100,000+</div>
            <div className="text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">2M+</div>
            <div className="text-gray-400">Videos Generated</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">4.8/5</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">89%</div>
            <div className="text-gray-400">Time Saved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
