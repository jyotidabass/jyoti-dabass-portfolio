import { Brain, Code, Database, Cloud, Cpu, Network } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Artificial Intelligence & Machine Learning",
      skills: [
        "Deep Learning", "Machine Learning", "Computer Vision", "Natural Language Processing",
        "Generative AI", "Large Language Models", "Neural Networks", "Transfer Learning"
      ],
      color: "bg-primary"
    },
    {
      icon: Code,
      title: "Programming & Frameworks",
      skills: [
        "Python", "TensorFlow", "PyTorch", "Keras", "FastAPI", "LangChain", 
        "Scikit-learn", "OpenCV", "Hugging Face", "AutoTrain"
      ],
      color: "bg-accent"
    },
    {
      icon: Database,
      title: "Data & Analytics",
      skills: [
        "Data Science", "Data Analytics", "Vector Databases", "PostgreSQL",
        "Firestore", "Data Processing", "Statistical Analysis", "Big Data"
      ],
      color: "bg-secondary"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        "Google Cloud Platform", "Docker", "Cloud Build", "Cloud Run",
        "CI/CD", "GitHub Actions", "Microservices", "API Development"
      ],
      color: "bg-primary/80"
    },
    {
      icon: Cpu,
      title: "AI Specializations",
      skills: [
        "Computer-Aided Diagnosis", "Fuzzy Logic", "Reinforcement Learning",
        "Meta-Learning", "Semantic Search", "GPT-4", "Google Gemini"
      ],
      color: "bg-accent/80"
    },
    {
      icon: Network,
      title: "Research & Academia",
      skills: [
        "Technical Writing", "Peer Review", "Research Methodology",
        "Grant Writing", "Mentoring", "Course Development", "Publication"
      ],
      color: "bg-secondary/80"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Comprehensive skills across AI, research, and technology development
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 shadow-card border border-border hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted text-foreground text-sm rounded-full border border-border hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;