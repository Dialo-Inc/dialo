import { Separator } from '@/components/ui/separator';
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary to-primary-soft opacity-90" />
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="md:col-span-2">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Dialo</h3>
              <p className="text-primary-foreground/80 leading-relaxed max-w-lg text-lg">
                Transforming automotive dealership communication with intelligent AI technology. 
                Join the revolution and secure your competitive advantage today.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Platform</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#features" className="hover:text-accent transition-colors duration-300 hover:scale-105 inline-block">Features</a></li>
              <li><a href="#pricing" className="hover:text-accent transition-colors duration-300 hover:scale-105 inline-block">Pricing</a></li>
              <li><a href="#integration" className="hover:text-accent transition-colors duration-300 hover:scale-105 inline-block">Integration</a></li>
              <li><a href="#support" className="hover:text-accent transition-colors duration-300 hover:scale-105 inline-block">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-accent transition-colors duration-300 hover:scale-105 inline-block">About Us</a></li>
              <li><a href="#careers" className="hover:text-accent transition-colors duration-300 hover:scale-105 inline-block">Careers</a></li>
              <li><a href="#blog" className="hover:text-accent transition-colors duration-300 hover:scale-105 inline-block">Blog</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors duration-300 hover:scale-105 inline-block">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-primary-foreground/20 mb-8 sm:mb-12" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-primary-foreground/80">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <a href="/privacy" className="hover:text-accent transition-colors duration-300 hover:scale-105">Privacy Policy</a>
            <a href="/terms" className="hover:text-accent transition-colors duration-300 hover:scale-105">Terms of Service</a>
            <a href="/cookies" className="hover:text-accent transition-colors duration-300 hover:scale-105">Cookie Policy</a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-lg">© 2025 Dialo, Inc. All rights reserved.</p>
            <p className="text-primary-foreground/60 mt-2">Built with cutting-edge AI technology for dealership excellence.</p>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 border border-primary-foreground/20 shadow-premium-sm">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className="text-primary-foreground">Free Trial is live - Limited spots remaining</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;