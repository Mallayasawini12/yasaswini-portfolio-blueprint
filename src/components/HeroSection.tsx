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
      className="min-h-screen flex items-center justify-center relative overflow-hidden floating-elements"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.9)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Neon Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden cyber-grid opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-success/15 rounded-full blur-3xl animate-float delay-1000"></div>
        
        {/* Tech circuit lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-tech-scan"></div>
          <div className="absolute bottom-32 right-20 w-48 h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-tech-scan delay-700"></div>
          <div className="absolute top-1/2 left-20 w-px h-24 bg-gradient-to-b from-transparent via-success to-transparent animate-tech-scan delay-300"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Hero Content */}
          <div className="animate-scale-in">
            <p className="text-neon-accent font-inter font-medium text-lg mb-4 tracking-wide animate-neon-flicker">
              Hello, I'm
            </p>
            <h1 className="font-playfair font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-gradient-neon leading-tight glow-primary">
              Yasaswini
            </h1>
            <div className="text-xl md:text-2xl lg:text-3xl text-foreground mb-8 font-inter font-light leading-relaxed">
              <p className="mb-2 text-neon-primary">B.Tech Student & Future Engineer</p>
              <p className="text-neon-accent text-lg animate-neon-flicker delay-300">
                Turning ideas into reality through code and leadership
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-200">
            <Button 
              size="lg" 
              className="bg-gradient-neon hover:shadow-floating text-background font-medium px-8 py-3 rounded-full transition-float hover-lift-neon border-neon-accent"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-neon border-neon-primary text-foreground hover-glow-primary font-medium px-8 py-3 rounded-full transition-glow"
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
              className="text-foreground hover:text-neon-primary hover-glow-primary transition-glow rounded-full border border-primary/30 glass-neon"
            >
              <Github size={24} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-foreground hover:text-neon-accent hover-glow-accent transition-glow rounded-full border border-accent/30 glass-neon"
            >
              <Linkedin size={24} />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="text-foreground hover:text-neon-accent hover-glow-accent transition-glow rounded-full border border-accent/30 glass-neon"
            >
              <Mail size={24} />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in delay-400">
            <Button
              variant="ghost"
              onClick={scrollToAbout}
              className="text-foreground hover:text-neon-primary hover-glow-primary transition-glow rounded-full p-2 animate-float"
            >
              <ArrowDown size={24} className="animate-bounce" />
            </Button>
            <p className="text-muted-foreground text-sm mt-2 font-inter animate-neon-flicker">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;