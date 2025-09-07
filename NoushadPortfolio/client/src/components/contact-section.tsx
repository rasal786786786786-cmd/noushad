import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      info: "+91 XXX XXX XXXX",
      gradient: "from-accent to-secondary"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      info: "contact@drnoushad.com",
      gradient: "from-secondary to-primary"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      info: "Kerala, India",
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-testid="contact-title"
        >
          <span className="holographic-text">Get In Touch</span>
        </motion.h2>
        
        <motion.p 
          className="text-xl text-muted-foreground mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          data-testid="contact-description"
        >
          Ready to begin your journey towards holistic wellness? Let's explore how traditional Ayurvedic wisdom combined with modern medical science can transform your health.
        </motion.p>
        
        <motion.div 
          className="glass-card neon-border prism-effect rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`contact-info-${index}`}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${contact.gradient} rounded-full flex items-center justify-center`}>
                    <Icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" data-testid={`contact-title-${index}`}>
                    {contact.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`contact-info-text-${index}`}>
                    {contact.info}
                  </p>
                </motion.div>
              );
            })}
          </div>
          
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <button 
              className="glass-card neon-border prism-effect px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition-all duration-300"
              data-testid="button-schedule-consultation"
            >
              <span className="holographic-text">Schedule Consultation</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
