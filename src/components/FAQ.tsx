
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does RocketVideosAI work?",
    answer: "RocketVideosAI uses advanced AI algorithms to analyze your text input and generate video content automatically. The system creates storyboards, characters, animations, and voiceovers based on your script, which you can then customize to your preferences before exporting the final video."
  },
  {
    question: "Do I need video editing experience to use RocketVideosAI?",
    answer: "No! RocketVideosAI is designed to be beginner-friendly with an intuitive interface. The AI handles the complex video creation process, allowing you to create professional videos with minimal editing skills required."
  },
  {
    question: "What formats can I export my videos in?",
    answer: "RocketVideosAI supports multiple export formats including MP4, MOV, and WebM. You can also choose from various resolutions ranging from 720p to 4K (depending on your plan) to suit different platforms and purposes."
  },
  {
    question: "Can I use the videos commercially?",
    answer: "Yes! Videos created with our Unlimited and Pro plans come with commercial usage rights, allowing you to use them for business purposes, marketing campaigns, and monetized content on platforms like YouTube."
  },
  {
    question: "How many languages does the AI voiceover support?",
    answer: "Our AI voiceover technology supports over 15 languages including English, Spanish, French, German, Japanese, Chinese, and more. The Pro plan includes voice cloning capabilities to match your brand's voice."
  },
  {
    question: "Is there a limit to how long my videos can be?",
    answer: "Video length limits depend on your plan. The free version supports videos up to 2 minutes, the Unlimited plan extends this to 10 minutes, and the Pro plan allows videos up to 30 minutes in length."
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes! We offer a free early access version with limited features, allowing you to test the platform before committing to a paid plan. No credit card required to get started."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Gradient elements */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Get answers to common questions about RocketVideosAI
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-900/50 backdrop-blur-md rounded-lg border border-white/10"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-purple-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Still have questions? We're here to help!
            </p>
            <a 
              href="#" 
              className="inline-flex bg-gray-900/80 hover:bg-gray-900 text-white rounded-full px-8 py-3 transition-colors border border-white/10"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
