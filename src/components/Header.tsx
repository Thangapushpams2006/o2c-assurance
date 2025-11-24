import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark" />
            <span className="text-xl font-bold text-foreground">O2C Assurance</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Benefits
          </a>
          <a href="#compliance" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Compliance
          </a>
          <Button size="sm" className="bg-primary hover:bg-primary-dark">
            Get Started
          </Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container flex flex-col gap-4 py-4">
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Services
            </a>
            <a href="#benefits" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Benefits
            </a>
            <a href="#compliance" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Compliance
            </a>
            <Button size="sm" className="bg-primary hover:bg-primary-dark w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
