import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import { Helmet } from "react-helmet-async";

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - AgroDetect</title>
        <meta name="description" content="Find answers to frequently asked questions about AgroDetect plant disease detection service." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-16">
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
