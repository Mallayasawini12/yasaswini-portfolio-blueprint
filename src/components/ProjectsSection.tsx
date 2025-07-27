import { Code, ExternalLink, Github, Database, Smartphone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import projectsTech from '@/assets/projects-tech.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Engineering Management System",
      description: "A comprehensive web application for managing engineering projects, student records, and academic workflows. Built with modern technologies for optimal user experience.",
      image: projectsTech,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Web Development",
      status: "In Progress",
      icon: <Globe className="w-5 h-5" />,
      color: "primary"
    },
    {
      title: "Smart Campus Mobile App",
      description: "Mobile application concept for digital campus management including attendance tracking, assignment submissions, and campus navigation features.",
      image: projectsTech,
      technologies: ["React Native", "Firebase", "API Integration"],
      category: "Mobile Development",
      status: "Concept",
      icon: <Smartphone className="w-5 h-5" />,
      color: "accent"
    },
    {
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for analyzing academic performance metrics and trends. Features real-time data visualization and comprehensive reporting.",
      image: projectsTech,
      technologies: ["Python", "Pandas", "Plotly", "Streamlit"],
      category: "Data Science",
      status: "Planned",
      icon: <Database className="w-5 h-5" />,
      color: "primary"
    },
    {
      title: "IoT Environmental Monitor",
      description: "IoT-based system for monitoring environmental conditions in engineering labs. Includes sensor integration and real-time alerts.",
      image: projectsTech,
      technologies: ["Arduino", "Sensors", "IoT Platform", "C++"],
      category: "IoT & Hardware",
      status: "Research",
      icon: <Code className="w-5 h-5" />,
      color: "accent"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Progress": return "bg-accent text-accent-foreground";
      case "Concept": return "bg-primary text-primary-foreground";
      case "Planned": return "bg-secondary text-secondary-foreground";
      case "Research": return "bg-muted text-muted-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-tech floating-elements relative">
      <div className="absolute inset-0 cyber-grid opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-neon-primary mb-4 glow-primary">
              Projects & Work
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Exploring technology through hands-on projects that combine learning with 
              practical application. Each project represents a step in my engineering journey.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group hover-lift-neon transition-float shadow-floating overflow-hidden animate-scale-in glass-neon border border-primary/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-float group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-glow"></div>
                    <div className="absolute top-4 left-4">
                      <div className={`p-2 rounded-full bg-${project.color} text-${project.color}-foreground`}>
                        {project.icon}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-playfair font-semibold text-xl text-neon-primary mb-3 group-hover:text-neon-accent transition-glow">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 font-inter">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs border-primary/30 hover:border-neon-accent transition-glow hover:glow-accent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-glow hover-glow-primary border-primary/30"
                    >
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="text-xs hover:bg-accent hover:text-accent-foreground transition-glow hover-glow-accent border-accent/30"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </Button>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-xs text-muted-foreground hover:text-neon-primary transition-glow"
                  >
                    Learn More →
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in delay-500">
            <div className="p-8 bg-gradient-neon rounded-2xl text-background shadow-floating border border-primary/30 animate-glow-pulse">
              <h3 className="font-playfair font-semibold text-2xl mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-background/90 mb-6 max-w-md mx-auto font-inter">
                I'm always excited to work on new projects and learn from experienced developers.
              </p>
              <Button 
                variant="secondary"
                size="lg"
                className="bg-background text-primary hover:bg-background/90 transition-glow hover-glow-primary"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;