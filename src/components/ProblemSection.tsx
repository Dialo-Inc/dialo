
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, ArrowDown } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: Clock,
      stat: "37%",
      title: "Poor Communication in Reviews",
      description: "Poor communication is cited in 37% of negative customer reviews, directly damaging your reputation and deterring potential customers."
    },
    {
      icon: ArrowDown,
      stat: "70%",
      title: "Lost Service Revenue",
      description: "70% of customers don't return for service to the selling dealership due to disappointing experiences, including poor communication. That's millions in lost revenue annually."
    },
    {
      icon: Users,
      stat: "60%",
      title: "Staff Overwhelm",
      description: "Manual processes lead to delayed responses, lack of personalization, and high employee turnover, directly impacting your bottom line and customer loyalty."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background opacity-80" />
      <div className="container mx-auto px-3 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 sm:mb-8 px-2">
            The Hidden Costs of <span className="text-destructive">Outdated</span> Dealership Communication
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-2">
            Are your sales teams overwhelmed by inconsistent follow-ups and missed inquiries? 
            You're not alone. The numbers reveal the true cost of communication failures.
          </p>
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
        
        <div className="bg-gradient-to-br from-destructive/5 via-destructive/10 to-destructive/5 rounded-3xl p-12 lg:p-16 text-center border border-destructive/20 backdrop-blur-sm">
          <h3 className="heading-sm text-foreground mb-6">
            The Reality: Every Missed Call is Lost Revenue
          </h3>
          <p className="text-large text-muted-foreground mb-8 max-w-5xl mx-auto leading-relaxed">
            Manual processes create bottlenecks. Customers get frustrated with slow responses. 
            Your staff burns out handling repetitive inquiries. Meanwhile, competitors with better 
            communication systems capture the customers you're losing.
          </p>
          <div className="inline-flex items-center bg-destructive text-destructive-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-destructive/90 transition-colors duration-300 shadow-premium-lg hover:shadow-premium-xl">
            <ArrowDown className="w-6 h-6 mr-3" />
            This Ends Now
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
