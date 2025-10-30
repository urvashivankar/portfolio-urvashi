import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Download, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const certifications = [
  {
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "AWS Academy",
    date: "June 2025",
    hours: "20 hours",
    pdfPath: "/certificates/AWS_Certificate.pdf",
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "October 2025",
    pdfPath: "/certificates/IBM_AI_Certificate.pdf",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "February 2025",
    pdfPath: "/certificates/IBM_Python_Certificate.pdf",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Power BI Data Modelling Basics",
    issuer: "Simplilearn",
    date: "September 2025",
    pdfPath: "/certificates/PowerBI_Certificate.pdf",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    date: "June 2025",
    skills: ["Data Analysis", "Forensic Technology"],
    pdfPath: "/certificates/Deloitte_Certificate.pdf",
    color: "from-teal-500 to-blue-500"
  },
  {
    title: "Large Language Models",
    issuer: "IBM",
    date: "2025",
    pdfPath: "/certificates/IBM_LLM_Certificate.pdf",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "SQL Analytics and BI on Databricks",
    issuer: "Simplilearn",
    date: "2025",
    pdfPath: "/certificates/SQL_Databricks_Certificate.pdf",
    color: "from-red-500 to-orange-500"
  }
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Certifications
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden hover-lift group"
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
                
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex-shrink-0">
                      <Award className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-muted-foreground">
                      📅 {cert.date}
                    </p>
                    {cert.hours && (
                      <p className="text-sm text-muted-foreground">
                        ⏱️ {cert.hours}
                      </p>
                    )}
                    {cert.skills && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs rounded-md bg-secondary/10 text-secondary border border-secondary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {cert.pdfPath !== "#" && (
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/50 hover:bg-primary/10"
                        asChild
                      >
                        <a href={cert.pdfPath} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-primary to-secondary"
                        asChild
                      >
                        <a href={cert.pdfPath} download>
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
