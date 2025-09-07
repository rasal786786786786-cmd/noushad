import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function BusinessSection() {
  return (
    <section id="business" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="business-title"
        >
          <span className="holographic-text">Business Location</span>
        </motion.h2>
        
        <motion.div 
          className="glass-card neon-border prism-effect rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-accent mb-4" data-testid="business-center-title">
                Wellness Center
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="business-description">
                Located in the heart of Perinthalmanna, Amminikkad, Kerala - surrounded by the natural beauty and traditional healing heritage of God's Own Country. Our center combines modern medical facilities with traditional Ayurvedic treatment spaces.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center" data-testid="business-address">
                  <FaMapMarkerAlt className="text-accent mr-4 text-xl" />
                  <span className="text-lg">Amminikkad, Perinthalmanna, Kerala</span>
                </div>
                <div className="flex items-center" data-testid="business-phone">
                  <FaPhone className="text-secondary mr-4 text-xl" />
                  <span className="text-lg">+91 XXX XXX XXXX</span>
                </div>
                <div className="flex items-center" data-testid="business-email">
                  <FaEnvelope className="text-primary mr-4 text-xl" />
                  <span className="text-lg">contact@drnoushad.com</span>
                </div>
              </div>
            </div>
            
            {/* Kerala Map Representation */}
            <div className="relative">
              <div className="kerala-map relative">
                <svg viewBox="0 0 400 600" className="w-full max-w-sm mx-auto" data-testid="kerala-map">
                  <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(152, 81%, 56%)" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="hsl(215, 84%, 56%)" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="hsl(262, 83%, 56%)" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Kerala outline */}
                  <path 
                    d="M 80 50 L 120 40 L 180 60 L 220 80 L 250 120 L 280 180 L 290 240 L 300 300 L 310 360 L 300 420 L 280 480 L 250 520 L 200 540 L 150 550 L 100 530 L 80 500 L 70 460 L 60 400 L 50 340 L 55 280 L 65 220 L 70 160 L 75 100 Z" 
                    fill="url(#mapGradient)" 
                    stroke="rgba(34, 197, 94, 0.8)" 
                    strokeWidth="2" 
                    className="animate-pulse-glow"
                  />
                  
                  {/* Location Pin for Perinthalmanna */}
                  <circle cx="200" cy="200" r="8" fill="hsl(152, 81%, 56%)" className="animate-glow">
                    <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <text x="220" y="205" fill="hsl(152, 81%, 56%)" fontSize="14" fontWeight="bold">
                    Perinthalmanna
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
