import { Mic, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Blog = () => {
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
              <a href="/about" className="text-muted-foreground hover:text-accent transition-colors">About</a>
              <a href="/careers" className="text-muted-foreground hover:text-accent transition-colors">Careers</a>
              <a href="/blog" className="text-accent font-medium">Blog</a>
              <a href="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="heading-xl text-foreground mb-8">
            Dialo <span className="text-accent">Blog</span>
          </h1>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Insights, updates, and thought leadership on the future of automotive customer communication.
          </p>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="heading-lg text-foreground mb-8">
              Latest <span className="text-accent">Insights</span>
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-12 border border-border/50 shadow-premium-lg hover:shadow-premium-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="text-muted-foreground">Coming Soon</span>
              </div>
              <h3 className="heading-lg text-foreground mb-6">
                How AI Voice Agents are Transforming Dealership Sales Funnels
              </h3>
              <p className="text-large text-muted-foreground mb-8 leading-relaxed">
                Discover how modern dealerships are using AI voice technology to capture more leads, qualify prospects faster, and close more deals. We'll explore real-world case studies and best practices for implementation.
              </p>
              <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                Read More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Posts Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="heading-lg text-foreground mb-8">
              Coming <span className="text-accent">Soon</span>
            </h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're preparing comprehensive content covering AI implementation, customer experience optimization, and industry trends.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md">
              <h3 className="heading-sm text-foreground mb-4">
                The ROI of Voice AI in Automotive
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Quantifying the business impact of AI voice technology on dealership operations and customer satisfaction.
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md">
              <h3 className="heading-sm text-foreground mb-4">
                Integration Best Practices
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A comprehensive guide to seamlessly integrating AI voice agents with existing dealership systems.
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md">
              <h3 className="heading-sm text-foreground mb-4">
                Customer Experience Revolution
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                How voice AI is reshaping customer expectations and interaction patterns in automotive retail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-accent rounded-3xl p-12 lg:p-16 text-accent-foreground text-center shadow-premium-xl max-w-4xl mx-auto">
            <h3 className="heading-sm mb-8">
              Stay Updated
            </h3>
            <p className="text-large mb-8 opacity-90 leading-relaxed">
              Get the latest insights on AI, voice technology, and automotive industry trends delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-3 rounded-xl bg-accent-foreground/10 border border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent-foreground/30"
              />
              <Button variant="secondary" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;