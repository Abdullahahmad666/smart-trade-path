import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    id: "module-1",
    title: "Module 1: Introduction to Forex",
    content: "Understanding the forex market, currency pairs, market sessions, and how the global currency market operates. Learn the fundamentals that every trader must know.",
  },
  {
    id: "module-2",
    title: "Module 2: Market Structure",
    content: "Deep dive into market structure, trend identification, support and resistance levels, and understanding how price moves. Master the ability to read charts like a professional.",
  },
  {
    id: "module-3",
    title: "Module 3: Indicators (Correct Usage)",
    content: "Learn how to properly use indicators as confirmation tools, not prediction tools. Understand moving averages, RSI, and volume indicators in their proper context.",
  },
  {
    id: "module-4",
    title: "Module 4: Smart Money Concepts",
    content: "Understand how institutional traders and banks move the markets. Learn order blocks, fair value gaps, liquidity pools, and smart money manipulation tactics.",
  },
  {
    id: "module-5",
    title: "Module 5: Volume Spread Analysis",
    content: "Master the art of reading volume to understand supply and demand dynamics. Learn to identify accumulation, distribution, and smart money footprints.",
  },
  {
    id: "module-6",
    title: "Module 6: Liquidity & Manipulation",
    content: "Discover how markets are manipulated and how to trade with the manipulation instead of against it. Learn to identify stop hunts and liquidity grabs.",
  },
  {
    id: "module-7",
    title: "Module 7: Risk Management & Funded Account Rules",
    content: "The most important module. Learn proper position sizing, risk-per-trade calculations, drawdown management, and the specific rules for passing prop firm challenges.",
  },
];

export const ModulesSection = () => {
  return (
    <section id="modules" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Course <span className="text-primary">Modules</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A structured learning path from complete beginner to confident, 
            funded trader.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module) => (
              <AccordionItem
                key={module.id}
                value={module.id}
                className="glass-card rounded-xl px-6 border-border/50 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {module.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {module.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
