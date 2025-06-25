
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="text-xl font-bold text-white">
              AI Voice Agent
            </div>
            <Badge className="hidden sm:flex bg-teal-500/20 text-teal-300 border-teal-500/30">
              <Users className="w-3 h-3 mr-1" />
              Pre-Sale Live
            </Badge>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
            <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">Benefits</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button 
              size="sm" 
              className="hidden sm:flex bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
            >
              Get 70% Off
            </Button>
            
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-700 py-4">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">Benefits</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
              <Button 
                size="sm" 
                className="w-fit bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
              >
                Get 70% Off
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
