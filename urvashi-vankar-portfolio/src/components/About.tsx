import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImage from "@/assets/profile.jpg";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <img
                  src={profileImage}
                  alt="Urvashi Vankar"
                  className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-background"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-primary font-semibold">detail-oriented Data Analyst</span> with 
                expertise in Python, SQL, Machine Learning, NLP, LLMs, RAG, LangChain, and data visualization.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing my <span className="text-secondary font-semibold">B.Tech in Computer Science & Engineering</span> at 
                Parul University with a CGPA of 8.00, I'm passionate about transforming complex data into 
                actionable insights that drive decision-making.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My skills span across <span className="gradient-text font-semibold">AI/ML, Generative AI, Cloud Computing (AWS, IBM Cloud)</span>, 
                and enterprise tools like Power BI and Databricks. I'm committed to continuous learning and 
                staying at the forefront of data science and artificial intelligence.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card p-4 rounded-lg hover-lift">
                  <p className="text-3xl font-bold text-primary">8.0</p>
                  <p className="text-sm text-muted-foreground">CGPA</p>
                </div>
                <div className="glass-card p-4 rounded-lg hover-lift">
                  <p className="text-3xl font-bold text-secondary">6+</p>
                  <p className="text-sm text-muted-foreground">Projects</p>
                </div>
                <div className="glass-card p-4 rounded-lg hover-lift">
                  <p className="text-3xl font-bold text-primary">7+</p>
                  <p className="text-sm text-muted-foreground">Certifications</p>
                </div>
                <div className="glass-card p-4 rounded-lg hover-lift">
                  <p className="text-3xl font-bold text-secondary">2+</p>
                  <p className="text-sm text-muted-foreground">Internships</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
