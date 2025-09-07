import { motion } from "framer-motion";
import { FaTrophy, FaBook, FaMicrophone, FaFlask } from "react-icons/fa";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: FaTrophy,
      count: "1000+",
      label: "Patients Treated",
      gradient: "from-yellow-400 to-accent"
    },
    {
      icon: FaBook,
      count: "25+",
      label: "Research Publications",
      gradient: "from-yellow-400 to-secondary"
    },
    {
      icon: FaMicrophone,
      count: "50+",
      label: "International Talks",
      gradient: "from-yellow-400 to-primary"
    },
    {
      icon: FaFlask,
      count: "15+",
      label: "Herbal Formulations",
      gradient: "from-yellow-400 to-accent"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="achievements-title"
        >
          <span className="holographic-text">Achievements</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            
            return (
              <motion.div
                key={index}
                className="achievement-trophy neon-border prism-effect rounded-3xl p-8 text-center animate-float hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                data-testid={`achievement-card-${index}`}
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${achievement.gradient} rounded-full flex items-center justify-center`}>
                  <Icon className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-accent mb-2" data-testid={`achievement-count-${index}`}>
                  {achievement.count}
                </h3>
                <p className="text-lg text-muted-foreground" data-testid={`achievement-label-${index}`}>
                  {achievement.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
