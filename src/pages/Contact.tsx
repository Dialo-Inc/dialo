import { Mic, Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';

const Contact = () => {
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
              <a href="/blog" className="text-muted-foreground hover:text-accent transition-colors">Blog</a>
              <a href="/contact" className="text-accent font-medium">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="heading-xl text-foreground mb-8">
            Get in <span className="text-accent">Touch</span>
          </h1>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Have a question or want to partner with us? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-premium-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare className="w-6 h-6 text-accent" />
                  <h2 className="heading-sm text-foreground">Send us a message</h2>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your dealership and how we can help..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent-hover text-accent-foreground font-semibold py-3 rounded-xl shadow-premium-sm hover:shadow-premium-md transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="heading-sm text-foreground mb-8">
                  Other ways to <span className="text-accent">connect</span>
                </h2>
              </div>
              
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-premium-md hover:shadow-premium-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-premium-sm">
                      <Mail className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Support</h3>
                      <p className="text-muted-foreground">Get help with your account</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:support@dialo.ai" 
                    className="text-accent hover:text-accent-hover transition-colors font-medium"
                  >
                    support@dialo.ai
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-premium-md hover:shadow-premium-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-2xl flex items-center justify-center shadow-premium-sm">
                      <MessageSquare className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Sales Inquiries</h3>
                      <p className="text-muted-foreground">Learn about our solutions</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:sales@dialo.ai" 
                    className="text-accent hover:text-accent-hover transition-colors font-medium"
                  >
                    sales@dialo.ai
                  </a>
                </CardContent>
              </Card>
              
              <div className="bg-gradient-accent rounded-3xl p-8 text-accent-foreground shadow-premium-lg">
                <h3 className="heading-sm mb-4">Partnership Opportunities</h3>
                <p className="text-lg opacity-90 mb-6 leading-relaxed">
                  Interested in integrating Dialo into your platform or becoming a reseller partner?
                </p>
                <a 
                  href="mailto:partnerships@dialo.ai" 
                  className="text-accent-foreground/90 hover:text-accent-foreground transition-colors font-medium underline"
                >
                  partnerships@dialo.ai
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;