import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, Users, TrendingUp } from 'lucide-react';

const ParagonHondaBenefitsSection = () => {
  const benefits = [
    {
      icon: ArrowUp,
      title: "Recapture Service Business",
      metric: "80%",
      description: "Recapture service business from independents with proactive, personalized outreach that brings customers back to your dealership."
    },
    {
      icon: TrendingUp,
      title: "Drive Trade-in Opportunities", 
      metric: "+80%",
      description: "Drive 80% more trade-in opportunities with scalable, relevant communication that reaches customers at the right moment."
    },
    {
      icon: Users,
      title: "Stay Top-of-Mind",
      metric: "100%",
      description: "Keep dealership top-of-mind with every single customer, not just the ones who walk in today. Maintain consistent engagement."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background opacity-80" />
      <div className="container mx-auto px-3 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 sm:mb-8 px-2">
            Why it Matters <span className="text-accent">Now</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            The dealers who win in the next 12 months will be AI-enabled — not AI-aware.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-500 hover:scale-105 hover:bg-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/10 to-accent/20 rounded-bl-3xl opacity-50"></div>
              <CardHeader className="text-center pb-6 relative">
                <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-premium-sm">
                  <benefit.icon className="w-10 h-10 text-accent-foreground" />
                </div>
                <div className="text-4xl font-bold text-accent mb-4 group-hover:scale-105 transition-transform duration-500">{benefit.metric}</div>
                <CardTitle className="text-lg text-foreground group-hover:text-foreground transition-colors duration-500">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed text-center">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParagonHondaBenefitsSection;