import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Senior AI Engineer",
      company: "Synapse",
      period: "Apr 2025 - Present",
      duration: "4 mos",
      description: "Built a modular AI recruitment platform with six FastAPI microservices using GPT-4, Google Gemini, and LangChain. Achieved 90% automation in sourcing and 60% faster hiring with enterprise-grade scalability.",
      skills: ["Python", "FastAPI", "GPT-4", "Google Gemini", "LangChain", "Docker", "Google Cloud"],
      highlight: true
    },
    {
      role: "Editor",
      company: "Elsevier",
      period: "Feb 2025 - Present", 
      description: "Managing sections on AI in Business Operations, Cybersecurity, and Advanced Applications for the Encyclopedia of Artificial Intelligence.",
      skills: ["Technical Writing", "AI Research", "Editorial Management"]
    },
    {
      role: "Content Creator",
      company: "GUVI Geek Networks, IITM Research Park",
      period: "Sept 2024 - Present",
      description: "Created comprehensive courses on Large Language Models and NLP model fine-tuning using Hugging Face AutoTrain.",
      skills: ["LLMs", "Hugging Face", "Course Development", "Technical Training"]
    },
    {
      role: "Senior AI Researcher", 
      company: "Artisan",
      period: "March 2024 - August 2024",
      description: "Developed proposals and code for creating human-like LLM with natural workplace interaction capabilities.",
      skills: ["LLM Development", "Research", "Proposal Writing"]
    },
    {
      role: "Senior AI Consultant (Generative AI)",
      company: "InSynk Studios", 
      period: "Sep 2023 - Mar 2024",
      description: "Developed AI-powered Virtual Try-on solutions and text-to-video conversion tools using deep learning and computer vision.",
      skills: ["Computer Vision", "Deep Learning", "TensorFlow", "OpenCV", "NLP"]
    },
    {
      role: "Postdoctoral Research Associate",
      company: "IIT Delhi",
      period: "August 2022 - May 2024",
      description: "Focused on AI research and applications, published 10 research papers and secured research funding.",
      skills: ["AI Research", "Publications", "Grant Writing"]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Leading AI innovation across research and industry
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-12 md:pl-20 animate-fade-in ${exp.highlight ? 'transform hover:scale-[1.02]' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-2 md:left-6 w-4 h-4 rounded-full border-4 ${
                    exp.highlight 
                      ? 'bg-primary border-primary shadow-glow animate-pulse' 
                      : 'bg-card border-primary'
                  } top-6`}></div>
                  
                  <div className={`bg-card rounded-lg p-6 shadow-card border border-border hover:shadow-elegant transition-all duration-300 ${
                    exp.highlight ? 'ring-2 ring-primary/20 bg-gradient-card' : ''
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 text-primary font-medium mb-2">
                          <Building className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                        {exp.duration && <span className="text-accent">• {exp.duration}</span>}
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;