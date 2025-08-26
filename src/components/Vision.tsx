import { Card } from '@/components/ui/card';
import { Target, Users, Globe, Lightbulb } from 'lucide-react';

const Vision = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Efficiency",
      description: "Streamlining operations through intelligent automation"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Quality",
      description: "Maintaining the highest standards in every solution"
    },
    {
      icon: <Globe className="w-8 h-8 text-accent" />,
      title: "Safety",
      description: "Prioritizing workplace safety in all implementations"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-accent" />,
      title: "Innovation",
      description: "Pioneering the future of industrial automation"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
          <blockquote className="text-2xl md:text-3xl font-light text-foreground italic leading-relaxed">
            "To innovate and provide reliable automation systems that empower industries to achieve efficiency, quality, and safety."
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-hover transition-all duration-300 transform hover:scale-105 bg-card/80 backdrop-blur-sm border-none shadow-card animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-accent/10 rounded-full">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;