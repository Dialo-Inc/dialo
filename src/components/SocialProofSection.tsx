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
  return <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Don't Just Take <span className="text-teal-600">Our Word</span> For It
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Early adopters are already seeing transformational results. Here's what dealership leaders are saying about their AI Voice Agent experience.
          </p>
          <Badge className="bg-teal-500/20 text-teal-700 border-teal-500/30 px-4 py-2">
            Real Results from Real Dealerships
          </Badge>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500"></div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />)}
                </div>
                
                <Quote className="w-8 h-8 text-teal-500 mb-4" />
                <p className="text-slate-700 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.title}</div>
                    <div className="text-sm text-teal-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            Partnership with Vapi AI
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-4xl mx-auto">
            Our AI Voice Agent Platform is built in partnership with Vapi AI, industry leaders in conversational AI technology. 
            Together, we've created a solution specifically designed for the unique challenges of automotive dealerships.
          </p>
          
          <div className="bg-white/10 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-lg mb-4 opacity-90">
              "The automotive industry needed a specialized AI solution that understands the complexity of dealership operations. 
              Our partnership delivers exactly that - intelligent, context-aware conversations that drive real business results."
            </p>
            <div className="text-sm opacity-75">
              — Vapi AI Engineering Team
            </div>
          </div>
          
          <div className="mt-8">
            <Badge className="bg-white/20 text-white border-white/30 px-6 py-2">Powered by Industry-Leading AI Technology</Badge>
          </div>
        </div>
      </div>
    </section>;
};
export default SocialProofSection;