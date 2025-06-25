
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';

const PreSaleSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 23,
    minutes: 42,
    seconds: 18
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    "Lifetime 70% discount (Save $2,100+ monthly)",
    "Priority implementation & support",
    "Exclusive founding member community access",
    "Direct input on feature development",
    "No setup fees or hidden costs",
    "30-day money-back guarantee"
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 sm:mb-6 bg-red-500/20 text-red-300 border-red-500/30 text-base sm:text-lg px-4 sm:px-6 py-2">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Limited-Time Pre-Sale Offer
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Secure Your Future at <span className="text-teal-400">70% Off</span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-slate-300 max-w-4xl mx-auto">
            This is your exclusive opportunity to get lifetime access to our AI Voice Agent Platform 
            at an unprecedented 70% discount. Help us validate demand and fund initial development.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
          <Card className="bg-red-500/10 border-red-500/30 text-white">
            <CardHeader>
              <CardTitle className="text-center text-xl sm:text-2xl text-red-300">Offer Expires In</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-red-300">{timeLeft.days}</div>
                  <div className="text-xs sm:text-sm text-slate-400">Days</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-red-300">{timeLeft.hours}</div>
                  <div className="text-xs sm:text-sm text-slate-400">Hours</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-red-300">{timeLeft.minutes}</div>
                  <div className="text-xs sm:text-sm text-slate-400">Minutes</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-red-300">{timeLeft.seconds}</div>
                  <div className="text-xs sm:text-sm text-slate-400">Seconds</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-teal-500/20 to-blue-500/20 border-teal-500/30 text-white">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl text-center">Founding Member Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-200">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-sm text-slate-400 line-through">Regular Price: $3,000/month</div>
                  <div className="text-2xl sm:text-3xl font-bold text-teal-400">Pre-Sale: $1,000/month</div>
                  <div className="text-sm text-slate-300">Lifetime price lock guaranteed</div>
                </div>
                
                <Button size="lg" className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-base sm:text-lg py-4 sm:py-6 font-semibold">
                  Lock in Your 70% Discount Now
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
                
                <p className="text-xs sm:text-sm text-slate-400">
                  By pre-ordering now, you're becoming a foundational partner in shaping the future of automotive communication.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 rounded-full px-4 sm:px-8 py-3 sm:py-4">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
            <span className="text-base sm:text-lg">
              <strong className="text-teal-400">Limited to first 100 customers</strong> for personalized onboarding
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreSaleSection;
