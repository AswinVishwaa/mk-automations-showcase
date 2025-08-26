import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, MapPin, FileText } from 'lucide-react';

const IOCLSolutions = () => {
  const solutions = [
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Automated PPE Matrix Display Board",
      description: "Real-time personal protective equipment monitoring and compliance tracking for enhanced workplace safety.",
      locations: ["SRPL", "WRPL"],
      status: "Active"
    },
    {
      icon: <FileText className="w-8 h-8 text-accent" />,
      title: "Daily Fire Fighting Organogram Display",
      description: "Dynamic organizational chart display for fire fighting teams with real-time updates and emergency protocols.",
      locations: ["WRPL Jodpur"],
      status: "Deployed"
    },
    {
      icon: <MapPin className="w-8 h-8 text-accent" />,
      title: "Live Work Permit Locator",
      description: "Real-time tracking and display of active work permits with location-based monitoring for safety compliance.",
      locations: ["WRPL Jodpur"],
      status: "Operational"
    }
  ];

  const installations = {
    SRPL: [
      "Sankari (TN)",
      "Ramanathapuram (TN)", 
      "Manali—Chennai (TN)",
      "Vijayavada—Andrapradesh"
    ],
    WRPL: [
      "Viramgam (GJ)",
      "Beawar (RJ)",
      "Mundra (GJ)",
      "Rajola (GJ)",
      "KOT (RJ)",
      "Jodpur (RJ)",
      "Koyali (GJ)",
      "Sidhpur (GJ)"
    ]
  };

  return (
    <section id="iocl" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            IOCL Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Specialized automation solutions for Indian Oil Corporation Limited (IOCL) facilities
          </p>
        </div>

        {/* Featured Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-hover transition-all duration-300 transform hover:scale-105 bg-card border-none shadow-card animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-accent/10 rounded-lg mr-4">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {solution.title}
                  </h3>
                  <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                    {solution.status}
                  </Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {solution.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {solution.locations.map((location, locIndex) => (
                  <Badge key={locIndex} variant="outline" className="border-primary/30">
                    {location}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Installation Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(installations).map(([division, locations]) => (
            <Card 
              key={division} 
              className="p-6 bg-card border-none shadow-card animate-fade-in"
            >
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <div className="w-4 h-4 bg-gradient-primary rounded-full mr-3"></div>
                {division} Installations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {locations.map((location, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 bg-muted rounded-lg hover:bg-primary/5 transition-colors duration-200"
                  >
                    <MapPin className="w-4 h-4 text-primary mr-3" />
                    <span className="text-muted-foreground">{location}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IOCLSolutions;