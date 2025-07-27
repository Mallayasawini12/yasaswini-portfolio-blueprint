import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Hero Content */}
          <div className="animate-fade-in">
            <p className="text-accent font-inter font-medium text-lg mb-4 tracking-wide">
              Hello, I'm
            </p>
            <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-white leading-tight">
              Yasaswini
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 font-inter font-light leading-relaxed">
              <p className="mb-2">B.Tech Student & Future Engineer</p>
              <p className="text-accent text-lg">
                Turning ideas into reality through code and leadership
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-200">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-white font-medium px-8 py-3 rounded-full transition-smooth hover-lift"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-medium px-8 py-3 rounded-full transition-smooth backdrop-blur-sm"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in delay-300">
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:text-accent hover:bg-white/10 transition-smooth rounded-full"
            >
              <Github size={24} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:text-accent hover:bg-white/10 transition-smooth rounded-full"
            >
              <Linkedin size={24} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-white hover:text-accent hover:bg-white/10 transition-smooth rounded-full"
            >
              <Mail size={24} />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in delay-400">
            <Button
              variant="ghost"
              onClick={scrollToAbout}
              className="text-white hover:text-accent transition-smooth rounded-full p-2"
            >
              <ArrowDown size={24} className="animate-bounce" />
            </Button>
            <p className="text-white/70 text-sm mt-2 font-inter">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;