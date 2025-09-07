import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import EducationSection from "@/components/education-section";
import SpecializationsSection from "@/components/specializations-section";
import ExperienceSection from "@/components/experience-section";
import BusinessSection from "@/components/business-section";
import AchievementsSection from "@/components/achievements-section";
import QuoteSection from "@/components/quote-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  useEffect(() => {
    // Add parallax effect for floating elements
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelectorAll('.animate-float');
      const speed = 0.2;
      
      parallax.forEach(element => {
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animationPlayState = 'running';
        }
      });
    }, observerOptions);
    
    // Observe all animated elements
    document.querySelectorAll('.animate-float, .animate-glow, .animate-pulse-glow').forEach(el => {
      (el as HTMLElement).style.animationPlayState = 'paused';
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      {/* Background Animation */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
        <div className="wave" />
        
        {/* DNA Particles */}
        <div className="dna-particle" style={{ top: '10%', left: '10%', animationDelay: '0s' }} />
        <div className="dna-particle" style={{ top: '20%', left: '80%', animationDelay: '1s' }} />
        <div className="dna-particle" style={{ top: '60%', left: '20%', animationDelay: '2s' }} />
        <div className="dna-particle" style={{ top: '80%', left: '70%', animationDelay: '3s' }} />
        <div className="dna-particle" style={{ top: '40%', left: '90%', animationDelay: '4s' }} />
        
        {/* Lotus Aura */}
        <div className="lotus-glow" style={{ top: '30%', left: '50%', transform: 'translateX(-50%)' }} />
        <div className="lotus-glow" style={{ top: '70%', left: '20%', animationDelay: '2s' }} />
        <div className="lotus-glow" style={{ top: '20%', left: '80%', animationDelay: '4s' }} />
      </div>

      {/* Scroll Indicator */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-1 h-20 bg-gradient-to-b from-accent via-secondary to-primary rounded-full opacity-60" />
        </div>
      </div>

      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SpecializationsSection />
        <ExperienceSection />
        <BusinessSection />
        <AchievementsSection />
        <QuoteSection />
        <ContactSection />

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-border/30">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">
              © 2024 Dr. Noushad Babu. All rights reserved. • Bridging Ancient Wisdom with Modern Science
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
