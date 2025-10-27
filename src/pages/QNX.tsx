import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Car, Cpu, Shield, Zap } from "lucide-react";
import qnxImage from "@/assets/qnx-security.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const QNX = () => {
  const hero = useScrollAnimation();
  const image = useScrollAnimation();
  const features = useScrollAnimation();
  const cta = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div ref={hero.ref} className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
              QNX Real-Time OS
            </h1>
            <p className="text-xl text-muted-foreground">
              The foundation of safety-critical systems in automotive, medical, and industrial applications
            </p>
          </div>

          <div ref={image.ref} className={`mb-16 rounded-lg overflow-hidden shadow-strong transition-all duration-1000 delay-200 ${image.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <img src={qnxImage} alt="QNX Technology" className="w-full h-[400px] object-cover" />
          </div>

          <div ref={features.ref} className={`grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 transition-all duration-1000 delay-300 ${features.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-card p-8 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <Car className="h-12 w-12 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-2xl font-bold mb-4">Automotive Excellence</h3>
              <p className="text-muted-foreground mb-4">
                Powers digital cockpits and ADAS systems in over 215 million vehicles worldwide
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• ISO 26262 ASIL-D certified</li>
                <li>• Real-time performance guarantees</li>
                <li>• Secure over-the-air updates</li>
              </ul>
            </div>

            <div className="bg-gradient-card p-8 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <Cpu className="h-12 w-12 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-2xl font-bold mb-4">Microkernel Architecture</h3>
              <p className="text-muted-foreground mb-4">
                Fault-isolated, message-passing architecture ensures system reliability
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Process isolation prevents cascading failures</li>
                <li>• Deterministic real-time scheduling</li>
                <li>• Ultra-low latency response times</li>
              </ul>
            </div>

            <div className="bg-gradient-card p-8 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <Shield className="h-12 w-12 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-2xl font-bold mb-4">Security First</h3>
              <p className="text-muted-foreground mb-4">
                Built-in security features protect against cyber threats
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Secure boot and trusted execution</li>
                <li>• Memory protection and encryption</li>
                <li>• Continuous security monitoring</li>
              </ul>
            </div>

            <div className="bg-gradient-card p-8 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <Zap className="h-12 w-12 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-2xl font-bold mb-4">Performance</h3>
              <p className="text-muted-foreground mb-4">
                Optimized for mission-critical applications requiring reliability
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Microsecond-level interrupt latency</li>
                <li>• Adaptive partitioning for resource management</li>
                <li>• Multi-core support with SMP</li>
              </ul>
            </div>
          </div>

          <div ref={cta.ref} className={`max-w-4xl mx-auto bg-gradient-card p-12 rounded-lg border border-primary/30 shadow-glow text-center transition-all duration-1000 delay-500 ${cta.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-muted-foreground mb-6">
              From autonomous vehicles to medical devices, QNX powers the systems that demand absolute reliability and security.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary font-semibold">
              <span>Automotive OEMs</span>
              <span>•</span>
              <span>Medical Equipment</span>
              <span>•</span>
              <span>Industrial Automation</span>
              <span>•</span>
              <span>Robotics</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QNX;
