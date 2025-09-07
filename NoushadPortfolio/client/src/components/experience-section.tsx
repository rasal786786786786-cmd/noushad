import { motion } from "framer-motion";
import { FaRocket, FaUserMd, FaMicroscope, FaCheckCircle } from "react-icons/fa";

export default function ExperienceSection() {
  const experiences = [
    {
      icon: FaRocket,
      title: "Founder & CEO",
      company: "Wellness Center, Amminikkad, Kerala",
      gradient: "from-accent to-secondary",
      achievements: [
        "Established holistic wellness center",
        "Developed innovative treatment protocols",
        "Leading team of healthcare professionals"
      ]
    },
    {
      icon: FaUserMd,
      title: "Ayurvedic Consultant",
      company: "Multiple Healthcare Institutions",
      gradient: "from-secondary to-primary",
      achievements: [
        "Patient consultation and treatment",
        "Treatment protocol development",
        "Staff training and education"
      ]
    },
    {
      icon: FaMicroscope,
      title: "Research Scientist",
      company: "Biochemistry & Herbal Medicine",
      gradient: "from-primary to-accent",
      achievements: [
        "Published research papers",
        "Clinical trial supervision",
        "International collaborations"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="experience-title"
        >
          <span className="holographic-text">Professional Experience</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            
            return (
              <motion.div
                key={index}
                className="glass-card neon-border prism-effect rounded-3xl p-8 animate-float hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.3}s` }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                data-testid={`experience-card-${index}`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${exp.gradient} rounded-xl flex items-center justify-center`}>
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" data-testid={`experience-title-${index}`}>
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid={`experience-company-${index}`}>
                    {exp.company}
                  </p>
                </div>
                <ul className="text-muted-foreground space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li 
                      key={achIndex} 
                      className="flex items-start"
                      data-testid={`experience-achievement-${index}-${achIndex}`}
                    >
                      <FaCheckCircle className="text-accent mr-2 mt-1 text-sm flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
