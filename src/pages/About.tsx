import { Mic } from 'lucide-react';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/50 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-premium-sm">
                <Mic className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">Dialo</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="/" className="text-muted-foreground hover:text-accent transition-colors">Home</a>
              <a href="/about" className="text-accent font-medium">About</a>
              <a href="/careers" className="text-muted-foreground hover:text-accent transition-colors">Careers</a>
              <a href="/blog" className="text-muted-foreground hover:text-accent transition-colors">Blog</a>
              <a href="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="heading-xl text-foreground mb-8">
            About <span className="text-accent">Dialo</span>
          </h1>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're building the future of customer communication in the automotive industry. With deep expertise in voice technology, dealership operations, and customer experience, our mission is to help dealerships unlock new levels of growth using the power of AI.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg text-foreground mb-8">
                Our <span className="text-accent">Mission</span>
              </h2>
              <p className="text-large text-muted-foreground mb-6 leading-relaxed">
                Every day, dealerships lose potential customers due to poor communication experiences. We believe that shouldn't happen in 2024.
              </p>
              <p className="text-large text-muted-foreground leading-relaxed">
                Dialo bridges the gap between cutting-edge AI technology and the unique needs of automotive dealerships, creating meaningful connections that drive real business results.
              </p>
            </div>
            <div className="bg-gradient-accent rounded-3xl p-12 text-accent-foreground shadow-premium-xl">
              <h3 className="heading-sm mb-6">Our Vision</h3>
              <p className="text-large opacity-90 leading-relaxed">
                To become the communication backbone of every modern automotive dealership, enabling seamless customer interactions that feel personal, intelligent, and effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="heading-lg text-foreground mb-8">
              Our <span className="text-accent">Values</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-300">
              <h3 className="heading-sm text-foreground mb-4">Innovation First</h3>
              <p className="text-muted-foreground leading-relaxed">
                We push the boundaries of what's possible with voice AI, constantly evolving to meet the changing needs of the automotive industry.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-300">
              <h3 className="heading-sm text-foreground mb-4">Customer Obsessed</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every feature we build is designed with the end customer in mind, ensuring exceptional experiences that drive dealership growth.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-300">
              <h3 className="heading-sm text-foreground mb-4">Seamless Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe technology should enhance, not complicate. Our solutions integrate seamlessly into existing dealership workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;