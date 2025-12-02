import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, Sprout, Leaf, Shield, Target, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "99%+", label: "Accuracy", icon: Target },
  { value: "7", label: "Crop Types", icon: Leaf },
  { value: "30+", label: "Diseases Detected", icon: Shield },
  { value: "Instant", label: "Results", icon: Zap },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Plant leaves"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-glow opacity-50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-primary/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Protect Your Crops with AI
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Detect Plant{" "}
            <span className="text-gradient">Diseases</span>{" "}
            Instantly
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Upload a photo of your plant leaf and get instant disease diagnosis 
            with treatment recommendations. Keep your crops healthy and thriving.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/detect">
              <Button variant="hero" size="xl" className="gap-3">
                <Upload className="w-5 h-5" />
                Upload & Detect
              </Button>
            </Link>
            <Link to="/faq">
              <Button variant="nature" size="xl" className="gap-3">
                <Sprout className="w-5 h-5" />
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-soft hover:shadow-elevated transition-all duration-300 group"
                >
                  <Icon className="w-6 h-6 text-accent mb-3 mx-auto group-hover:scale-110 transition-transform" />
                  <div className="text-2xl sm:text-3xl font-display font-bold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
