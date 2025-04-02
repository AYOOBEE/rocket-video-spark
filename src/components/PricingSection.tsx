
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Base Version",
    price: "Free",
    description: "Early access with limited features",
    features: [
      "5 projects per month",
      "720p video exports",
      "Basic character generation",
      "Standard voices",
      "2 minutes max duration"
    ],
    cta: "Get Started",
    popular: false,
    ctaColor: "from-gray-600 to-gray-700"
  },
  {
    name: "Unlimited Plan",
    price: "$29",
    period: "/month",
    description: "For content creators and marketers",
    features: [
      "Unlimited projects and renders",
      "1080p video exports",
      "Advanced character customization",
      "30+ voice options",
      "10 minutes max duration",
      "Commercial usage rights"
    ],
    cta: "Start Free Trial",
    popular: true,
    ctaColor: "from-purple-600 to-pink-600"
  },
  {
    name: "Pro Plan",
    price: "$79",
    period: "/month",
    description: "For professionals and teams",
    features: [
      "Everything in Unlimited",
      "4K video exports",
      "Premium voices and cloning",
      "Advanced editing tools",
      "30 minutes max duration",
      "Priority rendering",
      "Premium stock media"
    ],
    cta: "Contact Sales",
    popular: false,
    ctaColor: "from-blue-600 to-indigo-600"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Gradient elements */}
      <div className="absolute top-1/3 -left-24 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-300">
            Flexible options for individuals and teams of all sizes
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative rounded-xl overflow-hidden ${
                tier.popular ? 'ring-2 ring-purple-500 shadow-lg shadow-purple-500/20 bg-gray-900/70' : 'bg-gray-900/50'
              }`}
            >
              {tier.popular && (
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 font-medium text-sm">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">{tier.price}</span>
                  {tier.period && <span className="text-gray-400">{tier.period}</span>}
                </div>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${tier.ctaColor} text-white mb-8 py-6`}
                >
                  {tier.cta}
                </Button>
                
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="rounded-full bg-green-500/20 p-1 mt-0.5 flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-green-400" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enterprise section */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border border-white/10 rounded-xl p-8 md:p-12">
          <div className="md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 md:flex-1">
              <h3 className="text-2xl font-bold text-white mb-4">Need a custom solution?</h3>
              <p className="text-gray-300">
                We offer whitelabel custom branding, domain, and reseller options for agencies and enterprise clients. Contact our sales team to learn more.
              </p>
            </div>
            <div className="md:ml-8">
              <Button 
                size="lg"
                className="w-full md:w-auto bg-white text-gray-900 hover:bg-gray-100"
              >
                Contact Enterprise Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
