import {
  Header,
  HeroSection,
  WhatYouLearnSection,
  WhyChooseSection,
  GallerySection,
  ModulesSection,
  PricingSection,
  ContactSection,
  Footer,
} from "@/components/landing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatYouLearnSection />
        <WhyChooseSection />
        <GallerySection />
        <ModulesSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
