import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function QuoteSection() {
  return (
    <section id="quote" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="glass-card neon-border prism-effect rounded-3xl p-12 md:p-16 text-center animate-float"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="quote-container"
        >
          <FaQuoteLeft className="text-4xl text-accent mb-8 opacity-60 mx-auto" />
          
          <blockquote className="text-2xl md:text-4xl font-light leading-relaxed mb-8" data-testid="quote-text">
            <span className="holographic-text">
              "Healing is not just medicine, it is balance — between tradition and science."
            </span>
          </blockquote>
          
          <div className="w-24 h-1 bg-gradient-to-r from-accent via-secondary to-primary mx-auto mb-6 rounded-full" />
          
          <cite className="text-xl text-muted-foreground not-italic" data-testid="quote-attribution">
            — Dr. Noushad Babu
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
