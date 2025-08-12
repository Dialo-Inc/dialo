import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, ArrowRight, Phone } from 'lucide-react';

const ParagonHondaSocialProofSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background opacity-80" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-foreground mb-8">
            Proof on <span className="text-accent">This Page</span>
          </h2>
          <Badge className="bg-accent/20 text-accent border-accent/30 px-6 py-3 text-lg mb-8">
            Live AI Agent Demo
          </Badge>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="group bg-card/50 backdrop-blur-sm border-border/50 shadow-premium-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-accent rounded-t-lg"></div>
            <CardContent className="p-12 text-center relative">
              <div className="w-24 h-24 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-premium-md">
                <MessageCircle className="w-12 h-12 text-accent-foreground" />
              </div>
              
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Talk to the AI Agent right now
              </h3>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Ask it anything about Paragon Honda. See how it responds — and notice how easily it can hand off the call to a real person.
              </p>
              
              <div className="bg-secondary/50 rounded-xl p-8 mb-8 border border-border/50">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-accent font-semibold tracking-wider uppercase">Ready to Assist</span>
                </div>
                
                <p className="text-muted-foreground text-lg mb-6">
                  Try asking: "What service specials does Paragon Honda have?" or "Can you schedule a service appointment?"
                </p>
                
                <div className="flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6 text-accent" />
                  <span className="text-foreground font-medium">Click the voice button above to start talking</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-accent">If it can do this here, imagine what it can do with your entire database.</strong>
                </p>
                
                <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-6 text-lg font-semibold shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:scale-105">
                  Try the AI Agent — Then Book Your Call
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ParagonHondaSocialProofSection;