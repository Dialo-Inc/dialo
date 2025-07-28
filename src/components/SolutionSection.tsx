import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Users, Shield } from 'lucide-react';
const SolutionSection = () => {
  const features = [{
    icon: Phone,
    title: "24/7 Instant Customer Handling",
    description: "Our AI Voice Agent provides round-the-clock customer support, answering FAQs, assisting with scheduling, and qualifying leads, freeing your staff to focus on high-value interactions."
  }, {
    icon: Shield,
    title: "Seamless System Integration",
    description: "Integrates perfectly with your dealership website, call center, and CRM, ensuring a unified customer view and personalized interactions across all touchpoints."
  }, {
    icon: Users,
    title: "Automotive Industry Expertise",
    description: "Trained on extensive automotive industry data, our agents understand customer intent, provide accurate information, and ensure every interaction is consistent and professional."
  }];
  return <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-foreground mb-8">
            Introducing the <span className="text-accent">AI Voice Agent</span>
          </h2>
          <p className="text-2xl text-muted-foreground mb-6 font-semibold">
            Your Dealership's Communication Revolution
          </p>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform every customer interaction with AI technology that understands automotive sales, 
            service scheduling, and customer needs at a human level.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-500 hover:scale-105 hover:bg-card">
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
            </Card>)}
        </div>
        
        <div className="bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 rounded-3xl p-12 lg:p-16 border border-accent/20 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="heading-sm text-foreground mb-8">
                See the Integration in Action
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 shadow-premium-sm">
                    <span className="text-accent-foreground font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-lg">Website Integration</h4>
                    <p className="text-muted-foreground leading-relaxed">Embedded agent widget handles inquiries instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 shadow-premium-sm">
                    <span className="text-accent-foreground font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-lg">Phone System Connection</h4>
                    <p className="text-muted-foreground leading-relaxed">Handles overflow calls and after-hours inquiries</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center flex-shrink-0 mt-1 shadow-premium-sm">
                    <span className="text-accent-foreground font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-lg">CRM Synchronization</h4>
                    <p className="text-muted-foreground leading-relaxed">Updates customer records and schedules follow-ups</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl shadow-premium-lg p-8 border border-border/50">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border/50">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-hover rounded-2xl flex items-center justify-center shadow-premium-sm">
                    <Phone className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">AI Agent Integration</div>
                    <div className="text-muted-foreground">Connected to all systems</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Website Chat: Active</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">Phone System: Connected</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                    <span className="text-muted-foreground">CRM Sync: Real-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionSection;