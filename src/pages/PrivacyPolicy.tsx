import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-3 sm:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: January 5, 2025
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-premium-lg">
            <CardContent className="p-8 lg:p-12 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    We collect information you provide directly to us, such as when you create an account, 
                    use our AI voice services, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Dealership information and business details</li>
                    <li>Voice recordings and conversation transcripts (when using our AI services)</li>
                    <li>Payment and billing information</li>
                    <li>Technical data (IP address, browser type, device information)</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide, maintain, and improve our AI voice services</li>
                    <li>Process transactions and send related information</li>
                    <li>Train and optimize our AI models (using anonymized data)</li>
                    <li>Send technical notices, updates, and support messages</li>
                    <li>Respond to your comments, questions, and requests</li>
                    <li>Comply with legal obligations and protect our rights</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Information Sharing and Disclosure</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties 
                    without your consent, except as described in this policy:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>With service providers who assist in our operations</li>
                    <li>To comply with legal obligations or law enforcement requests</li>
                    <li>To protect the rights, property, or safety of Dialo, our users, or others</li>
                    <li>In connection with a merger, acquisition, or asset sale</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    We implement industry-standard security measures to protect your information:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>End-to-end encryption for all voice communications</li>
                    <li>SOC 2 Type II compliance</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Access controls and employee training</li>
                    <li>Secure data centers with 24/7 monitoring</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Retention</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>
                    We retain your information for as long as necessary to provide our services and fulfill 
                    the purposes outlined in this policy. Voice recordings are automatically deleted after 
                    30 days unless you explicitly request longer retention for training purposes.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>You have the right to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Access, update, or delete your personal information</li>
                    <li>Request a copy of your data</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request deletion of voice recordings</li>
                    <li>File a complaint with supervisory authorities</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>
                    If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;