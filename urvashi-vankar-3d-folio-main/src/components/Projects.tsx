import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";

const projects = [
  {
    title: "Acting-Clone",
    description: "AI agent mimicking acting-style speech and facial expressions using deep learning and CV.",
    tags: ["Python", "Deep Learning", "MediaPipe", "OpenCV"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Brain Tumor Clean",
    description: "MRI image classification with CNNs and transfer learning achieving ~95% accuracy.",
    tags: ["TensorFlow", "Keras", "CNN"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "EV Forecast Model",
    description: "Time-series model forecasting EV energy demand for smart-city planning and insights.",
    tags: ["ARIMA", "Scikit-Learn", "Power BI"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Image Clairvoyant Hub",
    description: "Multi-model image prediction hub supporting classification and segmentation tasks.",
    tags: ["FastAPI", "TensorFlow", "Streamlit"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Iris Flower Prediction",
    description: "Classic ML model predicting flower species with ~98% accuracy; great for explainability demos.",
    tags: ["Scikit-learn", "Matplotlib"],
    color: "from-teal-500 to-blue-500"
  },
  {
    title: "Renewable Energy Adoption",
    description: "Global trend analysis highlighting adoption gaps and forecasting 2030 sustainability goals.",
    tags: ["Pandas", "Power BI", "Matplotlib"],
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Solar DC Power Forecast App",
    description: "Web app predicting solar DC power output using real-time weather and ML regression.",
    tags: ["Streamlit", "Scikit-Learn", "APIs"],
    color: "from-fuchsia-500 to-rose-500"
  },
  {
    title: "AI Document Retrieval (RAG)",
    description: "Document search using IBM Granite LLMs and LangChain; ~90% accuracy on 1K+ docs.",
    tags: ["LangChain", "IBM Granite", "Python"],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "COVID-19 Data Analysis",
    description: "Pandemic trend visualization and insights on 10K+ records using Python and Matplotlib.",
    tags: ["Python", "Pandas", "Matplotlib"],
    color: "from-sky-500 to-cyan-600"
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
