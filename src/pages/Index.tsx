import Hero from "@/components/Hero";
import CareerHighlights from "@/components/CareerHighlights";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Research from "@/components/Research";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CareerHighlights />
      <Experience />
      <Skills />
      <Research />
    </div>
  );
};

export default Index;
