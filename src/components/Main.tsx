import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";

const Main = () => {
  return (
    <main className="flex flex-col min-h-screen px-12 pt-28 gap-y-52">
      <HeroSection />
      <ServicesSection />
    </main>
  );
};

export default Main;
