import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building, Users, Zap, Clock, CheckCircle } from 'lucide-react';

const ParagonHondaPreSaleSection = () => {
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
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
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

  const advantages = [
    {
      icon: Building,
      title: "Inventory",
      description: "Quality vehicles and comprehensive selection"
    },
    {
      icon: Users,
      title: "Team",
      description: "Experienced sales and service professionals"
    },
    {
      icon: Zap,
      title: "Brand",
      description: "Trusted Honda reputation and customer loyalty"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-gradient-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative container mx-auto px-3 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 sm:mb-8">
            The Vision & <span className="text-accent">Offer</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-primary-foreground/80 max-w-5xl mx-auto leading-relaxed px-2 mb-12">
            The choice is simple:
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16">
          {/* Left side - The Problem */}
          <Card className="bg-destructive/10 border-destructive/30 backdrop-blur-sm shadow-premium-lg">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-destructive mb-6">
                Keep Chasing Lost Service Revenue
              </h3>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Continue with the same tools — and watch competitors pull ahead while you lose market share to independents.
              </p>
            </CardContent>
          </Card>
          
          {/* Right side - The Solution */}
          <Card className="bg-accent/10 border-accent/30 backdrop-blur-sm shadow-premium-lg">
            <CardContent className="p-8 lg:p-12 text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-accent mb-6">
                Deploy AI-Powered Growth
              </h3>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Deploy a system that recaptures service business, drives trade-in growth, and keeps Paragon Honda top-of-mind with every customer — all without adding headcount.
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Paragon Honda Strengths */}
        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 lg:p-16 border border-primary-foreground/20 mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12">
            Paragon Honda has the:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-premium-sm">
                  <advantage.icon className="w-10 h-10 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-bold text-accent mb-3">{advantage.title}</h4>
                <p className="text-primary-foreground/80">{advantage.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-2xl font-bold text-accent mb-4">
              Now it's time to add the edge.
            </p>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 lg:px-12 py-6 lg:py-8 text-lg lg:text-xl font-bold shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:scale-105">
            See the AI Agent in Action
            <ArrowRight className="w-6 h-6 ml-4" />
          </Button>
          
          <p className="text-sm sm:text-base text-primary-foreground/70 mt-6 max-w-2xl mx-auto leading-relaxed px-2 mb-16">
            Transform your dealership communication today. Your customers are waiting, and your competitors are planning.
          </p>
        </div>
        
        {/* Countdown Timer and Offer Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Badge className="mb-6 sm:mb-8 bg-destructive/20 text-destructive-foreground border-destructive/30 text-sm sm:text-base lg:text-lg px-4 sm:px-6 py-2 sm:py-3 shadow-premium-sm">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
            Limited-Time Implementation Offer
          </Badge>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
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
              <CardTitle className="text-center text-lg sm:text-xl lg:text-2xl text-accent">Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-primary-foreground/90 leading-relaxed">Complete AI agent implementation & training</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-primary-foreground/90 leading-relaxed">Custom voice & personality tailored to Paragon Honda</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-primary-foreground/90 leading-relaxed">Integration with existing CRM & DMS systems</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-primary-foreground/90 leading-relaxed">30-day performance guarantee</span>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-primary-foreground/90 leading-relaxed">Priority support & ongoing optimization</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 border border-primary-foreground/20 mb-4">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-accent mb-1 sm:mb-2">Start Today</div>
                  <div className="text-sm sm:text-base text-primary-foreground/80">Full implementation after opt in</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ParagonHondaPreSaleSection;