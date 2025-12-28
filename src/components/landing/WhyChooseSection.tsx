import { Check } from "lucide-react";

const benefits = [
  "Learn alongside job or studies",
  "Avoid beginner losses",
  "Structured & simplified system",
  "Focus on consistency, not gambling",
  "Realistic expectations",
];

export const WhyChooseSection = () => {
  return (
    <section id="why" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Why Choose This <span className="text-primary">Trading Education</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="glass-card rounded-2xl p-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
              From Struggle to Success
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From struggling as an international student in the UK, working odd jobs and 
              facing losses in trading, to finally achieving consistent results through 
              discipline and risk management — this course is built from real experience, 
              not theory.
            </p>
            <p className="text-primary font-medium italic">
              "I learned the hard way so you don't have to."
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-8 text-foreground">
              What You'll Gain
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/50 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
