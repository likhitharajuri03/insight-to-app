import { useState, useCallback } from "react";
import { Upload, X, Image as ImageIcon, Loader2, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DetectionResult {
  disease: string;
  confidence: number;
  crop: string;
  severity: "low" | "medium" | "high";
  treatment: string;
}

// Mock detection results for demo
const mockResults: DetectionResult[] = [
  { disease: "Early Blight", confidence: 94.2, crop: "Tomato", severity: "medium", treatment: "Apply copper-based fungicide and improve air circulation." },
  { disease: "Leaf Mold", confidence: 97.8, crop: "Tomato", severity: "high", treatment: "Remove affected leaves and apply sulfur fungicide." },
  { disease: "Yellow Leaf Curl Virus", confidence: 91.5, crop: "Tomato", severity: "high", treatment: "Control whitefly population and remove infected plants." },
  { disease: "Septoria Leaf Spot", confidence: 96.3, crop: "Tomato", severity: "medium", treatment: "Apply fungicide and remove infected plant debris." },
  { disease: "Healthy", confidence: 99.1, crop: "Tomato", severity: "low", treatment: "No treatment needed. Continue regular care and monitoring." },
];

export function ImageUploader() {
  const [image, setImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      processImage(file);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processImage(file);
    }
  };

  const processImage = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
      runDetection();
    };
    reader.readAsDataURL(file);
  };

  const runDetection = () => {
    setIsProcessing(true);
    setResult(null);
    
    // Simulate AI processing
    setTimeout(() => {
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setResult(randomResult);
      setIsProcessing(false);
    }, 2500);
  };

  const resetUpload = () => {
    setImage(null);
    setResult(null);
  };

  return (
    <div className="space-y-8">
      {/* Upload Area */}
      {!image ? (
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={cn(
            "relative border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 cursor-pointer",
            isDragging
              ? "border-accent bg-accent/5 scale-[1.02]"
              : "border-border hover:border-primary/50 hover:bg-primary/5"
          )}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          
          <div className="flex flex-col items-center">
            <div className={cn(
              "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
              isDragging ? "bg-accent/20 scale-110" : "bg-primary/10"
            )}>
              <Upload className={cn(
                "w-10 h-10 transition-colors",
                isDragging ? "text-accent" : "text-primary"
              )} />
            </div>
            
            <h3 className="font-display text-xl font-semibold mb-2">
              {isDragging ? "Drop your image here" : "Upload Plant Image"}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Drag and drop an image of a plant leaf, or click to browse. 
              Supports JPG, PNG, and WEBP formats.
            </p>
            
            <Button variant="hero" size="lg" className="pointer-events-none">
              <ImageIcon className="w-5 h-5" />
              Select Image
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Preview */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src={image} 
                alt="Uploaded plant" 
                className="w-full h-auto"
              />
              
              {/* Processing overlay */}
              {isProcessing && (
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <Loader2 className="w-12 h-12 text-accent animate-spin mx-auto mb-4" />
                    <p className="font-display font-semibold">Analyzing...</p>
                    <p className="text-sm text-muted-foreground">Running YOLOv11 + Dual CNN</p>
                  </div>
                </div>
              )}
            </div>
            
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4"
              onClick={resetUpload}
            >
              <X className="w-4 h-4" />
              Remove
            </Button>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {isProcessing ? (
              <div className="p-8 rounded-2xl bg-card border border-border shadow-soft animate-pulse">
                <div className="h-6 bg-muted rounded w-1/3 mb-4" />
                <div className="h-4 bg-muted rounded w-2/3 mb-2" />
                <div className="h-4 bg-muted rounded w-1/2" />
              </div>
            ) : result ? (
              <>
                {/* Detection Result */}
                <div className={cn(
                  "p-6 rounded-2xl border shadow-soft",
                  result.disease === "Healthy"
                    ? "bg-green-50 border-green-200"
                    : "bg-card border-border"
                )}>
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center",
                      result.disease === "Healthy" ? "bg-green-100" : "bg-amber-100"
                    )}>
                      {result.disease === "Healthy" ? (
                        <CheckCircle className="w-7 h-7 text-green-600" />
                      ) : (
                        <AlertTriangle className="w-7 h-7 text-amber-600" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-display text-xl font-bold">{result.disease}</h3>
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-xs font-medium",
                          result.severity === "low" && "bg-green-100 text-green-700",
                          result.severity === "medium" && "bg-amber-100 text-amber-700",
                          result.severity === "high" && "bg-red-100 text-red-700"
                        )}>
                          {result.severity.charAt(0).toUpperCase() + result.severity.slice(1)} Severity
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-2">Crop: {result.crop}</p>
                    </div>
                  </div>
                </div>

                {/* Confidence Score */}
                <div className="p-6 rounded-2xl bg-card border border-border shadow-soft">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium">Confidence Score</span>
                    <span className="font-display font-bold text-accent">{result.confidence}%</span>
                  </div>
                  <div className="h-3 rounded-full bg-muted overflow-hidden">
                    <div 
                      className="h-full bg-gradient-hero rounded-full transition-all duration-1000"
                      style={{ width: `${result.confidence}%` }}
                    />
                  </div>
                </div>

                {/* Treatment */}
                <div className="p-6 rounded-2xl bg-gradient-nature border border-border">
                  <h4 className="font-display font-semibold mb-2">Recommended Treatment</h4>
                  <p className="text-muted-foreground">{result.treatment}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button variant="hero" className="flex-1" onClick={resetUpload}>
                    <Upload className="w-4 h-4" />
                    Analyze Another
                  </Button>
                  <Button variant="nature" className="flex-1">
                    Download Report
                  </Button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
