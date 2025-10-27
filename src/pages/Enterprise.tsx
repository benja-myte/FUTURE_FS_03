import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, Network, AlertTriangle } from "lucide-react";
import enterpriseImage from "@/assets/enterprise-security.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Enterprise = () => {
  const hero = useScrollAnimation();
  const image = useScrollAnimation();
  const features = useScrollAnimation();
  const uem = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div ref={hero.ref} className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-1000 ${hero.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-cyber bg-clip-text text-transparent">
              Enterprise Security
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive cybersecurity solutions protecting organizations from evolving threats
            </p>
          </div>

          <div ref={image.ref} className={`mb-16 rounded-lg overflow-hidden shadow-strong transition-all duration-1000 delay-200 ${image.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <img src={enterpriseImage} alt="Enterprise Security" className="w-full h-[400px] object-cover" />
          </div>

          <div ref={features.ref} className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-300 ${features.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group">
              <Shield className="h-10 w-10 text-primary mb-4 group-hover:animate-glow-pulse" />
              <h3 className="text-xl font-bold mb-3">Endpoint Protection</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered prevention against malware, ransomware, and zero-day exploits across all devices.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group">
              <Lock className="h-10 w-10 text-primary mb-4 group-hover:animate-glow-pulse" />
              <h3 className="text-xl font-bold mb-3">Zero Trust Security</h3>
              <p className="text-sm text-muted-foreground">
                Verify every user, device, and application with continuous authentication and authorization.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group">
              <Eye className="h-10 w-10 text-primary mb-4 group-hover:animate-glow-pulse" />
              <h3 className="text-xl font-bold mb-3">Threat Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Real-time threat intelligence from our global research team and AI-driven analysis.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group">
              <Database className="h-10 w-10 text-primary mb-4 group-hover:animate-glow-pulse" />
              <h3 className="text-xl font-bold mb-3">Data Protection</h3>
              <p className="text-sm text-muted-foreground">
                Encryption, DLP, and data governance to keep sensitive information secure at rest and in transit.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group">
              <Network className="h-10 w-10 text-primary mb-4 group-hover:animate-glow-pulse" />
              <h3 className="text-xl font-bold mb-3">Network Security</h3>
              <p className="text-sm text-muted-foreground">
                Secure gateways, VPN, and network segmentation to control access and monitor traffic.
              </p>
            </div>

            <div className="bg-gradient-card p-6 rounded-lg border border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group">
              <AlertTriangle className="h-10 w-10 text-primary mb-4 group-hover:animate-glow-pulse" />
              <h3 className="text-xl font-bold mb-3">Incident Response</h3>
              <p className="text-sm text-muted-foreground">
                24/7 SOC and incident response team to detect, contain, and remediate threats quickly.
              </p>
            </div>
          </div>

          <div ref={uem.ref} className={`max-w-5xl mx-auto transition-all duration-1000 delay-500 ${uem.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold mb-8 text-center">Unified Endpoint Management</h2>
            <div className="bg-gradient-card p-8 rounded-lg border border-border">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Platform Features</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>✓ Unified console for all endpoints</li>
                    <li>✓ Automated patch management</li>
                    <li>✓ Device enrollment and provisioning</li>
                    <li>✓ Application control and whitelisting</li>
                    <li>✓ Remote wipe and lock capabilities</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 text-primary">Compliance & Reporting</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>✓ GDPR, HIPAA, SOC 2 compliance</li>
                    <li>✓ Real-time security posture reporting</li>
                    <li>✓ Audit logs and forensic analysis</li>
                    <li>✓ Risk scoring and vulnerability assessment</li>
                    <li>✓ Customizable dashboards and alerts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enterprise;
