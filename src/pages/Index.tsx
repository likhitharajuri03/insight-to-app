import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { CropsSection } from "@/components/CropsSection";
import { PerformanceSection } from "@/components/PerformanceSection";
import { TeamSection } from "@/components/TeamSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AgroDetect - AI-Powered Plant Disease Detection</title>
        <meta name="description" content="A hybrid deep learning framework for real-time plant disease detection using YOLOv11, ResNet-50, EfficientNetB0, and Random Forest with 99.04% accuracy." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorksSection />
          <CropsSection />
          <PerformanceSection />
          <TeamSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
