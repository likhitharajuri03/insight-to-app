import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ImageUploader } from "@/components/ImageUploader";
import { Helmet } from "react-helmet-async";
import { Leaf, Shield, Zap } from "lucide-react";

const features = [
  { icon: Zap, title: "Real-time Detection", description: "YOLOv11 enables instant leaf region isolation" },
  { icon: Shield, title: "99.04% Accuracy", description: "State-of-the-art hybrid ensemble model" },
  { icon: Leaf, title: "7 Crop Types", description: "Supports major agricultural crops" },
];

const Detect = () => {
  return (
    <>
      <Helmet>
        <title>Detect Plant Disease - AgroDetect</title>
        <meta name="description" content="Upload a plant leaf image to detect diseases using our AI-powered hybrid deep learning framework with 99.04% accuracy." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                AI Disease Detection
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Analyze Your <span className="text-gradient">Plant Leaves</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Upload an image of a plant leaf to instantly detect diseases using our 
                hybrid deep learning model combining YOLOv11, dual CNN feature extraction, 
                and Random Forest classification.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Uploader */}
            <ImageUploader />

            {/* Disclaimer */}
            <p className="text-center text-sm text-muted-foreground mt-12 max-w-2xl mx-auto">
              This is a demonstration of the research framework. For production deployment, 
              the model would run on-device or via a backend API with the full trained weights.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Detect;
