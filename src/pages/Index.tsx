import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { CropsSection } from "@/components/CropsSection";
import { SeasonalCropsSection } from "@/components/SeasonalCropsSection";
import { FAQSection } from "@/components/FAQSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>AgroDetect - AI-Powered Plant Disease Detection</title>
        <meta name="description" content="Upload a photo of your plant leaf and get instant disease diagnosis with treatment recommendations. Keep your crops healthy with AgroDetect." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <CropsSection />
          <SeasonalCropsSection />
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
