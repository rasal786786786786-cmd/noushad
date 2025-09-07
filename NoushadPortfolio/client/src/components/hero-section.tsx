import { motion } from "framer-motion";
import { FaUniversity } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Harvard Badge */}
        <motion.div 
          className="inline-flex items-center glass-card neon-border prism-effect rounded-full px-6 py-3 mb-8 animate-float"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-testid="harvard-badge"
        >
          <FaUniversity className="text-accent mr-3 text-lg" />
          <span className="text-sm font-medium text-foreground">Harvard University • PhD Medical Biochemistry</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          data-testid="main-title"
        >
          <span className="holographic-text">Dr. Noushad Babu</span>
        </motion.h1>
        
        <motion.div 
          className="text-xl md:text-2xl lg:text-3xl font-light mb-8 text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="subtitle"
        >
          <span className="block">PhD in Medical Biochemistry</span>
          <span className="block text-accent">Ayurvedic Specialist • Entrepreneur</span>
        </motion.div>

        {/* DNA Helix Glow Effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20 animate-helix">
          <div className="w-full h-full border-2 border-accent rounded-full" />
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-secondary rounded-full" />
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border-2 border-primary rounded-full" />
        </div>

        {/* CTA Button */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button 
            className="glass-card neon-border prism-effect px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-all duration-300"
            data-testid="cta-explore-portfolio"
          >
            <span className="holographic-text">Explore Portfolio</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
