import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <div className="md:col-span-1">
              <h3 className="font-playfair font-bold text-2xl mb-4">
                Yasaswini
              </h3>
              <p className="text-primary-foreground/80 mb-4 font-inter leading-relaxed">
                B.Tech student at KIET Engineering College, passionate about technology, 
                innovation, and leadership development through Toastmasters.
              </p>
              <p className="text-primary-foreground/60 text-sm font-inter">
                Building the future, one project at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="font-playfair font-semibold text-lg mb-4 text-accent">
                Quick Links
              </h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-primary-foreground/80 hover:text-accent transition-smooth font-inter text-left"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="font-playfair font-semibold text-lg mb-4 text-accent">
                Get In Touch
              </h4>
              <div className="space-y-3 text-primary-foreground/80 font-inter">
                <p className="text-sm">
                  <strong>Location:</strong> Kakinada, Andhra Pradesh
                </p>
                <p className="text-sm">
                  <strong>Institution:</strong> KIET Engineering College
                </p>
                <p className="text-sm">
                  <strong>Club:</strong> KW's Silver Tongue Toastmasters
                </p>
                <p className="text-sm">
                  <strong>Status:</strong> Open for internships & collaborations
                </p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center text-primary-foreground/60 text-sm font-inter mb-4 md:mb-0">
                <span>© {currentYear} Yasaswini. Made with</span>
                <Heart className="w-4 h-4 mx-1 text-accent fill-current" />
                <span>and lots of ☕</span>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-primary-foreground/60 text-sm font-inter">
                  Built with React, TypeScript & Tailwind CSS
                </span>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={scrollToTop}
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-smooth"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className="mt-8 text-center">
            <p className="font-playfair text-accent italic text-lg">
              "The future belongs to those who believe in the beauty of their dreams."
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2 font-inter">
              - Eleanor Roosevelt
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;