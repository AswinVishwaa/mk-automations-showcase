import { Card } from '@/components/ui/card';
import { Zap, Shield, Target, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "Cutting-edge automation solutions that drive industry transformation"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Safety",
      description: "Comprehensive safety systems ensuring workplace protection and compliance"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Precision",
      description: "Precise engineering and implementation for optimal performance"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality",
      description: "Proven track record with industry leaders like IOCL across India"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            About MK Automations
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16 animate-slide-up">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            MK Automations delivers innovative automation solutions that enhance productivity, quality, and safety across oil, automotive, manufacturing, and poultry sectors. Core strengths include PPE display boards, product error-proofing systems, smart lighting solutions, and customized automation projects — combining innovation with precision to empower industries for a smarter future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover:shadow-hover transition-all duration-300 transform hover:scale-105 bg-card border-none shadow-card animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;