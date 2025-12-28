const galleryImages = [
  {
    title: "Analyze Charts",
    description: "Professional chart analysis",
  },
  {
    title: "Modern Setup",
    description: "Clean trading environment",
  },
  {
    title: "Work Anywhere",
    description: "Trade from any location",
  },
  {
    title: "Risk Planning",
    description: "Strategic risk management",
  },
  {
    title: "Focused Trading",
    description: "Minimalist trading desk",
  },
];

export const GallerySection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Trading is a <span className="text-gradient">Skill</span> — Not Luck
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional trading requires the right environment, mindset, and tools.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square glass-card rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Placeholder gradient */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(${135 + index * 30}deg, hsl(var(--primary) / 0.2), hsl(var(--secondary)))`,
                }}
              />
              
              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-background/50 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>

              {/* Overlay with text */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <p className="font-medium text-foreground text-sm">{image.title}</p>
                  <p className="text-muted-foreground text-xs">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
