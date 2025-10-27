import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Wifi, Factory, Building2, Truck, Radio, Lock } from "lucide-react";
import iotImage from "@/assets/iot-network.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const IoT = () => {
  const hero = useScrollAnimation();
  const image = useScrollAnimation();
  const stats = useScrollAnimation();
  const solutions = useScrollAnimation();
  const security = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div ref={hero.ref} className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
              IoT Security Platform
            </h1>
            <p className="text-xl text-muted-foreground">
              Securing billions of connected devices across industrial, medical, and smart infrastructure
            </p>
          </div>

          <div ref={image.ref} className={`mb-16 rounded-lg overflow-hidden shadow-strong transition-all duration-1000 delay-200 ${image.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <img src={iotImage} alt="IoT Network" className="w-full h-[400px] object-cover" />
          </div>

          <div ref={stats.ref} className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-300 ${stats.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-card p-8 rounded-lg border border-primary/30 shadow-glow">
              <h2 className="text-3xl font-bold mb-6 text-center">End-to-End IoT Security</h2>
              <p className="text-lg text-muted-foreground text-center mb-8">
                From device provisioning to decommissioning, BlackBerry secures every stage of the IoT lifecycle
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">215M+</div>
                  <div className="text-sm text-muted-foreground">Vehicles Running QNX</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">500M+</div>
                  <div className="text-sm text-muted-foreground">Secured Endpoints</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">18/20</div>
                  <div className="text-sm text-muted-foreground">G20 Governments Trust Us</div>
                </div>
              </div>
            </div>
          </div>

          <div ref={solutions.ref} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-400 ${solutions.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <Factory className="h-10 w-10 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-3">Industrial IoT</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Secure manufacturing systems, robotics, and industrial control systems
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• OT/IT convergence security</li>
                <li>• SCADA system protection</li>
                <li>• Predictive maintenance</li>
              </ul>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <Building2 className="h-10 w-10 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-3">Smart Buildings</h3>
              <p className="text-sm text-muted-foreground mb-4">
                HVAC, access control, and building automation security
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• BMS/BAS protection</li>
                <li>• Energy management systems</li>
                <li>• Physical security integration</li>
              </ul>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <Truck className="h-10 w-10 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-3">Connected Logistics</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Fleet management, telematics, and supply chain security
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• GPS tracking protection</li>
                <li>• Cargo monitoring</li>
                <li>• Driver safety systems</li>
              </ul>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <Radio className="h-10 w-10 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-3">Critical Infrastructure</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Power grids, water systems, and telecommunications
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• NERC CIP compliance</li>
                <li>• Utility grid protection</li>
                <li>• Secure remote monitoring</li>
              </ul>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <Wifi className="h-10 w-10 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-3">5G & Edge Computing</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Next-gen network security for distributed IoT systems
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• Network slicing security</li>
                <li>• Edge device protection</li>
                <li>• Low-latency threat detection</li>
              </ul>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:scale-105 group">
              <Lock className="h-10 w-10 text-primary mb-4 group-hover:animate-float" />
              <h3 className="text-xl font-bold mb-3">Device Lifecycle</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Secure provisioning, updates, and decommissioning
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li>• Zero-touch provisioning</li>
                <li>• OTA update security</li>
                <li>• Secure device disposal</li>
              </ul>
            </div>
          </div>

          <div ref={security.ref} className={`max-w-5xl mx-auto bg-deep-space border border-primary/20 p-8 rounded-lg transition-all duration-1000 delay-600 ${security.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-2xl font-bold mb-6">IoT Security Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-3">Device Security</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Hardware root of trust</li>
                  <li>• Secure boot and attestation</li>
                  <li>• Firmware integrity validation</li>
                  <li>• Cryptographic key management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-3">Network Security</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Device authentication protocols</li>
                  <li>• Encrypted communication channels</li>
                  <li>• Network segmentation</li>
                  <li>• Anomaly detection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IoT;
