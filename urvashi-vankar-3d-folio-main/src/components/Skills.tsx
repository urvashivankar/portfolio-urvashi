import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  Cloud, 
  Brain, 
  BarChart3, 
  GitBranch,
  FileCode,
  Workflow
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming & AI/ML",
    icon: Code2,
    skills: [
      "Python",
      "Data Science Fundamentals",
      "AI/ML",
      "Generative AI",
      "LLMs",
      "NLP",
      "Prompt Engineering",
      "RAG",
      "LangChain Framework"
    ]
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    skills: [
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Power BI",
      "Databricks"
    ]
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    skills: [
      "AWS Cloud Fundamentals",
      "IBM Cloud",
      "SkillsBuild Platform",
      "AI Model Deployment"
    ]
  },
  {
    title: "Soft Skills",
    icon: Brain,
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Data-Driven Decision Making",
      "Team Collaboration",
      "Communication",
      "Continuous Learning"
    ]
  }
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Technical Skills
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit for turning data into insights
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="glass-card p-6 rounded-xl hover-lift"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.3, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 
                        }}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
