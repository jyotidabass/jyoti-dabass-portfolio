import { BookOpen, Award, Users2, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Research = () => {
  const achievements = [
    {
      icon: FileText,
      title: "550+ Publications",
      description: "Research papers and blogs across AI, ML, and computer vision",
      metric: "550+",
      color: "text-primary"
    },
    {
      icon: Users2,
      title: "300+ Reviews",
      description: "Peer reviews for international publications and journals", 
      metric: "300+",
      color: "text-accent"
    },
    {
      icon: BookOpen,
      title: "50+ Journals",
      description: "Technical reviewer for international journals and books",
      metric: "50+",
      color: "text-secondary"
    },
    {
      icon: Award,
      title: "Research Leadership",
      description: "Published 10 papers during postdoctoral research at IIT Delhi",
      metric: "IIT Delhi",
      color: "text-primary"
    }
  ];

  const platforms = [
    {
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=a7HGcrkAAAAJ&hl=en&oi=ao",
      description: "Complete publication record and citation metrics"
    },
    {
      name: "Semantic Scholar", 
      url: "https://www.semanticscholar.org/author/Jyoti-Dabass/83462281",
      description: "AI-powered research discovery and insights"
    },
    {
      name: "Publons",
      url: "https://publons.com/researcher/3973927/jyoti-dabass/",
      description: "Peer review contributions and academic activity"
    },
    {
      name: "Medium",
      url: "https://medium.com/@jyotidabass", 
      description: "Technical blogs and knowledge sharing"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Research & Publications
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Contributing to the advancement of AI and machine learning research
          </p>

          {/* Research Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="text-center bg-card rounded-lg p-6 shadow-card border border-border hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                    {achievement.metric}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </div>
              );
            })}
          </div>

          {/* Research Platforms */}
          <div className="bg-gradient-card rounded-lg p-8 shadow-elegant border border-border">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Research Profiles & Platforms
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-card rounded-lg border border-border hover:shadow-elegant transition-all duration-300 hover:scale-105 hover:border-primary/20"
                >
                  <div>
                    <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {platform.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      {platform.description}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="gradient" size="lg" asChild>
                <a href="https://scholar.google.com/citations?user=a7HGcrkAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="w-5 h-5" />
                  View All Publications
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;