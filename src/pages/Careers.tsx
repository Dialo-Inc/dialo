import { Mic, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';

const Careers = () => {
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
              <a href="/careers" className="text-accent font-medium">Careers</a>
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
            Join the <span className="text-accent">Future</span> of Automotive AI
          </h1>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
            Join a team reimagining how dealerships engage with customers. We're hiring engineers, marketers, and partnership leads. Shape the future with us.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent-hover text-accent-foreground font-semibold px-8 py-4 rounded-2xl shadow-premium-lg hover:shadow-premium-xl transition-all duration-300 hover:scale-105"
          >
            View Open Roles
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="heading-lg text-foreground mb-8">
              Why Work <span className="text-accent">With Us</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-300">
              <h3 className="heading-sm text-foreground mb-4">Cutting-Edge Tech</h3>
              <p className="text-muted-foreground leading-relaxed">
                Work with the latest in AI and voice technology, pushing the boundaries of what's possible.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-300">
              <h3 className="heading-sm text-foreground mb-4">Real Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your work directly impacts thousands of dealerships and millions of customers.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-300">
              <h3 className="heading-sm text-foreground mb-4">Growth Opportunity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Join us early and grow with the company as we transform an entire industry.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-300">
              <h3 className="heading-sm text-foreground mb-4">Remote First</h3>
              <p className="text-muted-foreground leading-relaxed">
                Work from anywhere with a team that values flexibility and work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="heading-lg text-foreground mb-8">
              Open <span className="text-accent">Positions</span>
            </h2>
            <p className="text-large text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're actively building our team. Don't see a role that fits? Reach out anyway - we're always looking for exceptional talent.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="heading-sm text-foreground mb-2">Senior Full-Stack Engineer</h3>
                  <p className="text-muted-foreground">Remote • Full-time</p>
                </div>
                <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                  Apply Now
                </Button>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="heading-sm text-foreground mb-2">AI/ML Engineer</h3>
                  <p className="text-muted-foreground">Remote • Full-time</p>
                </div>
                <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                  Apply Now
                </Button>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="heading-sm text-foreground mb-2">Growth Marketing Manager</h3>
                  <p className="text-muted-foreground">Remote • Full-time</p>
                </div>
                <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                  Apply Now
                </Button>
              </div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-premium-md hover:shadow-premium-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="heading-sm text-foreground mb-2">Partnership Lead</h3>
                  <p className="text-muted-foreground">Remote • Full-time</p>
                </div>
                <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;