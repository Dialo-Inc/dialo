import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Users, Clock, MessageCircle } from 'lucide-react';

const ParagonHondaSolutionSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Natural, Human-Level Conversations",
      description: "Holds natural, human-level conversations that feel personal — even at scale. Every customer feels like your only customer."
    },
    {
      icon: Phone,
      title: "Instant Scheduling & Handoff",
      description: "Scheduling appointments, answering questions, and handing off to you or your team instantly when needed."
    },
    {
      icon: Clock,
      title: "24/7 Operation",
      description: "Run 24/7 - no sick days, no training cost, no burnout. Always available when your customers need support."
    },
    {
      icon: Users,
      title: "Automated Customer Engagement",
      description: "Executes outreach and inbound engagement so you stay connected with every single customer, automatically."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-foreground mb-8">
            Imagine if every customer in your database felt like <span className="text-accent">your only customer</span>
          </h2>
          <p className="text-2xl text-muted-foreground mb-6 font-semibold">
            Our Voice AI Agent makes that possible:
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-500 hover:scale-105 hover:bg-card">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="text-center pb-6 relative">
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-500">
                  <feature.icon className="w-10 h-10 text-accent group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-foreground transition-colors duration-500">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground leading-relaxed text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParagonHondaSolutionSection;