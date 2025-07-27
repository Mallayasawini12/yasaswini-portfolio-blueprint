import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "yasaswini@student.kiet.edu",
      href: "mailto:yasaswini@student.kiet.edu",
      color: "accent"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 XXX XXX XXXX",
      href: "tel:+91xxxxxxxxxx",
      color: "primary"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Kakinada, Andhra Pradesh",
      href: "#",
      color: "accent"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "#",
      color: "primary"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "#",
      color: "accent"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      label: "Toastmasters",
      href: "#",
      color: "primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair font-bold text-4xl md:text-5xl text-primary mb-4">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              I'm always interested in connecting with fellow students, professionals, 
              and anyone passionate about engineering and technology. Let's start a conversation!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in delay-100">
              <Card className="shadow-card mb-8">
                <CardHeader>
                  <h3 className="font-playfair font-semibold text-2xl text-primary">
                    Get In Touch
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    Feel free to reach out for collaboration opportunities, academic discussions, 
                    or just to connect and share experiences.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className={`p-3 rounded-full bg-${info.color} text-${info.color}-foreground transition-smooth group-hover:scale-110`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-inter font-medium text-foreground">
                          {info.label}
                        </p>
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-accent transition-smooth font-inter"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-card">
                <CardHeader>
                  <h3 className="font-playfair font-semibold text-xl text-primary">
                    Connect Online
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className={`hover:bg-${social.color} hover:text-${social.color}-foreground hover:border-${social.color} transition-smooth hover-lift`}
                        asChild
                      >
                        <a href={social.href} aria-label={social.label}>
                          {social.icon}
                        </a>
                      </Button>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-4 font-inter">
                    Follow my journey in engineering, public speaking, and technology on social platforms.
                  </p>
                </CardContent>
              </Card>

              {/* Availability */}
              <div className="mt-8 p-6 bg-gradient-hero rounded-lg text-white">
                <h4 className="font-playfair font-semibold text-lg mb-3">
                  Currently Available For
                </h4>
                <div className="space-y-2 font-inter">
                  <p className="text-white/90 text-sm">• Internship opportunities</p>
                  <p className="text-white/90 text-sm">• Academic collaborations</p>
                  <p className="text-white/90 text-sm">• Project partnerships</p>
                  <p className="text-white/90 text-sm">• Speaking opportunities</p>
                  <p className="text-white/90 text-sm">• Mentorship connections</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in delay-200">
              <Card className="shadow-card">
                <CardHeader>
                  <h3 className="font-playfair font-semibold text-2xl text-primary">
                    Send a Message
                  </h3>
                  <p className="text-muted-foreground font-inter">
                    I'd love to hear from you. Send me a message and I'll respond as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-inter">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                          className="transition-smooth focus:border-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-inter">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          required
                          className="transition-smooth focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 font-inter">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                        className="transition-smooth focus:border-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 font-inter">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, question, or just say hello..."
                        rows={6}
                        required
                        className="transition-smooth focus:border-accent resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent-light text-accent-foreground font-medium py-3 transition-smooth hover-lift"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-xs text-muted-foreground font-inter leading-relaxed">
                      <strong>Response Time:</strong> I typically respond within 24-48 hours. 
                      For urgent matters, please mention it in your subject line.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;