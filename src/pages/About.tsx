import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Users, Globe, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const hero = useScrollAnimation();
  const content = useScrollAnimation();
  const cards = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div ref={hero.ref} className={`transition-all duration-1000 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
              About BlackBerry
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Pioneering the future of secure, intelligent connectivity across industries.
            </p>
          </div>
          
          <div ref={content.ref} className={`prose prose-invert max-w-none mb-16 transition-all duration-1000 delay-200 ${content.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              BlackBerry has evolved from a mobile device pioneer to a leading provider of intelligent security software and services. Today, we secure and manage over 500 million endpoints, protecting enterprises and governments worldwide.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our technology powers critical infrastructure, from automotive systems running QNX to enterprise cybersecurity solutions that protect against evolving threats. We're not just securing devices—we're securing the invisible layer that connects our digital world.
            </p>
          </div>

          <div ref={cards.ref} className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-1000 delay-300 ${cards.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-card p-8 rounded-lg border border-border hover:shadow-glow transition-all duration-300 group">
              <Shield className="h-12 w-12 text-primary mb-4 group-hover:animate-glow-pulse" />
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To secure a connected future through intelligent software and services that protect critical infrastructure and empower enterprises.
              </p>
            </div>
            
            <div className="bg-gradient-card p-8 rounded-lg border border-border hover:shadow-glow transition-all duration-300 group">
              <Globe className="h-12 w-12 text-primary mb-4 group-hover:animate-glow-pulse" />
              <h3 className="text-2xl font-bold mb-3">Global Reach</h3>
              <p className="text-muted-foreground">
                Operating in over 100 countries, trusted by 18 of the G20 governments and Fortune 500 companies worldwide.
              </p>
            </div>
            
            <div className="bg-gradient-card p-8 rounded-lg border border-border hover:shadow-glow transition-all duration-300 group">
              <Users className="h-12 w-12 text-primary mb-4 group-hover:animate-glow-pulse" />
              <h3 className="text-2xl font-bold mb-3">Expert Team</h3>
              <p className="text-muted-foreground">
                Our team of security researchers and engineers work around the clock to stay ahead of emerging threats.
              </p>
            </div>
            
            <div className="bg-gradient-card p-8 rounded-lg border border-border hover:shadow-glow transition-all duration-300 group">
              <Award className="h-12 w-12 text-primary mb-4 group-hover:animate-glow-pulse" />
              <h3 className="text-2xl font-bold mb-3">Industry Leader</h3>
              <p className="text-muted-foreground">
                Recognized as a leader in endpoint security and embedded systems by major analyst firms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
