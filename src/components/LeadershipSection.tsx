import { Mic, Users, Trophy, Target, Calendar, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LeadershipSection = () => {
  const toastmastersActivities = [
    {
      title: "Speech Competitions",
      description: "Participating in club-level speech contests to develop public speaking confidence",
      icon: <Mic className="w-5 h-5" />,
      status: "Active",
      impact: "Enhanced presentation skills"
    },
    {
      title: "Table Topics Sessions",
      description: "Regular impromptu speaking practice sessions to build quick thinking abilities",
      icon: <Target className="w-5 h-5" />,
      status: "Weekly",
      impact: "Improved spontaneous communication"
    },
    {
      title: "Mentorship Programs",
      description: "Learning from experienced speakers and supporting newer members",
      icon: <Users className="w-5 h-5" />,
      status: "Ongoing",
      impact: "Leadership development"
    },
    {
      title: "Event Organization",
      description: "Contributing to club meeting planning and special event coordination",
      icon: <Calendar className="w-5 h-5" />,
      status: "Volunteer",
      impact: "Project management skills"
    }
  ];

  const leadershipSkills = [
    {
      skill: "Public Speaking",
      level: "Intermediate",
      description: "Regular practice through Toastmasters meetings and academic presentations",
      color: "accent"
    },
    {
      skill: "Team Collaboration",
      level: "Developing",
      description: "Group projects in engineering coursework and club activities",
      color: "primary"
    },
    {
      skill: "Event Management",
      level: "Beginner",
      description: "Supporting club event planning and college activity coordination",
      color: "accent"
    },
    {
      skill: "Communication",
      level: "Advanced",
      description: "Enhanced through Toastmasters training and academic requirements",
      color: "primary"
    }
  ];

  const achievements = [
    {
      title: "Active Member Recognition",
      organization: "KW's Silver Tongue Toastmasters Club",
      date: "2024",
      description: "Consistent participation and contribution to club activities"
    },
    {
      title: "Academic Leadership",
      organization: "KIET Engineering College",
      date: "Ongoing",
      description: "Supporting classmates and participating in group projects"
    }
  ];

  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-accent text-accent-foreground";
      case "Intermediate": return "bg-primary text-primary-foreground";
      case "Developing": return "bg-secondary text-secondary-foreground";
      case "Beginner": return "bg-muted text-muted-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              Leadership & Activities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Developing leadership skills through active participation in Toastmasters Club 
              and various college activities, building confidence for future professional roles.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Toastmasters Spotlight */}
            <div className="lg:col-span-2 animate-fade-in delay-100">
              <Card className="shadow-card border-l-4 border-l-accent mb-8">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-accent rounded-full text-accent-foreground">
                      <Mic className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-playfair font-semibold text-xl text-primary">
                        KW's Silver Tongue Toastmasters Club
                      </h3>
                      <p className="text-muted-foreground font-inter">Active Member</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed font-inter">
                    As an active member of KW's Silver Tongue Toastmasters Club, I'm dedicated to 
                    improving my public speaking, communication, and leadership skills. This experience 
                    has been instrumental in building confidence and developing professional presentation abilities.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {toastmastersActivities.map((activity, index) => (
                      <div key={index} className="p-4 bg-secondary/50 rounded-lg border">
                        <div className="flex items-start space-x-3">
                          <div className="text-accent mt-1">
                            {activity.icon}
                          </div>
                          <div className="flex-grow">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-inter font-medium text-foreground text-sm">
                                {activity.title}
                              </h4>
                              <Badge variant="outline" className="text-xs">
                                {activity.status}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                              {activity.description}
                            </p>
                            <p className="text-xs text-accent font-medium">
                              {activity.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Leadership Skills Development */}
              <Card className="shadow-card">
                <CardHeader>
                  <h3 className="font-playfair font-semibold text-xl text-primary flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Leadership Skills Development
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {leadershipSkills.map((skill, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                        <div className="flex-grow">
                          <div className="flex items-center space-x-3 mb-1">
                            <h4 className="font-inter font-medium text-foreground">
                              {skill.skill}
                            </h4>
                            <Badge className={getSkillLevelColor(skill.level)}>
                              {skill.level}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements & Recognition */}
            <div className="animate-fade-in delay-200">
              <Card className="shadow-card mb-6">
                <CardHeader>
                  <h3 className="font-playfair font-semibold text-lg text-primary flex items-center">
                    <Trophy className="w-5 h-5 mr-2 text-accent" />
                    Achievements
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="p-4 bg-gradient-card rounded-lg border">
                      <h4 className="font-inter font-medium text-foreground mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-accent font-medium mb-2">
                        {achievement.organization}
                      </p>
                      <p className="text-xs text-muted-foreground mb-2">
                        {achievement.date}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Leadership Goals */}
              <Card className="shadow-card">
                <CardHeader>
                  <h3 className="font-playfair font-semibold text-lg text-primary flex items-center">
                    <Star className="w-5 h-5 mr-2 text-accent" />
                    Leadership Goals
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <h4 className="font-inter font-medium text-accent text-sm mb-1">
                        Short Term
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Complete Toastmasters CC manual and take on club officer role
                      </p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <h4 className="font-inter font-medium text-primary text-sm mb-1">
                        Medium Term
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Lead engineering project teams and organize college events
                      </p>
                    </div>
                    <div className="p-3 bg-secondary rounded-lg">
                      <h4 className="font-inter font-medium text-foreground text-sm mb-1">
                        Long Term
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        Develop into a technical leader in engineering industry
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quote/Inspiration */}
              <div className="mt-6 p-6 bg-gradient-hero rounded-lg text-white text-center">
                <p className="font-playfair text-lg italic mb-3">
                  "Leadership is not about being in charge. It's about taking care of those in your charge."
                </p>
                <p className="text-white/80 text-sm font-inter">
                  Growing as a leader through service and continuous learning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;