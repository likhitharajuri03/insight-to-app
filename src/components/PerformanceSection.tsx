const models = [
  { name: "ResNet-50", accuracy: "98.52%", precision: "0.9855", recall: "0.9852", f1: "0.9852" },
  { name: "EfficientNetB0", accuracy: "98.47%", precision: "0.9849", recall: "0.9847", f1: "0.9846" },
  { name: "Proposed (Fused + RF)", accuracy: "99.04%", precision: "0.9906", recall: "0.9904", f1: "0.9904", highlight: true },
];

export function PerformanceSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Experimental Results
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            State-of-the-Art <span className="text-gradient">Performance</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive evaluation demonstrating superior accuracy, precision, recall, 
            and F1-score over individual CNN models.
          </p>
        </div>

        {/* Results Table */}
        <div className="overflow-x-auto mb-16">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-6 font-display font-semibold">Model</th>
                <th className="text-center py-4 px-6 font-display font-semibold">Accuracy</th>
                <th className="text-center py-4 px-6 font-display font-semibold">Precision</th>
                <th className="text-center py-4 px-6 font-display font-semibold">Recall</th>
                <th className="text-center py-4 px-6 font-display font-semibold">F1-Score</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model) => (
                <tr 
                  key={model.name}
                  className={`border-b border-border transition-colors ${
                    model.highlight 
                      ? "bg-gradient-to-r from-primary/5 to-accent/5" 
                      : "hover:bg-muted/50"
                  }`}
                >
                  <td className="py-4 px-6">
                    <span className={`font-medium ${model.highlight ? "text-gradient font-semibold" : ""}`}>
                      {model.name}
                    </span>
                    {model.highlight && (
                      <span className="ml-2 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        Best
                      </span>
                    )}
                  </td>
                  <td className="text-center py-4 px-6">
                    <span className={model.highlight ? "font-bold text-primary" : ""}>{model.accuracy}</span>
                  </td>
                  <td className="text-center py-4 px-6">{model.precision}</td>
                  <td className="text-center py-4 px-6">{model.recall}</td>
                  <td className="text-center py-4 px-6">{model.f1}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key advantages */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-display font-semibold mb-2">Superior Generalization</h3>
            <p className="text-sm text-muted-foreground">
              Random Forest reduces overfitting while maintaining consistent predictions across varying input distributions.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="font-display font-semibold mb-2">Interpretable Results</h3>
            <p className="text-sm text-muted-foreground">
              Feature importance estimates improve model transparency—critical for agricultural decision support.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-display font-semibold mb-2">Field-Deployable</h3>
            <p className="text-sm text-muted-foreground">
              Optimized for edge deployment with modular architecture supporting offline inference in rural environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
