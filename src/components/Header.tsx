import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Users, Mic } from 'lucide-react';
import { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-premium-sm">
                <Mic className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl sm:text-2xl font-bold text-primary">Dialo</span>
            </a>
            <Badge className="hidden sm:flex bg-accent/10 text-accent border-accent/20 px-3 py-1">
              <Users className="w-3 h-3 mr-1" />
              Pre-Sale Live
            </Badge>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Benefits
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              How It Works
            </a>
            
          </nav>
          
          <div className="hidden lg:flex items-center space-x-4">
            
            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground btn-premium shadow-premium-md">Try the Agent</Button>
          </div>
          
          <button className="lg:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/50">
          <div className="px-4 py-6 space-y-4">
            <a href="#benefits" className="block text-muted-foreground hover:text-foreground transition-colors font-medium">
              Benefits
            </a>
            <a href="#how-it-works" className="block text-muted-foreground hover:text-foreground transition-colors font-medium">
              How It Works
            </a>
            <a href="#pricing" className="block text-muted-foreground hover:text-foreground transition-colors font-medium">
              Pricing
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
                Sign In
              </Button>
              <Button className="w-full bg-accent hover:bg-accent-hover text-accent-foreground btn-premium">
                Get 70% Off
              </Button>
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;