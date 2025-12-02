import { Sun, CloudRain, Snowflake, Flower } from "lucide-react";

const seasons = [
  {
    name: "Summer",
    icon: Sun,
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-500/10",
    textColor: "text-amber-600",
    crops: ["Tomato", "Cucumber", "Watermelon", "Okra", "Chili"],
    months: "March - June"
  },
  {
    name: "Monsoon",
    icon: CloudRain,
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-600",
    crops: ["Rice", "Cotton", "Soybean", "Groundnut", "Maize"],
    months: "July - October"
  },
  {
    name: "Winter",
    icon: Snowflake,
    color: "from-sky-300 to-blue-400",
    bgColor: "bg-sky-500/10",
    textColor: "text-sky-600",
    crops: ["Wheat", "Mustard", "Potato", "Peas", "Carrot"],
    months: "November - February"
  },
  {
    name: "Spring",
    icon: Flower,
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-500/10",
    textColor: "text-pink-600",
    crops: ["Sunflower", "Sugarcane", "Onion", "Garlic", "Spinach"],
    months: "February - April"
  },
];

export function SeasonalCropsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Seasonal Guide
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Best Crops for <span className="text-gradient">Each Season</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Plan your farming calendar with our seasonal crop recommendations 
            to maximize yield and minimize disease risk.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {seasons.map((season) => {
            const Icon = season.icon;
            return (
              <div
                key={season.name}
                className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${season.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="font-display text-xl font-bold mb-1">{season.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{season.months}</p>
                
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Recommended Crops</p>
                  <div className="flex flex-wrap gap-2">
                    {season.crops.map((crop) => (
                      <span
                        key={crop}
                        className={`px-2 py-1 rounded-lg text-xs font-medium ${season.bgColor} ${season.textColor}`}
                      >
                        {crop}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
