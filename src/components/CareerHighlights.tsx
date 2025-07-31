import { Award, Users, BookOpen, Github, Trophy, Star } from "lucide-react";

const CareerHighlights = () => {
  const highlights = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Top 1% of class during all educational degrees with multidisciplinary background in computer science and electrical engineering.",
      metric: "Top 1%"
    },
    {
      icon: Trophy,
      title: "Competitive Achievements", 
      description: "Secured educational funding through competitive selections with scholarships for PhD and bachelor's degrees.",
      metric: "Scholarships Won"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Earned certifications from 500+ MOOCs on data science, machine learning, deep learning, and related technologies.",
      metric: "500+ Certifications"
    },
    {
      icon: Users,
      title: "Mentorship Impact",
      description: "Guided and mentored 100+ learners in thesis and projects with Liverpool John Moore's University and IIT Madras.",
      metric: "100+ Students"
    },
    {
      icon: Github,
      title: "Open Source Contribution",
      description: "Collaborated and shared 1000+ GitHub repositories, demonstrating strong commitment to open-source development.",
      metric: "1000+ Repos"
    },
    {
      icon: Star,
      title: "Research Excellence", 
      description: "Technical reviewer of 50+ international journals, reviewed 300+ publications, and published 550+ research papers and blogs.",
      metric: "550+ Publications"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Career Highlights
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Distinguished achievements in research, education, and professional excellence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="group bg-card rounded-lg p-6 shadow-card border border-border hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed mb-3">
                        {highlight.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                        {highlight.metric}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHighlights;