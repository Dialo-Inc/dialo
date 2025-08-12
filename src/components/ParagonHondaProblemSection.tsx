import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown, Database, TrendingDown } from 'lucide-react';

const ParagonHondaProblemSection = () => {
  const problems = [
    {
      icon: TrendingDown,
      stat: "80%",
      title: "Service Lost to Independents",
      description: "Service lost to independents means millions in untapped revenue. Your competitive advantage is slipping away every day."
    },
    {
      icon: Database,
      stat: "100,000+",
      title: "Underutilized Customer Database",
      description: "Your database — 100,000+ customers — is sitting on hidden business, but they're not being reached consistently at the right times."
    },
    {
      icon: ArrowDown,
      stat: "Daily",
      title: "Growing Competitive Gap",
      description: "Each day without a modern contact strategy, competitors and independents are filling that gap and taking your customers."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background opacity-80" />
      <div className="container mx-auto px-3 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 sm:mb-8 px-2">
            In the car business, follow-up isn't a <span className="text-destructive">"nice to have"</span> — it's the difference between market dominance and market loss.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {problems.map((problem, index) => (
            <Card key={index} className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-500 hover:scale-105 hover:bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-6 sm:p-8 text-center relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:bg-destructive/20 transition-colors duration-500">
                  <problem.icon className="w-8 h-8 sm:w-10 sm:h-10 text-destructive group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-destructive mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-500">{problem.stat}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 group-hover:text-foreground transition-colors duration-500">{problem.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParagonHondaProblemSection;