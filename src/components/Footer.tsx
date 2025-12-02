import { Link } from "react-router-dom";
import { Leaf, Github, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-nature border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">
                Agro<span className="text-accent">Detect</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-4">
              A hybrid deep learning framework for real-time plant disease detection. 
              Combining YOLOv11, ResNet-50, EfficientNetB0, and Random Forest for 99.04% accuracy.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:thota.deepika.05@gmail.com"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/detect" className="text-muted-foreground hover:text-primary transition-colors">
                  Detect Disease
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Research */}
          <div>
            <h4 className="font-display font-semibold mb-4">Research</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  IEEE Paper <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <span className="text-muted-foreground">MS Ramaiah IT</span>
              </li>
              <li>
                <span className="text-muted-foreground">Bengaluru, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 AgroDetect. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            979-8-3315-5479-8/25/$31.00 © 2025 IEEE
          </p>
        </div>
      </div>
    </footer>
  );
}
