import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Monitor, Volume2, Printer, Clock, AlertTriangle, Lightbulb, Cpu } from 'lucide-react';

const Products = () => {
  const products = [
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "LED Display Model",
      description: "PPE Matrix Display Boards for Indian Oil (SRPL & WRPL) with LED technology",
      features: ["Real-time PPE monitoring", "High-visibility LED displays", "Weather-resistant design"]
    },
    {
      icon: <Volume2 className="w-8 h-8 text-primary" />,
      title: "LED + Voice Model",
      description: "Enhanced PPE displays with voice announcement capabilities",
      features: ["Voice guidance system", "Multi-language support", "Audio-visual alerts"]
    },
    {
      icon: <Printer className="w-8 h-8 text-primary" />,
      title: "LED + Voice + Token Printing",
      description: "Complete PPE solution with thermal token printing for record-keeping",
      features: ["Thermal token printing", "Workforce tracking", "Complete audit trail"]
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Time-Based Voice Systems",
      description: "Announcement systems for scheduled operations (e.g., Sakthi Auto Components)",
      features: ["Scheduled announcements", "Custom messaging", "Industrial grade speakers"]
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-primary" />,
      title: "Error Proofing Systems",
      description: "Product error detection and prevention for assembly lines",
      features: ["Real-time error detection", "Assembly line integration", "Quality assurance"]
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Smart Lighting Solutions",
      description: "Intelligent lighting systems for quality inspectors and operations",
      features: ["Adaptive lighting", "Energy efficient", "Quality enhancement"]
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Poultry Automation",
      description: "Time-based monitoring systems for poultry industry operations",
      features: ["Environmental monitoring", "Automated feeding", "Health tracking"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
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
              className="p-6 hover:shadow-hover transition-all duration-300 transform hover:scale-105 bg-card border-none shadow-card animate-slide-up group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {product.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-4">
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
              
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;