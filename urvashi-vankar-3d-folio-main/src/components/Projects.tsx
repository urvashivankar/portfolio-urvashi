import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";

const projects = [
  {
    title: "AI-Powered Document Retrieval System",
    description: "Built with IBM Granite & Dockling for intelligent document search and retrieval using advanced NLP techniques.",
    tags: ["AI", "NLP", "IBM Granite", "RAG"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "COVID-19 Data Analysis",
    description: "Comprehensive pandemic insights visualization using Python, analyzing trends and patterns across global datasets.",
    tags: ["Python", "Data Visualization", "Pandas", "Matplotlib"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "LLM Integration using IBM Granite",
    description: "Integrated large language models for enterprise applications using IBM's Granite framework.",
    tags: ["LLMs", "IBM Granite", "AI Integration"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "IRIS Flowers Classification",
    description: "Machine learning model for classifying iris flowers using supervised learning algorithms.",
    tags: ["Machine Learning", "Python", "Classification"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Aqua Guardian",
    description: "AI-based water pollution detection system using computer vision and machine learning.",
    tags: ["AI", "Computer Vision", "Environmental Tech"],
    color: "from-teal-500 to-blue-500"
  },
  {
    title: "Automated Crypto Trading Bot",
    description: "AI-driven financial automation for cryptocurrency trading with predictive analytics.",
    tags: ["AI", "Finance", "Automation", "Python"],
    color: "from-yellow-500 to-orange-500"
  }
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTag, setActiveTag] = useState<string>("All");

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach(p => p.tags.forEach(t => tagSet.add(t)));
    return ["All", ...Array.from(tagSet).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter(p => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Showcasing innovative solutions in AI, ML, and Data Analytics
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                aria-pressed={activeTag === tag}
                className={`px-3 py-1 rounded-full border text-sm transition-colors ${
                  activeTag === tag
                    ? "bg-gradient-to-r from-primary to-secondary text-background border-transparent"
                    : "bg-transparent text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden hover-lift group"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Intentionally showing only title and description as requested */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
