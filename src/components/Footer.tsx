import { Separator } from '@/components/ui/separator';
const Footer = () => {
  return <footer className="bg-slate-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="md:col-span-2">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Dialo</h3>
              <p className="text-slate-400 leading-relaxed max-w-md text-sm sm:text-base">
                Transforming automotive dealership communication with intelligent AI technology. 
                Join the revolution and secure your competitive advantage today.
              </p>
            </div>
            
            <div className="space-y-2 text-sm sm:text-base">
              <p className="text-slate-400">Contact Information:</p>
              <p className="text-white">Email: info@usedialo.com</p>
              <p className="text-white">Phone: 1-800-AI-VOICE</p>
              <p className="text-white">Address: San Francisco, CA</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Platform</h4>
            <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#integration" className="hover:text-white transition-colors">Integration</a></li>
              <li><a href="#support" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-base sm:text-lg">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm sm:text-base">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-slate-700 mb-6 sm:mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm sm:text-base">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          
          <div className="text-center md:text-right">
            <p>© 2025 Dialo, Inc. All rights reserved.</p>
            <p className="text-xs sm:text-sm mt-1">Built with cutting-edge AI technology for dealership excellence.</p>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800 rounded-full px-4 sm:px-6 py-2 sm:py-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-slate-300">
              Pre-sale is live - Limited spots remaining
            </span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;