import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Volume2, Printer, Clock, AlertTriangle, Lightbulb, Cpu } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

// Add these lines at the top with the other imports
import ledDisplayImage from "../assets/led-display.png";
import voiceModelImage from "../assets/voice-model.jpg";
import tokenPrinterImage from "../assets/token-printer.jpg";

type Product = {
  image?: string; // Image is now optional
  icon?: React.ReactNode; // Icon is now an option
  title: string;  
  description: string;
  features: string[];
};

const Products = () => {
  const products = [
    {
      image: ledDisplayImage,
      title: "LED Display Model",
      description:
        "PPE Matrix Display Boards for Indian Oil (SRPL & WRPL) with LED technology",
      features: [
        "Real-time PPE monitoring",
        "High-visibility LED displays",
        "Weather-resistant design",
      ],
    },
    {
      image: voiceModelImage,
      title: "LED + Voice Model",
      description: "Enhanced PPE displays with voice announcement capabilities",
      features: [
        "Voice guidance system",
        "Multi-language support",
        "Audio-visual alerts",
      ],
    },
    {
      image: tokenPrinterImage,
      title: "LED + Voice + Token Printing",
      description:
        "Complete PPE solution with thermal token printing for record-keeping",
      features: [
        "Thermal token printing",
        "Workforce tracking",
        "Complete audit trail",
      ],
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Time-Based Voice Systems",
      description:
        "Announcement systems for scheduled operations (e.g., Sakthi Auto Components)",
      features: [
        "Scheduled announcements",
        "Custom messaging",
        "Industrial grade speakers",
      ],
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-primary" />,
      title: "Error Proofing Systems",
      description: "Product error detection and prevention for assembly lines",
      features: [
        "Real-time error detection",
        "Assembly line integration",
        "Quality assurance",
      ],
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Smart Lighting Solutions",
      description:
        "Intelligent lighting systems for quality inspectors and operations",
      features: [
        "Adaptive lighting",
        "Energy efficient",
        "Quality enhancement",
      ],
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Poultry Automation",
      description:
        "Time-based monitoring systems for poultry industry operations",
      features: [
        "Environmental monitoring",
        "Automated feeding",
        "Health tracking",
      ],
    },
  ];
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* ... (Header section is unchanged) ... */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Products & Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive automation solutions designed for diverse industrial applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-hover transition-all duration-300 transform hover:scale-105 bg-card border-none shadow-card animate-slide-up group flex flex-col"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* --- CHANGE 3: Conditional Rendering Logic --- */}
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-primary/5 flex items-center justify-center">
                  {product.icon}
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  onClick={() => setSelectedProduct(product)}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedProduct !== null} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProduct.title}</DialogTitle>
                <DialogDescription>{selectedProduct.description}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                {/* Conditionally show image in modal as well */}
                {selectedProduct.image && (
                   <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-auto rounded-lg object-cover" />
                )}
                
                {/* Make the features section span full width if there's no image */}
                <div className={selectedProduct.image ? "" : "md:col-span-2"}>
                  <h4 className="font-semibold text-lg mb-2 text-primary">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                       <li key={index} className="flex items-center text-sm text-muted-foreground">
                         <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                         {feature}
                       </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Products;