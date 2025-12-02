import { Camera, Scan, Cpu, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Image Capture",
    description: "Upload a field image of a plant leaf showing potential disease symptoms.",
    color: "bg-blue-500/10 text-blue-600",
    detail: "Supports various lighting conditions and backgrounds"
  },
  {
    icon: Scan,
    title: "YOLOv11 Detection",
    description: "Real-time object detection isolates leaf regions, eliminating background noise.",
    color: "bg-amber-500/10 text-amber-600",
    detail: "Trained with 5 epochs on annotated bounding boxes"
  },
  {
    icon: Cpu,
    title: "Dual CNN Extraction",
    description: "ResNet-50 and EfficientNetB0 extract deep features in parallel, then fuse them.",
    color: "bg-primary/10 text-primary",
    detail: "3,328-dimensional fused feature vector"
  },
  {
    icon: CheckCircle,
    title: "RF Classification",
    description: "Random Forest ensemble classifier predicts the disease with high confidence.",
    color: "bg-accent/10 text-accent",
    detail: "99.04% accuracy with interpretable results"
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Pipeline Architecture
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient">Detection</span> Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A modular, GPU-accelerated pipeline that integrates real-time detection 
            with deep transfer learning for robust disease classification.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-primary to-accent -translate-y-1/2 opacity-20 rounded-full" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="relative">
                  <div className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all duration-300 h-full">
                    {/* Step number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center text-sm font-bold text-primary-foreground shadow-md">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" />
                    </div>
                    
                    <h3 className="font-display font-semibold text-lg mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                    
                    <div className="px-3 py-1.5 rounded-lg bg-secondary text-xs text-muted-foreground">
                      {step.detail}
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Architecture diagram placeholder */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-nature border border-border">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-card shadow-soft">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-display font-semibold mb-2">YOLOv11</h4>
              <p className="text-sm text-muted-foreground">Region of Interest Localization</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card shadow-soft">
              <div className="text-2xl mb-2">🧠</div>
              <h4 className="font-display font-semibold mb-2">Dual CNN</h4>
              <p className="text-sm text-muted-foreground">ResNet-50 (2048-d) + EfficientNetB0 (1280-d)</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card shadow-soft">
              <div className="text-2xl mb-2">🌳</div>
              <h4 className="font-display font-semibold mb-2">Random Forest</h4>
              <p className="text-sm text-muted-foreground">Ensemble Classification with Feature Importance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
