import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, TrendingDown, Users, Calendar } from 'lucide-react';

const ParagonHondaHowItWorksSection = () => {
  const stakes = [
    {
      icon: TrendingDown,
      title: "Other dealers will start closing on your service customers",
      description: "Competitors with better communication systems will capture the customers you're losing to delayed responses and poor follow-up."
    },
    {
      icon: Users,
      title: "Independents will lock in more long-term loyalty from your base",
      description: "Independent shops are already winning with personal service. Without AI-powered engagement, they'll solidify those relationships."
    },
    {
      icon: Calendar,
      title: "Every missed contact compounds into lost sales and reduced CSI scores",
      description: "Each day of delayed implementation means more missed opportunities, lower satisfaction scores, and diminished market dominance."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-destructive/5 to-primary/5" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-foreground mb-8">
            The <span className="text-destructive">Stakes</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Delay 6 months and the gap will widen:
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {stakes.map((stake, index) => (
            <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-500 hover:scale-105 hover:bg-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-destructive to-destructive/70 rounded-t-lg"></div>
              <CardContent className="p-10 text-center relative">
                <div className="w-24 h-24 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-8 relative group-hover:scale-110 transition-transform duration-500 shadow-premium-md">
                  <stake.icon className="w-12 h-12 text-destructive" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-6 group-hover:text-foreground transition-colors duration-500">{stake.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base">{stake.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 rounded-3xl p-12 lg:p-16 border border-accent/20 backdrop-blur-sm text-center">
          <h3 className="heading-sm text-foreground mb-6">
            This isn't about replacing your team — it's about giving them a multiplier
          </h3>
          <p className="text-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your staff focuses on high-value interactions and closing deals while AI handles routine communication, 
            scheduling, and initial customer qualification. Everyone wins.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ParagonHondaHowItWorksSection;