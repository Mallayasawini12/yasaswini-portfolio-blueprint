import { GraduationCap, MapPin, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import aboutEducation from '@/assets/about-education.jpg';

const AboutSection = () => {
  const education = [
    {
      level: "B.Tech Engineering",
      institution: "KIET Engineering College, Kakinada",
      status: "Currently pursuing - 2nd Year",
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      description: "Developing strong foundation in engineering principles and modern technology"
    },
    {
      level: "Intermediate (12th)",
      institution: "Sri Chaitanya, Vizag",
      status: "70% - Science Stream",
      icon: <Award className="w-6 h-6 text-accent" />,
      description: "Focused on Physics, Chemistry, and Mathematics"
    },
    {
      level: "Schooling (10th)",
      institution: "Sri Chaitanya, Anakapalli",
      status: "90% - Outstanding Performance",
      icon: <Award className="w-6 h-6 text-primary" />,
      description: "Strong academic foundation with excellent results"
    }
  ];

  const interests = [
    { name: "Public Speaking", description: "Active member of Toastmasters Club" },
    { name: "Technology", description: "Passionate about coding and innovation" },
    { name: "Leadership", description: "Developing leadership skills through club activities" },
    { name: "Learning", description: "Continuous growth mindset and skill development" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              A passionate B.Tech student combining academic excellence with leadership experience, 
              building skills for a future in engineering and technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Story */}
            <div className="animate-fade-in delay-100">
              <div className="relative mb-8">
                <img 
                  src={aboutEducation} 
                  alt="Educational Journey" 
                  className="w-full h-64 object-cover rounded-2xl shadow-card"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
              
              <h3 className="font-playfair font-semibold text-2xl text-primary mb-4">
                My Journey
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed font-inter">
                From achieving 90% in my schooling at Sri Chaitanya Anakapalli to pursuing my 
                B.Tech at KIET Engineering College, I've maintained a strong commitment to 
                academic excellence and personal growth.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed font-inter">
                Currently in my 2nd year of B.Tech, I'm passionate about leveraging technology 
                to solve real-world problems. My involvement with KW's Silver Tongue Toastmasters 
                Club has enhanced my communication and leadership skills, preparing me for future challenges.
              </p>

              {/* Personal Interests */}
              <div className="mt-8">
                <h4 className="font-playfair font-semibold text-xl text-primary mb-4 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-accent" />
                  Interests & Passions
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <div key={index} className="p-4 bg-card rounded-lg shadow-sm border">
                      <h5 className="font-inter font-medium text-foreground mb-1">{interest.name}</h5>
                      <p className="text-sm text-muted-foreground">{interest.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="animate-fade-in delay-200">
              <h3 className="font-playfair font-semibold text-2xl text-primary mb-8 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-accent" />
                Educational Journey
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="hover-lift transition-smooth shadow-card border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          {edu.icon}
                        </div>
                        <div className="flex-grow">
                          <h4 className="font-inter font-semibold text-lg text-primary mb-1">
                            {edu.level}
                          </h4>
                          <p className="font-medium text-foreground mb-1">
                            {edu.institution}
                          </p>
                          <p className="text-accent font-medium mb-3">
                            {edu.status}
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-8 p-6 bg-gradient-hero rounded-2xl text-white">
                <h4 className="font-playfair font-semibold text-xl mb-4">Quick Facts</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-bold text-accent">2nd</p>
                    <p className="text-sm opacity-90">Year B.Tech Student</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">90%</p>
                    <p className="text-sm opacity-90">School Academic Score</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">Active</p>
                    <p className="text-sm opacity-90">Toastmaster Member</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-accent">KIET</p>
                    <p className="text-sm opacity-90">Engineering College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;