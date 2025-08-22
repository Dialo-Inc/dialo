import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Users, Play } from 'lucide-react';
import { AIVoiceInput } from '@/components/ui/ai-voice-input';
import { AIAgentDialog } from '@/components/ui/ai-agent-dialog';
const HeroSection = () => {
  return <section className="relative overflow-hidden bg-background pt-16 min-h-screen flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      </div>
      
      <div className="relative container mx-auto px-3 sm:px-6 py-8 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-in-up px-2 sm:px-0">
            <Badge className="inline-flex items-center gap-2 text-secondary-foreground border-border/50 px-3 py-1.5 text-xs sm:text-sm font-medium bg-slate-200">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              Trusted by 50+ Early Adopters
            </Badge>
            
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Stop Losing{' '}
                <span className="relative">
                  <span className="text-accent">70% of Your</span>
                  <div className="absolute -bottom-1 lg:-bottom-2 left-0 w-full h-0.5 lg:h-1 bg-accent/20 rounded-full"></div>
                </span>{' '}
                Service Revenue
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-xl text-muted-foreground font-medium max-w-2xl mx-auto lg:mx-0">
                The AI Voice Agent That Transforms Dealership Communication
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Dialo seamlessly integrates to boost sales, enhance CSI, and cut costs. 
                Pre-order now for a{' '}
                <strong className="text-accent font-semibold"> 100% discount</strong>{' '}
                and join the future of automotive communication.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg font-semibold btn-premium shadow-premium-lg w-full sm:w-auto">
                <span className="hidden sm:inline">Secure Your 100% Lifetime Discount Now</span>
                <span className="sm:hidden">Get 70% Discount Now</span>
              </Button>
              <AIAgentDialog assistantId={import.meta.env.VITE_GENERAL_ASSISTANT_ID || "demo-dealership-agent"}>
                <Button variant="outline" size="lg" className="border-border bg-background hover:bg-secondary px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 text-sm sm:text-base lg:text-lg group w-full sm:w-auto">
                  Try the AI Agent
                </Button>
              </AIAgentDialog>
            </div>
          </div>
          
          {/* Right Content - AI Demo */}
          <div className="relative mt-6 lg:mt-0 animate-slide-in-right px-2 sm:px-0">
            <div className="relative bg-card border border-border rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-premium-xl">
              {/* Status indicator */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">Live Demo</span>
              </div>
              
              {/* Demo interface */}
              <div className="bg-secondary/50 rounded-lg lg:rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 min-h-[200px] sm:min-h-[250px] lg:min-h-[300px] flex flex-col justify-center">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider uppercase">AI Agent Active</span>
                </div>
                
                {/* AI Voice Input Component */}
                <div className="flex-1 flex items-center justify-center">
                  <AIVoiceInput demoMode={false} visualizerBars={24} className="text-foreground scale-75 sm:scale-90 lg:scale-100" assistantId={import.meta.env.VITE_GENERAL_ASSISTANT_ID || "demo-dealership-agent"} onStart={() => console.log('General voice demo started')} onStop={duration => console.log('General voice demo ended, duration:', duration)} />
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 text-center">
                <div className="p-2 sm:p-3 bg-secondary/30 rounded-md lg:rounded-lg">
                  <div className="text-base sm:text-lg font-bold text-foreground">0.6s</div>
                  <div className="text-xs text-muted-foreground">Response Time</div>
                </div>
                <div className="p-2 sm:p-3 bg-secondary/30 rounded-md lg:rounded-lg">
                  <div className="text-base sm:text-lg font-bold text-foreground">99.5%</div>
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
    </section>;
};
export default HeroSection;