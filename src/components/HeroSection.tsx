import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Users } from 'lucide-react';
import { AIVoiceInput } from '@/components/ui/ai-voice-input';
const HeroSection = () => {
  return <section className="relative overflow-hidden text-foreground pt-16 min-h-screen flex items-center">
      {/* Floating geometric elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rotate-45 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 border border-accent/30 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-secondary/30 rotate-12 animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-4 sm:mb-6 glass-card border-holographic text-sm sm:text-base magnetic">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Trusted by 50+ Early Adopters
            </Badge>
            
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-glitch" data-text="Stop Losing 70% of Your Service Revenue">
              Stop Losing <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">70% of Your</span> Service Revenue
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-muted-foreground font-medium">
              The AI Voice Agent That Transforms Dealership Communication
            </p>
            
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Our AI Voice Agent Platform seamlessly integrates to boost sales, enhance CSI, and cut costs. 
              Pre-order now for a <strong className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">lifetime 70% discount</strong> and join the future of automotive communication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" className="btn-neon px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold magnetic">
                Secure Your 70% Lifetime Discount Now
              </Button>
              <Button variant="outline" size="lg" className="glass-card border-holographic px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg magnetic hover:bg-card/30">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0 float-animation">
            <div className="relative glass-card border-holographic rounded-2xl p-4 sm:p-6 lg:p-8 magnetic">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse-glow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
              
              <div className="glass-card rounded-lg p-4 sm:p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                  <span className="text-primary text-sm font-medium">AI Agent Active</span>
                </div>
                
                <div className="min-h-[200px] flex items-center justify-center">
                  <AIVoiceInput demoMode={false} visualizerBars={32} className="text-white" assistantId="demo-dealership-agent" onStart={() => console.log('Voice demo started')} onStop={duration => console.log('Voice demo ended, duration:', duration)} />
                </div>
              </div>
              
              <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                <span className="text-primary">Response Time: 0.6s</span>
                <span className="text-accent">Customer Satisfaction: 99.5%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <ArrowDown className="w-6 h-6 mx-auto text-primary animate-bounce" />
        </div>
      </div>
    </section>;
};
export default HeroSection;