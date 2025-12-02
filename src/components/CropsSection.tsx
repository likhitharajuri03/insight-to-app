import { cn } from "@/lib/utils";

const crops = [
  { name: "Tomato", classes: 10, images: "21,000", color: "from-red-400 to-orange-500" },
  { name: "Sugarcane", classes: 5, images: "10,000", color: "from-green-400 to-emerald-600" },
  { name: "Corn", classes: 4, images: "8,000", color: "from-yellow-400 to-amber-500" },
  { name: "Cotton", classes: 4, images: "8,000", color: "from-sky-200 to-blue-400" },
  { name: "Potato", classes: 3, images: "6,000", color: "from-amber-600 to-yellow-700" },
  { name: "Rice", classes: 3, images: "6,000", color: "from-lime-300 to-green-500" },
  { name: "Wheat", classes: 3, images: "6,000", color: "from-yellow-300 to-amber-400" },
];

export function CropsSection() {
  return (
    <section className="py-24 bg-gradient-nature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Multi-Crop Support
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            7 Major Crops, <span className="text-gradient">30+ Diseases</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trained on over 65,000 images from Kaggle, covering the most economically 
            significant crops in Indian agriculture.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {crops.map((crop, index) => (
            <div
              key={crop.name}
              className="group relative p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background */}
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br",
                crop.color
              )} />
              
              <div className="relative">
                {/* Icon */}
                <div className={cn(
                  "w-14 h-14 rounded-xl bg-gradient-to-br mb-4 flex items-center justify-center text-2xl shadow-sm",
                  crop.color
                )}>
                  🌿
                </div>
                
                <h3 className="font-display font-semibold text-lg mb-2">{crop.name}</h3>
                
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p><span className="font-medium text-foreground">{crop.classes}</span> classes</p>
                  <p><span className="font-medium text-foreground">{crop.images}</span> images</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dataset info */}
        <div className="mt-16 p-8 rounded-3xl bg-card border border-border shadow-soft">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-display font-bold text-gradient mb-2">65,000+</div>
              <p className="text-muted-foreground">Total Training Images</p>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-gradient mb-2">Kaggle</div>
              <p className="text-muted-foreground">Curated Dataset Source</p>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-gradient mb-2">Field-Ready</div>
              <p className="text-muted-foreground">Real-world Variability</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
