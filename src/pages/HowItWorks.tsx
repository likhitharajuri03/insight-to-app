import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { Camera, Scan, Cpu, TreeDeciduous, ArrowDown, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works - AgroDetect</title>
        <meta name="description" content="Learn about our hybrid deep learning pipeline combining YOLOv11, ResNet-50, EfficientNetB0, and Random Forest for plant disease detection." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Technical Architecture
              </span>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                How <span className="text-gradient">AgroDetect</span> Works
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A modular, GPU-accelerated pipeline designed for field deployment 
                with real-time inference capabilities.
              </p>
            </div>

            {/* Pipeline Steps */}
            <div className="max-w-3xl mx-auto space-y-6">
              {/* Step 1 */}
              <div className="p-8 rounded-3xl bg-card border border-border shadow-soft">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                    <Camera className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium">Step 1</span>
                      <h2 className="font-display text-xl font-bold">Image Acquisition</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Field images are captured using mobile devices or cameras. The system supports 
                      various lighting conditions, backgrounds, and image qualities to ensure robustness 
                      in real-world agricultural settings.
                    </p>
                    <div className="p-4 rounded-xl bg-secondary/50">
                      <h4 className="font-medium text-sm mb-2">Preprocessing</h4>
                      <p className="text-sm text-muted-foreground">
                        Images are resized to 224×224×3 for CNN input. Data augmentation 
                        (rotation, flipping, brightness adjustment) enhances model generalization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-8 h-8 text-border" />
              </div>

              {/* Step 2 */}
              <div className="p-8 rounded-3xl bg-card border border-border shadow-soft">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Scan className="w-8 h-8 text-amber-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 text-sm font-medium">Step 2</span>
                      <h2 className="font-display text-xl font-bold">YOLOv11 Detection</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      YOLOv11, a state-of-the-art object detection model, identifies and crops 
                      leaf regions from the input image. This eliminates background noise and 
                      enables instance-level classification.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-secondary/50">
                        <h4 className="font-medium text-sm mb-2">Training</h4>
                        <p className="text-sm text-muted-foreground">
                          5 epochs with manually annotated bounding boxes using LabelImg
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-secondary/50">
                        <h4 className="font-medium text-sm mb-2">Output</h4>
                        <p className="text-sm text-muted-foreground">
                          Cropped leaf ROIs for downstream processing
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-8 h-8 text-border" />
              </div>

              {/* Step 3 */}
              <div className="p-8 rounded-3xl bg-card border border-border shadow-soft">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cpu className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Step 3</span>
                      <h2 className="font-display text-xl font-bold">Dual CNN Feature Extraction</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Cropped leaf regions are processed in parallel by two pre-trained CNN architectures, 
                      each capturing complementary visual patterns through transfer learning.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                        <h4 className="font-medium mb-2">ResNet-50</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Deep residual connections capture fine-grained texture variations
                        </p>
                        <div className="text-xs text-primary font-mono">Output: 2048-d vector</div>
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20">
                        <h4 className="font-medium mb-2">EfficientNetB0</h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Lightweight compound scaling for structural patterns
                        </p>
                        <div className="text-xs text-accent font-mono">Output: 1280-d vector</div>
                      </div>
                    </div>
                    <div className="mt-4 p-4 rounded-xl bg-secondary/50">
                      <h4 className="font-medium text-sm mb-2">Feature Fusion</h4>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-mono">f_fused = [f_ResNet || f_EffNet] ∈ ℝ³³²⁸</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowDown className="w-8 h-8 text-border" />
              </div>

              {/* Step 4 */}
              <div className="p-8 rounded-3xl bg-card border border-border shadow-soft">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <TreeDeciduous className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">Step 4</span>
                      <h2 className="font-display text-xl font-bold">Random Forest Classification</h2>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      The fused feature vector is classified using a Random Forest ensemble, 
                      providing robust predictions through majority voting across decision trees.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm">Resistant to overfitting in high-dimensional spaces</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm">Provides feature importance for interpretability</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-sm">Non-parametric, adapts to diverse crop types</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Summary */}
            <div className="mt-16 p-8 rounded-3xl bg-gradient-nature border border-border">
              <div className="text-center mb-8">
                <h2 className="font-display text-2xl font-bold mb-2">Performance Summary</h2>
                <p className="text-muted-foreground">Proposed Hybrid Model (Fused CNNs + Random Forest)</p>
              </div>
              <div className="grid sm:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-display font-bold text-gradient">99.04%</div>
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-gradient">0.9906</div>
                  <p className="text-sm text-muted-foreground">Precision</p>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-gradient">0.9904</div>
                  <p className="text-sm text-muted-foreground">Recall</p>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-gradient">0.9904</div>
                  <p className="text-sm text-muted-foreground">F1-Score</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default HowItWorks;
