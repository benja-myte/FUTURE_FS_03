import { Card } from "@/components/ui/card";
import qnxSecurity from "@/assets/qnx-security.jpg";
import enterpriseSecurity from "@/assets/enterprise-security.jpg";
import iotNetwork from "@/assets/iot-network.jpg";
import { Shield, Cpu, Network } from "lucide-react";

const solutions = [
  {
    title: "QNX Automotive Security",
    description: "Real-time operating system powering mission-critical automotive systems with certified security at the core.",
    image: qnxSecurity,
    icon: Cpu,
    stats: "500M+ vehicles protected",
  },
  {
    title: "Enterprise Security Platform",
    description: "End-to-end encrypted communication and zero-trust architecture for modern enterprise environments.",
    image: enterpriseSecurity,
    icon: Shield,
    stats: "Fortune 500 trusted",
  },
  {
    title: "IoT Security Framework",
    description: "Scalable security layer for connected devices, from edge to cloud, ensuring data integrity and privacy.",
    image: iotNetwork,
    icon: Network,
    stats: "Billions of endpoints secured",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Core <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Industry-leading security infrastructure for the most demanding environments
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 p-3 bg-primary/10 backdrop-blur-sm rounded-lg border border-primary/20">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                  <div className="pt-4 flex items-center justify-between border-t border-border/50">
                    <span className="text-sm text-primary font-semibold">
                      {solution.stats}
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      Learn more →
                    </span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
