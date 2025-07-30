import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Users, Play } from 'lucide-react';
import { AIVoiceInput } from '@/components/ui/ai-voice-input';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-16 min-h-screen flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <Badge className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground border-border/50 px-4 py-2 text-sm font-medium">
              <Users className="w-4 h-4" />
              Trusted by 50+ Early Adopters
            </Badge>
            
            <div className="space-y-6">
              <h1 className="heading-xl text-foreground leading-[1.1]">
                Stop Losing{' '}
                <span className="relative">
                  <span className="text-accent">70% of Your</span>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent/20 rounded-full"></div>
                </span>{' '}
                Service Revenue
              </h1>
              
              <p className="text-large text-muted-foreground font-medium max-w-2xl">
                The AI Voice Agent That Transforms Dealership Communication
              </p>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Our AI Voice Agent Platform seamlessly integrates to boost sales, enhance CSI, and cut costs. 
                Pre-order now for a{' '}
                <strong className="text-accent font-semibold">lifetime 70% discount</strong>{' '}
                and join the future of automotive communication.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-6 text-lg font-semibold btn-premium shadow-premium-lg"
              >
                Secure Your 70% Lifetime Discount Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-border bg-background hover:bg-secondary px-8 py-6 text-lg group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Right Content - AI Demo */}
          <div className="relative mt-8 lg:mt-0 animate-slide-in-right">
            <div className="relative bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-premium-xl">
              {/* Status indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-muted-foreground">Live Demo</span>
              </div>
              
              {/* Demo interface */}
              <div className="bg-secondary/50 rounded-xl p-6 mb-6 min-h-[300px] flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase">AI Agent Active</span>
                </div>
                
                {/* AI Voice Input Component */}
                <div className="flex-1 flex items-center justify-center">
                  <AIVoiceInput 
                    demoMode={false} 
                    visualizerBars={32} 
                    className="text-foreground" 
                    assistantId="demo-dealership-agent" 
                    onStart={() => console.log('Voice demo started')} 
                    onStop={duration => console.log('Voice demo ended, duration:', duration)} 
                  />
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-foreground">0.6s</div>
                  <div className="text-xs text-muted-foreground">Response Time</div>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <div className="text-lg font-bold text-foreground">99.5%</div>
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="text-center mt-16 animate-fade-in">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;