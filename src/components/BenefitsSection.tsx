import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, Users, Shield, Clock } from 'lucide-react';
const BenefitsSection = () => {
  const benefits = [{
    icon: ArrowUp,
    title: "Increase Sales Conversion",
    metric: "+45%",
    description: "Our AI agents qualify leads and streamline the sales process, ensuring no opportunity is missed. Transform your sales pipeline with intelligent lead nurturing."
  }, {
    icon: Users,
    title: "Recover Lost Service Revenue",
    metric: "+$2M",
    description: "By providing exceptional, personalized communication, we help you retain customers. Turn that 70% loss into a gain by bringing customers back for service."
  }, {
    icon: Shield,
    title: "Enhance Customer Satisfaction (CSI)",
    metric: "+35%",
    description: "Meet modern customer expectations for fast, transparent, and personalized communication. Improve your CSI scores and build lasting loyalty."
  }, {
    icon: Clock,
    title: "Optimize Staff Productivity",
    metric: "60%",
    description: "Automate routine inquiries and tasks, allowing your valuable staff to focus on complex customer needs and closing deals, not administrative burdens."
  }];
  return <section className="py-12 sm:py-16 lg:py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background opacity-80" />
      <div className="container mx-auto px-3 sm:px-6 relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 sm:mb-8 px-2">
            Drive Revenue, Boost Satisfaction, <span className="text-accent">Maximize Efficiency</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            The Tangible Impact: Quantifiable results that transform your dealership's bottom line
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {benefits.map((benefit, index) => <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-500 hover:scale-105 hover:bg-card relative overflow-hidden">
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
            </Card>)}
        </div>
        
        <div className="bg-gradient-accent rounded-3xl p-12 lg:p-16 text-accent-foreground text-center shadow-premium-xl">
          <h3 className="heading-sm mb-8">
            Imagine Recovering $2M+ in Lost Service Revenue
          </h3>
          <p className="text-large mb-12 opacity-90 max-w-5xl mx-auto leading-relaxed">
            While your competitors struggle with outdated communication methods, you'll be capturing every opportunity, 
            delighting every customer, and maximizing every revenue stream with AI-powered precision.
          </p>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="opacity-90 text-lg">Customer Coverage</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">99.5%</div>
              <div className="opacity-90 text-lg">Customer Satisfaction</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">0.6s</div>
              <div className="opacity-90 text-lg">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;