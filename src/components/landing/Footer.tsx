export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Disclaimer */}
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-xs max-w-3xl mx-auto leading-relaxed">
            <strong>Risk Disclaimer:</strong> Trading involves substantial risk and may not be 
            suitable for all investors. Past performance is not indicative of future results. 
            This course is for educational purposes only and does not constitute financial advice. 
            Results vary based on discipline, experience, and market conditions. Always trade 
            responsibly and never risk more than you can afford to lose.
          </p>
        </div>

        {/* Footer Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/50">
          <a href="#" className="font-display text-lg font-bold text-foreground">
            Elite<span className="text-primary">Trader</span>Academy
          </a>
          
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#learn" className="hover:text-primary transition-colors">Learn</a>
            <a href="#modules" className="hover:text-primary transition-colors">Modules</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Elite Trader Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
