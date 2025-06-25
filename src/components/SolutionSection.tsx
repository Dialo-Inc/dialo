
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Users, Shield } from 'lucide-react';

const SolutionSection = () => {
  const features = [
    {
      icon: Phone,
      title: "24/7 Instant Customer Handling",
      description: "Our AI Voice Agent provides round-the-clock customer support, answering FAQs, assisting with scheduling, and qualifying leads, freeing your staff to focus on high-value interactions."
    },
    {
      icon: Shield,
      title: "Seamless System Integration",
      description: "Integrates perfectly with your dealership website, call center, and CRM, ensuring a unified customer view and personalized interactions across all touchpoints."
    },
    {
      icon: Users,
      title: "Automotive Industry Expertise",
      description: "Trained on extensive automotive industry data, our agents understand customer intent, provide accurate information, and ensure every interaction is consistent and professional."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Introducing the <span className="text-blue-600">AI Voice Agent</span>
          </h2>
          <p className="text-2xl text-slate-600 mb-4 font-medium">
            Your Dealership's Communication Revolution
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Transform every customer interaction with AI technology that understands automotive sales, 
            service scheduling, and customer needs at a human level.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                See the Integration in Action
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Website Integration</h4>
                    <p className="text-slate-600">Embedded chat widget handles inquiries instantly</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone System Connection</h4>
                    <p className="text-slate-600">Handles overflow calls and after-hours inquiries</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">CRM Synchronization</h4>
                    <p className="text-slate-600">Updates customer records and schedules follow-ups</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center gap-3 mb-4 pb-4 border-b">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">AI Agent Integration</div>
                    <div className="text-sm text-slate-500">Connected to all systems</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-600">Website Chat: Active</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-600">Phone System: Connected</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-slate-600">CRM Sync: Real-time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
