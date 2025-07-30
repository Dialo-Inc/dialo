import { Card, CardContent } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
const SocialProofSection = () => {
  const testimonials = [{
    quote: "The AI Voice Agent transformed our customer service overnight. We've seen a 40% increase in service appointments and our CSI scores have never been higher. The 70% discount made this a no-brainer investment.",
    name: "Michael Rodriguez",
    title: "General Manager",
    company: "Premier Honda of Sacramento",
    image: "/placeholder.svg",
    rating: 5
  }, {
    quote: "What impressed me most was how seamlessly it integrated with our existing systems. Our staff loves it because they can focus on high-value interactions instead of answering the same questions all day. ROI was immediate.",
    name: "Sarah Chen",
    title: "Owner",
    company: "Pacific Coast Auto Group",
    image: "/placeholder.svg",
    rating: 5
  }, {
    quote: "We were skeptical about AI, but the results speak for themselves. Customer complaints about communication dropped by 60%, and we're capturing leads that would have walked away. This technology is the future.",
    name: "David Thompson",
    title: "Service Director",
    company: "Mountain View Chevrolet",
    image: "/placeholder.svg",
    rating: 5
  }];
  return <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background opacity-80" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-foreground mb-8">
            Don't Just Take <span className="text-accent">Our Word</span> For It
          </h2>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
            Early adopters are already seeing transformational results. Here's what dealership leaders are saying about their AI Voice Agent experience.
          </p>
          <Badge className="bg-accent/20 text-accent border-accent/30 px-6 py-3 text-lg">
            Real Results from Real Dealerships
          </Badge>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-500 hover:scale-105 hover:bg-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-accent rounded-t-lg"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-6 h-6 text-accent fill-current" />)}
                </div>
                
                <Quote className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform duration-500" />
                <p className="text-muted-foreground mb-8 leading-relaxed italic text-lg">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-premium-sm">
                    <span className="text-accent-foreground font-bold text-lg">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.title}</div>
                    <div className="text-accent font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="bg-gradient-primary rounded-3xl p-12 lg:p-16 text-primary-foreground text-center shadow-premium-xl">
          <h3 className="heading-sm mb-8">
            Partnership with Vapi AI
          </h3>
          <p className="text-large mb-12 opacity-90 max-w-5xl mx-auto leading-relaxed">
            Our AI Voice Agent Platform is built in partnership with Vapi AI, industry leaders in conversational AI technology. 
            Together, we've created a solution specifically designed for the unique challenges of automotive dealerships.
          </p>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-primary-foreground/20">
            <p className="text-large mb-6 opacity-90 leading-relaxed">
              "The automotive industry needed a specialized AI solution that understands the complexity of dealership operations. 
              Our partnership delivers exactly that - intelligent, context-aware conversations that drive real business results."
            </p>
            <div className="opacity-75 font-medium">
              — Vapi AI Engineering Team
            </div>
          </div>
          
          <div className="mt-12">
            <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 px-8 py-3 text-lg">Powered by Industry-Leading AI Technology</Badge>
          </div>
        </div>
      </div>
    </section>;
};
export default SocialProofSection;