import { Lock, Eye, Database, Zap } from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Zero-Trust Architecture",
    description: "Never trust, always verify. Every connection authenticated and encrypted end-to-end.",
  },
  {
    icon: Eye,
    title: "Threat Intelligence",
    description: "Real-time monitoring and analysis of global threat landscapes with AI-powered detection.",
  },
  {
    icon: Database,
    title: "Data Sovereignty",
    description: "Complete control over your data with on-premises or hybrid deployment options.",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Automated threat response with microsecond latency for critical systems.",
  },
];

const SecurityFeatures = () => {
  return (
    <section id="security" className="py-32 relative bg-gradient-to-b from-background to-deep-space">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Enterprise-Grade <span className="text-primary">Security</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Military-grade protection meets enterprise scalability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Lock className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold">
              Certified: ISO 27001 | SOC 2 Type II | Common Criteria EAL 4+
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
