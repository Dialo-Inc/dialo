
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
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            The Hidden Costs of <span className="text-red-600">Outdated</span> Dealership Communication
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Are your sales teams overwhelmed by inconsistent follow-ups and missed inquiries? 
            You're not alone. The numbers reveal the true cost of communication failures.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <problem.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-4xl font-bold text-red-600 mb-2">{problem.stat}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{problem.title}</h3>
                <p className="text-slate-600 leading-relaxed">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 lg:p-12 text-center border border-red-100">
          <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
            The Reality: Every Missed Call is Lost Revenue
          </h3>
          <p className="text-lg text-slate-700 mb-6 max-w-4xl mx-auto">
            Manual processes create bottlenecks. Customers get frustrated with slow responses. 
            Your staff burns out handling repetitive inquiries. Meanwhile, competitors with better 
            communication systems capture the customers you're losing.
          </p>
          <div className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full font-semibold">
            <ArrowDown className="w-5 h-5 mr-2" />
            This Ends Now
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
