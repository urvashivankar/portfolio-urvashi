import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Python Intern",
    company: "KS Technologies",
    period: "2022",
    description: "Worked on Python exercises and mini-projects, developing practical programming skills and problem-solving abilities.",
    skills: ["Python", "Problem Solving", "Software Development"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    role: "PHP Intern",
    company: "Arth Technology",
    period: "2022",
    description: "Developed dynamic web pages and backend forms, gaining experience in web development and server-side programming.",
    skills: ["PHP", "Web Development", "Backend Development", "Forms"],
    color: "from-purple-500 to-pink-500"
  }
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Experience
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Building practical skills through internships
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-card rounded-xl overflow-hidden hover-lift group"
              >
                <div className={`h-2 bg-gradient-to-r ${exp.color}`} />
                
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-1">📅 {exp.period}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
