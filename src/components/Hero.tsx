import { Button } from "@/components/ui/button";
import { Github, BookOpen, Users, GraduationCap, Youtube, Linkedin } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/jyotidabass",
      icon: Github,
      description: "1000+ repositories"
    },
    {
      name: "Google Scholar", 
      url: "https://scholar.google.com/citations?user=a7HGcrkAAAAJ&hl=en&oi=ao",
      icon: GraduationCap,
      description: "550+ publications"
    },
    {
      name: "Semantic Scholar",
      url: "https://www.semanticscholar.org/author/Jyoti-Dabass/83462281",
      icon: BookOpen,
      description: "Research papers"
    },
    {
      name: "Publons",
      url: "https://publons.com/researcher/3973927/jyoti-dabass/",
      icon: Users,
      description: "Peer reviews"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jyoti-dabass-ph-d-2b747083/",
      icon: Linkedin,
      description: "Professional network"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@learning-chunks",
      icon: Youtube,
      description: "Educational content"
    }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Dr. Jyoti Dabass
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Senior AI Engineer & Research Leader
          </p>
          
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Researcher, Engineer and Head of R&D team with expertise in data science, analytics, 
            computer vision, deep learning, machine learning, artificial intelligence, and natural language processing.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button variant="gradient" size="lg" className="animate-glow">
              <BookOpen className="w-5 h-5" />
              View Research
            </Button>
            <Button variant="social" size="lg">
              <Github className="w-5 h-5" />
              GitHub Profile
            </Button>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-card rounded-lg border border-border shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 hover:border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    <div className="text-left">
                      <div className="font-medium text-foreground">{link.name}</div>
                      <div className="text-sm text-muted-foreground">{link.description}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;