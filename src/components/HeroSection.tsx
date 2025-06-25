
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Users } from 'lucide-react';
import { AIVoiceInput } from '@/components/ui/ai-voice-input';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white pt-16">
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-4 sm:mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 text-sm sm:text-base">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Trusted by 50+ Early Adopters
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Stop Losing <span className="text-teal-400">70% of Your</span> Service Revenue
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-slate-300 font-medium">
              The AI Voice Agent That Transforms Dealership Communication
            </p>
            
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-slate-400 max-w-xl mx-auto lg:mx-0">
              Our AI Voice Agent Platform seamlessly integrates to boost sales, enhance CSI, and cut costs. 
              Pre-order now for a <strong className="text-teal-400">lifetime 70% discount</strong> and join the future of automotive communication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold">
                Secure Your 70% Lifetime Discount Now
              </Button>
              <Button variant="outline" size="lg" className="border-slate-400 text-slate-300 hover:bg-slate-800 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-500"></div>
              
              <div className="bg-slate-900 rounded-lg p-4 sm:p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">AI Agent Active</span>
                </div>
                
                <div className="min-h-[200px] flex items-center justify-center">
                  <AIVoiceInput 
                    demoMode={true}
                    demoInterval={2000}
                    visualizerBars={32}
                    className="text-white"
                  />
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400">
                <span>Response Time: 0.3s</span>
                <span>Customer Satisfaction: 98%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <ArrowDown className="w-6 h-6 mx-auto text-slate-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
