
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUp, Users, Shield, Clock } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: ArrowUp,
      title: "Increase Sales Conversion",
      metric: "+45%",
      description: "Our AI agents qualify leads and streamline the sales process, ensuring no opportunity is missed. Transform your sales pipeline with intelligent lead nurturing."
    },
    {
      icon: Users,
      title: "Recover Lost Service Revenue",
      metric: "+$2M",
      description: "By providing exceptional, personalized communication, we help you retain customers. Turn that 70% loss into a gain by bringing customers back for service."
    },
    {
      icon: Shield,
      title: "Enhance Customer Satisfaction (CSI)",
      metric: "+35%",
      description: "Meet modern customer expectations for fast, transparent, and personalized communication. Improve your CSI scores and build lasting loyalty."
    },
    {
      icon: Clock,
      title: "Optimize Staff Productivity",
      metric: "60%",
      description: "Automate routine inquiries and tasks, allowing your valuable staff to focus on complex customer needs and closing deals, not administrative burdens."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Drive Revenue, Boost Satisfaction, <span className="text-teal-600">Maximize Efficiency</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            The Tangible Impact: Quantifiable results that transform your dealership's bottom line
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-bl-full"></div>
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-teal-600 mb-2">{benefit.metric}</div>
                <CardTitle className="text-lg text-slate-900">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-center text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Imagine Recovering $2M+ in Lost Service Revenue
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            While your competitors struggle with outdated communication methods, you'll be capturing every opportunity, 
            delighting every customer, and maximizing every revenue stream with AI-powered precision.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Customer Coverage</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="opacity-90">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">0.3s</div>
              <div className="opacity-90">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
