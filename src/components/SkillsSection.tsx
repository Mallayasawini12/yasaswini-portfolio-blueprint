import { Code, MessageCircle, Users, Lightbulb, Database, Globe, Smartphone, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: <Code className="w-6 h-6" />,
      color: "primary",
      skills: [
        { name: "Programming Fundamentals", level: 75, technologies: ["C++", "Python", "Java"] },
        { name: "Web Development", level: 65, technologies: ["HTML/CSS", "JavaScript", "React"] },
        { name: "Database Systems", level: 55, technologies: ["SQL", "MongoDB"] },
        { name: "Engineering Tools", level: 70, technologies: ["CAD", "MATLAB", "Simulink"] }
      ]
    },
    {
      title: "Communication Skills",
      icon: <MessageCircle className="w-6 h-6" />,
      color: "accent",
      skills: [
        { name: "Public Speaking", level: 85, technologies: ["Toastmasters", "Presentations"] },
        { name: "Technical Writing", level: 70, technologies: ["Documentation", "Reports"] },
        { name: "Cross-Cultural Communication", level: 75, technologies: ["English", "Telugu", "Hindi"] },
        { name: "Presentation Skills", level: 80, technologies: ["PowerPoint", "Canva"] }
      ]
    },
    {
      title: "Leadership & Soft Skills",
      icon: <Users className="w-6 h-6" />,
      color: "primary",
      skills: [
        { name: "Team Leadership", level: 75, technologies: ["Project Management", "Team Building"] },
        { name: "Problem Solving", level: 80, technologies: ["Analytical Thinking", "Innovation"] },
        { name: "Time Management", level: 85, technologies: ["Planning", "Prioritization"] },
        { name: "Adaptability", level: 90, technologies: ["Learning Agility", "Flexibility"] }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "accent",
      skills: [
        { name: "Artificial Intelligence", level: 45, technologies: ["Machine Learning", "AI Concepts"] },
        { name: "IoT Development", level: 50, technologies: ["Arduino", "Sensors"] },
        { name: "Cloud Computing", level: 40, technologies: ["AWS Basics", "Cloud Concepts"] },
        { name: "Data Analytics", level: 55, technologies: ["Python", "Pandas", "Visualization"] }
      ]
    }
  ];

  const achievements = [
    {
      icon: <MessageCircle className="w-8 h-8 text-accent" />,
      title: "Active Toastmaster",
      description: "Member of KW's Silver Tongue Toastmasters Club",
      highlight: "Communication Excellence"
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Academic Achievement",
      description: "90% in School, Pursuing B.Tech Engineering",
      highlight: "Consistent Excellence"
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Leadership Development",
      description: "Growing leadership skills through club activities",
      highlight: "Future Leader"
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 80) return "bg-accent";
    if (level >= 60) return "bg-primary";
    return "bg-muted-foreground";
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Building a comprehensive skill set that combines technical knowledge with 
              strong communication and leadership abilities for the future of engineering.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className="hover-lift transition-smooth shadow-card animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-full bg-${category.color} text-${category.color}-foreground mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className="font-playfair font-semibold text-xl text-primary">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-3">
                        <div className="flex justify-between items-center">
                          <h4 className="font-inter font-medium text-foreground">
                            {skill.name}
                          </h4>
                          <span className="text-sm text-muted-foreground font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted"
                        />
                        
                        <div className="flex flex-wrap gap-1">
                          {skill.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md font-inter"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Key Achievements */}
          <div className="mb-16 animate-fade-in delay-500">
            <h3 className="font-playfair font-semibold text-2xl text-primary text-center mb-8">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover-lift transition-smooth shadow-card text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {achievement.icon}
                    </div>
                    <h4 className="font-inter font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {achievement.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {achievement.highlight}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Development Focus */}
          <div className="text-center animate-fade-in delay-700">
            <div className="p-8 bg-gradient-hero rounded-2xl text-white">
              <h3 className="font-playfair font-semibold text-2xl mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto font-inter leading-relaxed">
                As a B.Tech student, I'm committed to continuous skill development. Currently focusing on 
                advanced programming concepts, emerging technologies, and leadership skills through 
                practical projects and club activities.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-inter">
                  Next: Advanced Web Development
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-inter">
                  Focus: Data Science & AI
                </span>
                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-inter">
                  Goal: Industry Certifications
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;