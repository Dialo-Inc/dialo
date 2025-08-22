import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';
const PreSaleSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const calculateTimeLeft = () => {
      // Fixed launch date: August 31, 2025 at 11:59 PM UTC
      const launchDate = new Date('2025-08-31T23:59:59.999Z');
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(difference / (1000 * 60 * 60) % 24),
          minutes: Math.floor(difference / 1000 / 60 % 60),
          seconds: Math.floor(difference / 1000 % 60)
        };
      }
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    };

    // Update immediately
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const benefits = ["Lifetime 70% discount (Save $2,100+ monthly)", "Priority implementation & support", "Exclusive founding member community access", "Direct input on feature development", "No setup fees or hidden costs", "30-day money-back guarantee"];
  return <section className="py-12 sm:py-16 lg:py-24 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      </div>
      
      <div className="relative container mx-auto px-3 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge className="mb-6 sm:mb-8 bg-destructive/20 text-destructive-foreground border-destructive/30 text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3 shadow-premium-sm">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            Limited-Time Pre-Sale Offer
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8">
            Secure Your Future at <span className="text-accent">100% Off</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-primary-foreground/80 max-w-5xl mx-auto leading-relaxed px-2">This is your exclusive opportunity to get access to Dialo for free. </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start mb-12 sm:mb-16 lg:mb-20">
          <Card className="bg-destructive/10 border-destructive/30 backdrop-blur-sm shadow-premium-lg">
            <CardHeader>
              <CardTitle className="text-center text-lg sm:text-xl lg:text-2xl text-destructive">Offer Expires In</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                <div className="group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-destructive group-hover:scale-110 transition-transform duration-300">{timeLeft.days}</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/60">Days</div>
                </div>
                <div className="group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-destructive group-hover:scale-110 transition-transform duration-300">{timeLeft.hours}</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/60">Hours</div>
                </div>
                <div className="group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-destructive group-hover:scale-110 transition-transform duration-300">{timeLeft.minutes}</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/60">Minutes</div>
                </div>
                <div className="group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-destructive group-hover:scale-110 transition-transform duration-300">{timeLeft.seconds}</div>
                  <div className="text-xs sm:text-sm text-primary-foreground/60">Seconds</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-accent/10 border-accent/30 backdrop-blur-sm shadow-premium-lg">
            <CardHeader>
              <CardTitle className="text-center text-lg sm:text-xl lg:text-2xl text-accent">Founding Member Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {benefits.map((benefit, index) => <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-primary-foreground/90 leading-relaxed">{benefit}</span>
                  </div>)}
              </div>
              
              <div className="text-center space-y-4 sm:space-y-6">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-primary-foreground/20">
                  
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2">Free Trial</div>
                  <div className="text-sm sm:text-base text-primary-foreground/80">Lifetime value lock guaranteed</div>
                </div>
                
                <Button size="lg" className="w-full bg-accent hover:bg-accent-hover text-accent-foreground text-sm sm:text-base lg:text-lg py-4 sm:py-5 lg:py-6 font-semibold shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:scale-105">
                  <span className="hidden sm:inline">Lock in Your Free Trial Now</span>
                  <span className="sm:hidden">Get 70% Discount</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3" />
                </Button>
                
                <p className="text-xs sm:text-sm text-primary-foreground/70 leading-relaxed px-2">By trying now, you're becoming a foundational partner in shaping the future of automotive communication.</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center px-2">
          <div className="inline-flex items-center gap-2 sm:gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border border-primary-foreground/20 shadow-premium-sm">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-accent flex-shrink-0" />
            <span className="text-sm sm:text-base lg:text-lg">
              <strong className="text-accent">Limited spot</strong> for personalized onboarding
            </span>
          </div>
        </div>
      </div>
    </section>;
};
export default PreSaleSection;