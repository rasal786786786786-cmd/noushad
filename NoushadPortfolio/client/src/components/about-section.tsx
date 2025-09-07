import { motion } from "framer-motion";
import { FaStethoscope, FaLeaf, FaDna } from "react-icons/fa";
import profileImage from "@assets/20250907_192144_1757253199607.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="glass-card neon-border prism-effect rounded-3xl p-8 md:p-12 animate-float"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center" data-testid="about-title">
            <span className="holographic-text">About Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description-1">
                A distinguished medical professional bridging the ancient wisdom of Ayurveda with cutting-edge biochemical research. With a PhD from Harvard University and extensive expertise in traditional healing practices, I specialize in creating holistic treatment approaches that honor both scientific rigor and time-tested natural remedies.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="about-description-2">
                Based in the serene landscapes of Kerala, I've dedicated my practice to developing innovative herbal formulations and therapeutic protocols that have transformed the lives of over 1000 patients worldwide.
              </p>
              
              {/* Medical Icons */}
              <div className="flex justify-center md:justify-start space-x-6 mt-8">
                <motion.div 
                  className="glass-card rounded-2xl p-4 text-center animate-pulse-glow"
                  whileHover={{ scale: 1.05 }}
                  data-testid="icon-medical"
                >
                  <FaStethoscope className="text-3xl text-accent mb-2 mx-auto" />
                  <p className="text-sm text-muted-foreground">Medical</p>
                </motion.div>
                <motion.div 
                  className="glass-card rounded-2xl p-4 text-center animate-pulse-glow"
                  style={{ animationDelay: '0.5s' }}
                  whileHover={{ scale: 1.05 }}
                  data-testid="icon-herbal"
                >
                  <FaLeaf className="text-3xl text-secondary mb-2 mx-auto" />
                  <p className="text-sm text-muted-foreground">Herbal</p>
                </motion.div>
                <motion.div 
                  className="glass-card rounded-2xl p-4 text-center animate-pulse-glow"
                  style={{ animationDelay: '1s' }}
                  whileHover={{ scale: 1.05 }}
                  data-testid="icon-biochemistry"
                >
                  <FaDna className="text-3xl text-primary mb-2 mx-auto" />
                  <p className="text-sm text-muted-foreground">Biochemistry</p>
                </motion.div>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="relative">
              <img 
                src={profileImage}
                alt="Dr. Noushad Babu - Professional Portrait" 
                className="rounded-3xl shadow-2xl glass-card w-full max-w-md mx-auto"
                data-testid="profile-image"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-primary/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
