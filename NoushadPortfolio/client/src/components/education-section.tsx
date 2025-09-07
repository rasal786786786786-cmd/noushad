import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaSpa } from "react-icons/fa";

export default function EducationSection() {
  const timelineItems = [
    {
      icon: FaGraduationCap,
      title: "PhD in Medical Biochemistry",
      institution: "Harvard University, England",
      description: "Advanced research in molecular biochemistry and therapeutic applications",
      color: "accent",
      side: "left"
    },
    {
      icon: FaCertificate,
      title: "BAMS Degree",
      institution: "Bachelor of Ayurvedic Medicine & Surgery",
      description: "Comprehensive study of traditional Ayurvedic principles and practices",
      color: "secondary",
      side: "right"
    },
    {
      icon: FaSpa,
      title: "Panchakarma Certification",
      institution: "Advanced Detoxification Therapy",
      description: "Specialized training in five-fold purification treatments",
      color: "primary",
      side: "left"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="education-title"
        >
          <span className="holographic-text">Education & Qualifications</span>
        </motion.h2>
        
        {/* Crystal Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-secondary to-primary rounded-full opacity-60" />
          
          {/* Timeline Nodes */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.side === "left";
              
              return (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {isLeft ? (
                    <>
                      <div className="w-1/2 pr-8 text-right">
                        <div className="glass-card neon-border prism-effect rounded-2xl p-6 animate-float">
                          <h3 className={`text-2xl font-bold text-${item.color} mb-2`} data-testid={`education-title-${index}`}>
                            {item.title}
                          </h3>
                          <p className={`text-lg text-${item.color === 'accent' ? 'secondary' : 'accent'} mb-2`} data-testid={`education-institution-${index}`}>
                            {item.institution}
                          </p>
                          <p className="text-muted-foreground" data-testid={`education-description-${index}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className={`timeline-node w-20 h-20 rounded-full flex items-center justify-center animate-glow`} data-testid={`timeline-node-${index}`}>
                        <Icon className={`text-2xl text-${item.color}`} />
                      </div>
                      <div className="w-1/2 pl-8" />
                    </>
                  ) : (
                    <>
                      <div className="w-1/2 pr-8" />
                      <div className={`timeline-node w-20 h-20 rounded-full flex items-center justify-center animate-glow`} data-testid={`timeline-node-${index}`}>
                        <Icon className={`text-2xl text-${item.color}`} />
                      </div>
                      <div className="w-1/2 pl-8">
                        <div className="glass-card neon-border prism-effect rounded-2xl p-6 animate-float">
                          <h3 className={`text-2xl font-bold text-${item.color} mb-2`} data-testid={`education-title-${index}`}>
                            {item.title}
                          </h3>
                          <p className={`text-lg text-${item.color === 'secondary' ? 'accent' : 'secondary'} mb-2`} data-testid={`education-institution-${index}`}>
                            {item.institution}
                          </p>
                          <p className="text-muted-foreground" data-testid={`education-description-${index}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
