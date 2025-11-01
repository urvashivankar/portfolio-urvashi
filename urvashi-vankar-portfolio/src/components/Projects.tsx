import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useMemo, useRef, useState } from "react";

const projects = [
  
  {
    title: "Brain Tumor Detection",
    description: "MRI image classification with CNNs and transfer learning achieving ~95% accuracy.",
    tags: ["TensorFlow", "Keras", "CNN"],
    color: "from-purple-500 to-pink-500",
    url: "https://github.com/urvashivankar/brain-tumor-detection"
  },
  {
    title: "EV Forecast Model",
    description: "Time-series model forecasting EV energy demand for smart-city planning and insights.",
    tags: ["ARIMA", "Scikit-Learn", "Power BI"],
    color: "from-green-500 to-emerald-500",
    url: "https://github.com/urvashivankar/EV_FORECAST_MODEL"
  },
  
  {
    title: "Iris Flower Prediction",
    description: "Classic ML model predicting flower species with ~98% accuracy; great for explainability demos.",
    tags: ["Scikit-learn", "Matplotlib"],
    color: "from-teal-500 to-blue-500",
    url: "https://github.com/urvashivankar/Iris-Flower-Prediction"
  },
  {
    title: "Renewable Energy Adoption",
    description: "Global trend analysis highlighting adoption gaps and forecasting 2030 sustainability goals.",
    tags: ["Pandas", "Power BI", "Matplotlib"],
    color: "from-yellow-500 to-orange-500",
    url: "https://github.com/urvashivankar/RENEWABLE-ENERGY-ADOPTION"
  },
  {
    title: "Solar DC Power Forecast App",
    description: "Web app predicting solar DC power output using real-time weather and ML regression.",
    tags: ["Streamlit", "Scikit-Learn", "APIs"],
    color: "from-fuchsia-500 to-rose-500",
    url: "https://github.com/urvashivankar/solar_dc_power_forecast_app"
  },
  {
    title: "Sentiment Analysis API",
    description: "REST API for sentiment classification with a lightweight NLP model and fast inference.",
    tags: ["FastAPI", "NLP", "Python"],
    color: "from-rose-500 to-red-500",
    url: "https://github.com/urvashivankar/sentiment-analysis-API"
  },
  
  
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
              <motion.a
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden hover-lift group block"
                href={(project as any).url || undefined}
                target={ (project as any).url ? "_blank" : undefined }
                rel={ (project as any).url ? "noopener noreferrer" : undefined }
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Card is clickable; opens repo if url provided */}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
