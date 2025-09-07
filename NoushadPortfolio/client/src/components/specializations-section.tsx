import { motion } from "framer-motion";
import { FaSpa, FaLeaf, FaAtom, FaHeart, FaAppleAlt, FaFlask } from "react-icons/fa";

export default function SpecializationsSection() {
  const specializations = [
    {
      icon: FaSpa,
      title: "Panchakarma",
      description: "Five-fold purification therapy for complete detoxification and rejuvenation",
      gradient: "from-accent to-secondary"
    },
    {
      icon: FaLeaf,
      title: "Herbal Therapy",
      description: "Custom herbal formulations using traditional knowledge and modern science",
      gradient: "from-secondary to-primary"
    },
    {
      icon: FaAtom,
      title: "Molecular Biochemistry",
      description: "Advanced research in cellular mechanisms and therapeutic applications",
      gradient: "from-primary to-accent"
    },
    {
      icon: FaHeart,
      title: "Stress Management",
      description: "Holistic approaches to mental wellness and emotional balance",
      gradient: "from-accent to-primary"
    },
    {
      icon: FaAppleAlt,
      title: "Ayurvedic Nutrition",
      description: "Personalized dietary plans based on constitution and health needs",
      gradient: "from-secondary to-accent"
    },
    {
      icon: FaFlask,
      title: "Herbal Formulations",
      description: "Development of innovative herbal medicines with proven efficacy",
      gradient: "from-primary to-secondary"
    }
  ];

  return (
    <section id="specializations" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="specializations-title"
        >
          <span className="holographic-text">Specializations</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            
            return (
              <motion.div
                key={index}
                className="glass-card neon-border prism-effect rounded-3xl p-8 text-center animate-float hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                data-testid={`specialization-card-${index}`}
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${spec.gradient} rounded-full flex items-center justify-center`}>
                  <Icon className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4" data-testid={`specialization-title-${index}`}>
                  {spec.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`specialization-description-${index}`}>
                  {spec.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
