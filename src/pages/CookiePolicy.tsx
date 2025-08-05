import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-3 sm:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Cookie Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: January 5, 2025
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-premium-lg">
            <CardContent className="p-8 lg:p-12 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. What Are Cookies</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>
                    Cookies are small text files that are placed on your device when you visit our website. 
                    They help us provide you with a better experience by remembering your preferences and 
                    understanding how you use our services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>
                <div className="text-muted-foreground leading-relaxed space-y-6">
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Essential Cookies</h3>
                    <p className="mb-2">These cookies are necessary for our website to function properly:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Authentication and session management</li>
                      <li>Security and fraud prevention</li>
                      <li>Load balancing and performance optimization</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Analytics Cookies</h3>
                    <p className="mb-2">These cookies help us understand how visitors interact with our website:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Page views and user behavior tracking</li>
                      <li>Performance monitoring and optimization</li>
                      <li>Conversion tracking for marketing campaigns</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Functional Cookies</h3>
                    <p className="mb-2">These cookies enhance functionality and personalization:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Language and region preferences</li>
                      <li>User interface customization</li>
                      <li>Remember form inputs and preferences</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">Marketing Cookies</h3>
                    <p className="mb-2">These cookies are used for targeted advertising and marketing:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Track visits across websites for ad targeting</li>
                      <li>Measure advertising campaign effectiveness</li>
                      <li>Provide relevant advertisements</li>
                    </ul>
                  </div>

                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Third-Party Cookies</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>We may use third-party services that place cookies on your device:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                    <li><strong>Stripe:</strong> For secure payment processing</li>
                    <li><strong>Supabase:</strong> For user authentication and data management</li>
                    <li><strong>Social Media Platforms:</strong> For social sharing and authentication</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Managing Your Cookie Preferences</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>You have several options for managing cookies:</p>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Browser Settings</h3>
                    <p>Most browsers allow you to:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>View and delete cookies</li>
                      <li>Block cookies from specific websites</li>
                      <li>Block all cookies (may affect website functionality)</li>
                      <li>Set preferences for third-party cookies</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Opt-Out Tools</h3>
                    <p>You can opt out of certain tracking cookies using:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Google Analytics Opt-out Browser Add-on</li>
                      <li>Network Advertising Initiative (NAI) opt-out tools</li>
                      <li>Digital Advertising Alliance (DAA) opt-out tools</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookie Retention</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>Different types of cookies have different retention periods:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                    <li><strong>Persistent Cookies:</strong> Remain for a set period (typically 1-24 months)</li>
                    <li><strong>Essential Cookies:</strong> May persist longer for security purposes</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Updates to This Policy</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>
                    We may update this Cookie Policy from time to time to reflect changes in our practices 
                    or for other operational, legal, or regulatory reasons. We will notify you of any 
                    material changes by posting the updated policy on our website.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>
                    If you have any questions about our use of cookies, please contact us at:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p>Email: <a href="mailto:privacy@usedialo.com" className="text-accent hover:underline">privacy@usedialo.com</a></p>
                    <p>Address: Dialo, Inc., San Francisco, CA</p>
                  </div>
                </div>
              </section>

            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CookiePolicy;