import { Button } from "@/components/ui/button";
import heroNetwork from "@/assets/hero-network.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroNetwork}
          alt="Secure digital network"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="grid grid-cols-12 gap-px h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-primary/10" />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-32 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <div className="inline-block animate-glow-pulse">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                The Foundation of Secure Connectivity
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Securing the
              <span className="block text-transparent bg-gradient-cyber bg-clip-text animate-float">
                Invisible Layer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              The underlying security and intelligence infrastructure powering enterprises, governments, and IoT ecosystems worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Explore Solutions
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline-glow" size="lg">
              View Security Features
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16 flex flex-wrap justify-center gap-12 text-muted-foreground">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500M+</div>
              <div className="text-sm">Vehicles Protected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">195</div>
              <div className="text-sm">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">99.99%</div>
              <div className="text-sm">Uptime SLA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
