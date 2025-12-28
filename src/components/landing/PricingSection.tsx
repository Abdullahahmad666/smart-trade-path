import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "7 Comprehensive Modules",
  "Practical Trading Examples",
  "Risk Management Tools & Templates",
  "Funded Account Preparation",
  "Ongoing Support & Guidance",
  "Lifetime Access to Materials",
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Course <span className="text-primary">Details</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to start your journey to becoming a consistent, 
            funded trader.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glass-card rounded-2xl p-8 relative overflow-hidden glow-primary">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  2-Month Program
                </span>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  Professional Trading Education
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-foreground">$200</span>
                  <span className="text-muted-foreground">USD</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button size="lg" className="w-full text-lg glow-primary">
                Enroll Now
              </Button>
              
              <p className="text-center text-muted-foreground text-sm mt-4">
                Start your journey today — no prior experience needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
