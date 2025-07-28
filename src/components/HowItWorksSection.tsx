import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Users, Phone, Shield } from 'lucide-react';
const HowItWorksSection = () => {
  const steps = [{
    icon: Shield,
    number: "01",
    title: "Seamless Integration",
    description: "Our team integrates the AI voice agent with your existing website, phone system, and CRM. No disruption to your current operations."
  }, {
    icon: Phone,
    number: "02",
    title: "Intelligent Interaction",
    description: "Customers interact with the AI agent for routine inquiries, 24/7. The agent handles common questions, schedules appointments, and qualifies leads."
  }, {
    icon: Users,
    number: "03",
    title: "Human Handoff",
    description: "For complex or sensitive issues, the AI agent seamlessly transfers the conversation to your sales or service team, providing full context for a smooth transition."
  }];
  return <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-foreground mb-8">
            Simple Integration, <span className="text-accent">Powerful Results</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto leading-relaxed">Get up and running in minutes, not days. Our streamlined process ensures minimal disruption while maximizing the impact on your dealership operations.</p>
        </div>
        
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-gradient-accent rounded-full transform -translate-y-1/2 opacity-30"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 relative">
            {steps.map((step, index) => <div key={index} className="relative">
                <Card className="group bg-card/50 backdrop-blur-sm border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-500 hover:scale-105 hover:bg-card relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-accent rounded-t-lg"></div>
                  <CardContent className="p-10 text-center relative">
                    <div className="w-24 h-24 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-8 relative group-hover:scale-110 transition-transform duration-500 shadow-premium-md">
                      <step.icon className="w-12 h-12 text-accent-foreground" />
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-primary rounded-2xl flex items-center justify-center shadow-premium-sm">
                        <span className="text-primary-foreground font-bold">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-foreground transition-colors duration-500">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && <div className="lg:hidden flex justify-center my-8">
                    <ArrowRight className="w-8 h-8 text-accent" />
                  </div>}
              </div>)}
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 rounded-3xl p-12 lg:p-16 border border-accent/20 backdrop-blur-sm">
            <h3 className="heading-sm text-foreground mb-6">
              Ready to Transform Your Dealership?
            </h3>
            <p className="text-large text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the AI revolution in automotive customer service. Your competitors are already exploring this technology. 
              Don't let them get ahead.
            </p>
            <div className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-hover transition-colors duration-300 shadow-premium-lg hover:shadow-premium-xl">
              Implementation starts in 48 hours
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;