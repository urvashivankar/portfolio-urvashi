import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    institution: "Parul University",
    period: "2023 - 2026",
    grade: "CGPA: 8.00",
    status: "Ongoing"
  },
  {
    degree: "Diploma, Computer Engineering",
    institution: "Parul University",
    period: "2020 - 2023",
    grade: "CGPA: 8.41",
    status: "Completed"
  },
  {
    degree: "High School (10th)",
    institution: "HSEB Board",
    period: "2020",
    grade: "Percentage: 91%",
    status: "Completed"
  }
];

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Education
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Academic journey in Computer Science
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary/20 hidden md:block" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background hidden md:block" />

                  <div className="md:ml-20 glass-card p-6 rounded-xl hover-lift">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0 md:hidden">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <span className={`text-sm px-3 py-1 rounded-full ${
                            edu.status === "Ongoing" 
                              ? "bg-secondary/20 text-secondary border border-secondary/30" 
                              : "bg-primary/20 text-primary border border-primary/30"
                          } w-fit mt-2 md:mt-0`}>
                            {edu.status}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground mb-2">
                          {edu.institution}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm">
                          <span className="text-muted-foreground">📅 {edu.period}</span>
                          <span className="text-primary font-semibold">🎓 {edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
