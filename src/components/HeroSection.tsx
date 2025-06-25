
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30">
              <Users className="w-4 h-4 mr-2" />
              Trusted by 50+ Early Adopters
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Stop Losing <span className="text-teal-400">70% of Your</span> Service Revenue
            </h1>
            
            <p className="text-xl lg:text-2xl mb-4 text-slate-300 font-medium">
              The AI Voice Agent That Transforms Dealership Communication
            </p>
            
            <p className="text-lg mb-8 text-slate-400 max-w-xl mx-auto lg:mx-0">
              Our AI Voice Agent Platform seamlessly integrates to boost sales, enhance CSI, and cut costs. 
              Pre-order now for a <strong className="text-teal-400">lifetime 70% discount</strong> and join the future of automotive communication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-8 py-6 text-lg font-semibold">
                Secure Your 70% Lifetime Discount Now
              </Button>
              <Button variant="outline" size="lg" className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-6 text-lg">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-500"></div>
              
              <div className="bg-slate-900 rounded-lg p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">AI Agent Active</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-slate-800 rounded-lg p-3">
                    <p className="text-slate-300 text-sm">"Hi! I'm looking to schedule a service appointment for my 2021 Honda Accord."</p>
                  </div>
                  <div className="bg-blue-600 rounded-lg p-3 ml-8">
                    <p className="text-white text-sm">"I'd be happy to help you schedule that! I can see available slots for next Tuesday or Wednesday. Which works better for you?"</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span>Response Time: 0.3s</span>
                <span>Customer Satisfaction: 98%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ArrowDown className="w-6 h-6 mx-auto text-slate-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
