import { MapPin, Phone, Mail, Building } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">MK</span>
              </div>
              <span className="font-bold text-2xl">MK Automations</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Delivering innovative automation solutions that enhance productivity, quality, and safety across multiple industries. Trusted partner of IOCL and leading corporations.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">
                  155/3, S.S.D. Road, Tiruchengode, Tamil Nadu – 637 211
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">80157 42810</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">automationsmk@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '#about', label: 'About Us' },
                { href: '#products', label: 'Products' },
                { href: '#iocl', label: 'IOCL Solutions' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Business Details</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Building className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  GSTIN: 33IPIPS7553P1ZU
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Building className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  State Code: 33
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Building className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  IOCL Vendor: 0013266398
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 MK Automations. All rights reserved. | Empowering Industries Through Innovation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;