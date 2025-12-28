import { TrendingUp, BarChart3, FileText, Brain, Building2, Settings } from "lucide-react";

const learningCards = [
  {
    icon: TrendingUp,
    title: "Risk Management & Position Sizing",
    description: "Master the art of protecting your capital while maximizing opportunities",
  },
  {
    icon: BarChart3,
    title: "Market Structure & High-Probability Entries",
    description: "Learn to read the market and identify the best trading setups",
  },
  {
    icon: FileText,
    title: "Funded Account Rules & Discipline",
    description: "Prepare for prop firm challenges with proper trading discipline",
  },
  {
    icon: Brain,
    title: "Trading Psychology & Emotional Control",
    description: "Develop the mindset of a professional, consistent trader",
  },
  {
    icon: Building2,
    title: "Smart Money Concepts (SMC, ICT, VSA)",
    description: "Understand how institutional traders move the markets",
  },
  {
    icon: Settings,
    title: "Modern Professional Trading Techniques",
    description: "Apply cutting-edge strategies used by successful traders",
  },
];

export const WhatYouLearnSection = () => {
  return (
    <section id="learn" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            What You Will <span className="text-primary">Learn</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive curriculum designed to transform you into a disciplined, 
            profitable trader ready for funded accounts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningCards.map((card, index) => (
            <div
              key={index}
              className="group glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                {card.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
