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
  return <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Simple Integration, <span className="text-blue-600">Powerful Results</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Get up and running in minutes, not days. Our streamlined process ensures minimal disruption while maximizing the impact on your dealership operations.</p>
        </div>
        
        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => <div key={index} className="relative">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-500"></div>
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                      <step.icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{step.number}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && <div className="lg:hidden flex justify-center my-6">
                    <ArrowRight className="w-6 h-6 text-blue-500" />
                  </div>}
              </div>)}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 lg:p-12 border border-blue-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Dealership?
            </h3>
            <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
              Join the AI revolution in automotive customer service. Your competitors are already exploring this technology. 
              Don't let them get ahead.
            </p>
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
              Implementation starts in 48 hours
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;