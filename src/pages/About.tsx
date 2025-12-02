import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";
import { Helmet } from "react-helmet-async";
import { FileText, BookOpen, Target, Globe } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - AgroDetect Research</title>
        <meta name="description" content="Learn about the AgroDetect research project from MS Ramaiah Institute of Technology, published at IEEE 2025." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                IEEE 2025
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                About the <span className="text-gradient">Research</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A Hybrid Deep Learning and Ensemble Framework for Plant Disease Detection
              </p>
            </div>

            {/* Abstract */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="p-8 rounded-3xl bg-card border border-border shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-2xl font-bold">Abstract</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Timely and accurate plant disease detection is essential to prevent crop losses and ensure food security. 
                  Traditional manual inspection methods are time-consuming and unreliable at scale. This paper presents a 
                  hybrid AI-based framework that integrates real-time object detection with deep transfer learning and 
                  ensemble classification. YOLOv11 is used to isolate leaf regions from field images, followed by dual-path 
                  feature extraction using ResNet-50 and EfficientNetB0. The resulting features are fused and classified 
                  using a Random Forest model to enhance robustness and interpretability. Trained on a Kaggle-sourced 
                  dataset covering multiple crops and diseases, the proposed system achieved a classification accuracy 
                  of 99.04%, with an average precision, recall, and F1-score of 0.990. Experimental results confirm 
                  superior performance over conventional CNN-softmax models, demonstrating its scalability and suitability 
                  for field deployment.
                </p>
              </div>
            </div>

            {/* Key Contributions */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="font-display text-2xl font-bold text-center mb-8">Key Contributions</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">ROI-Based Detection</h3>
                  <p className="text-sm text-muted-foreground">
                    YOLOv11 for precise leaf localization eliminates background interference 
                    and enables instance-level classification.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Dual CNN Feature Fusion</h3>
                  <p className="text-sm text-muted-foreground">
                    Parallel feature extraction from ResNet-50 and EfficientNetB0 captures 
                    complementary visual patterns.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold mb-2">Interpretable Ensemble</h3>
                  <p className="text-sm text-muted-foreground">
                    Random Forest classifier provides feature importance metrics, bridging 
                    the gap between AI automation and user trust.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                    <span className="text-xl">⚡</span>
                  </div>
                  <h3 className="font-display font-semibold mb-2">Edge Deployment Ready</h3>
                  <p className="text-sm text-muted-foreground">
                    Modular architecture optimized for mobile and edge-computing environments 
                    with offline inference support.
                  </p>
                </div>
              </div>
            </div>

            {/* Future Work */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="p-8 rounded-3xl bg-gradient-nature border border-border">
                <h2 className="font-display text-2xl font-bold mb-6">Future Directions</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0 mt-0.5">1</span>
                    <span className="text-muted-foreground">Lightweight mobile inference optimization for edge deployment in resource-constrained environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0 mt-0.5">2</span>
                    <span className="text-muted-foreground">Integration with IoT platforms for end-to-end farm intelligence and automated monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0 mt-0.5">3</span>
                    <span className="text-muted-foreground">Incorporation of contextual factors (weather, geolocation, soil conditions) for multimodal prediction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary flex-shrink-0 mt-0.5">4</span>
                    <span className="text-muted-foreground">Drone-enabled aerial surveillance for large-scale disease monitoring</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Citation */}
            <div className="max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
                <h3 className="font-display font-semibold mb-4">Citation</h3>
                <div className="p-4 rounded-xl bg-muted/50 font-mono text-sm text-muted-foreground overflow-x-auto">
                  <p>
                    D. T, R. Likhitha, P. Vishalaachi, M. Roy, and S. Kulkarni, "A Hybrid Deep Learning and 
                    Ensemble Framework for Plant Disease Detection," in Proc. IEEE, 2025.
                  </p>
                  <p className="mt-2 text-xs">979-8-3315-5479-8/25/$31.00 © 2025 IEEE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <TeamSection />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
