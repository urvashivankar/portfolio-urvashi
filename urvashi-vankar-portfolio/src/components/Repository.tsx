import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const Repository = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="repository" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
            Repository Structure
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Organized project showcase with datasets, notebooks, and results per project
          </p>

          <div className="glass-card p-6 rounded-xl overflow-x-auto">
            <pre className="text-sm leading-6 whitespace-pre-wrap">
{`urvashi-vankar-portfolio-showcase/
├── Acting-Clone/
├── Brain-Tumor-Clean/
├── EV-Forecast-Model/
├── Image-Clairvoyant-Hub/
├── Iris-Flower-Prediction/
├── Renewable-Energy-Adoption/
├── Solar-DC-Power-Forecast-App/
├── AI-Document-Retrieval/
├── COVID19-Data-Analysis/
└── README.md

Each folder includes:
- data/ — sample dataset
- notebooks/ — Jupyter or Python scripts
- results/ — charts, metrics, screenshots
- README.md — individual project summary`}
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Repository;

