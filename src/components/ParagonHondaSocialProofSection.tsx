import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AIAgentDialog } from '@/components/ui/ai-agent-dialog';
import { MessageCircle, ArrowRight, Phone } from 'lucide-react';

const ParagonHondaSocialProofSection = () => {
  return (
    <section className="mobile-section-padding bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background opacity-80" />
      <div className="mobile-container relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="mobile-heading text-foreground mb-6 sm:mb-8 px-2">
            Proof on <span className="text-accent">This Page</span>
          </h2>
          <Badge className="bg-accent/20 text-accent border-accent/30 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg mb-6 sm:mb-8">
            Live AI Agent Demo
          </Badge>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="group bg-card/50 backdrop-blur-sm border-border/50 shadow-premium-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-accent rounded-t-lg"></div>
            <CardContent className="mobile-card-padding text-center relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-premium-md">
                <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-accent-foreground" />
              </div>
              
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 px-2">
                Talk to the AI Agent right now
              </h3>
              
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2">
                Ask it anything about Paragon Honda. See how it responds — and notice how easily it can hand off the call to a real person.
              </p>
              
              <div className="bg-secondary/50 rounded-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 border border-border/50">
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-accent font-semibold tracking-wider uppercase text-sm sm:text-base">Ready to Assist</span>
                </div>
                
                <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-6 px-2">
                  Try asking: "What service specials does Paragon Honda have?" or "Can you schedule a service appointment?"
                </p>
                
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                  <span className="text-foreground font-medium text-sm sm:text-base">Click the voice button above to start talking</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed px-2">
                  <strong className="text-accent">If it can do this here, imagine what it can do with your entire database.</strong>
                </p>
                
                <AIAgentDialog assistantId={import.meta.env.VITE_PARAGON_HONDA_ASSISTANT_ID}>
                  <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    Try the AI Agent
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
                  </Button>
                </AIAgentDialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ParagonHondaSocialProofSection;