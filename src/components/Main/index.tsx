import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import ServicesSection from "./ServicesSection";
import TestimonialSection from "./TestimonialSection";

const Main = () => {
  return (
    <main className="flex flex-col min-h-screen px-12 pt-28 gap-y-52">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />

      <TestimonialSection />
    </main>
  );
};

export default Main;
