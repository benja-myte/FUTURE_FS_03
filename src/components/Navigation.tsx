import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/blackberry-logo.png";
const Navigation = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="BlackBerry" className="h-16 w-16 transition-transform duration-300 group-hover:scale-110" />
            
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/qnx" className="text-muted-foreground hover:text-primary transition-colors">
              QNX
            </Link>
            <Link to="/enterprise" className="text-muted-foreground hover:text-primary transition-colors">
              Enterprise
            </Link>
            <Link to="/iot" className="text-muted-foreground hover:text-primary transition-colors">
              IoT
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          <Link to="/contact">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>;
};
export default Navigation;