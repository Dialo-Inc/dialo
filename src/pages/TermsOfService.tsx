import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-3 sm:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: January 5, 2025
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-premium-lg">
            <CardContent className="p-8 lg:p-12 space-y-8">
              
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>
                    By accessing or using Dialo's AI voice agent services, you agree to be bound by these 
                    Terms of Service and our Privacy Policy. If you disagree with any part of these terms, 
                    you may not access or use our services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Dialo provides AI-powered voice agent services specifically designed for automotive 
                    dealerships. Our services include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>24/7 customer communication and support</li>
                    <li>Lead qualification and appointment scheduling</li>
                    <li>Integration with dealership management systems</li>
                    <li>Real-time conversation analytics and reporting</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Pre-Sale Terms</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    Our pre-sale offering provides early access to Dialo services at discounted rates:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pre-sale customers receive lifetime 70% discount on monthly subscription fees</li>
                    <li>Implementation begins after funding goal is reached</li>
                    <li>30-day money-back guarantee from service activation date</li>
                    <li>Priority support and feature development input</li>
                    <li>Limited to first 20 customers for personalized onboarding</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. User Responsibilities</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <p>You agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use the service in compliance with applicable laws and regulations</li>
                    <li>Not attempt to reverse engineer or interfere with our services</li>
                    <li>Respect intellectual property rights</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Payment and Billing</h2>
                <div className="text-muted-foreground leading-relaxed space-y-4">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pre-sale pricing is locked in for the lifetime of your subscription</li>
                    <li>Monthly fees are billed in advance</li>
                    <li>All payments are processed securely through our payment partners</li>
                    <li>Refunds are available within 30 days of service activation</li>
                    <li>Price changes do not affect pre-sale customers</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Service Availability</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>
                    We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. 
                    We provide advance notice of scheduled maintenance and work to minimize any 
                    service disruptions.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>
                    Dialo retains all rights to our AI technology, software, and proprietary systems. 
                    You retain ownership of your customer data and dealership information. We may 
                    use anonymized conversation data to improve our AI models.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>
                    Dialo's liability is limited to the amount you paid for the service in the 12 months 
                    preceding the claim. We are not liable for indirect, incidental, or consequential 
                    damages arising from use of our services.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Termination</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>
                    Either party may terminate this agreement with 30 days' written notice. Upon 
                    termination, you will have 90 days to export your data before it is permanently 
                    deleted from our systems.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
                <div className="text-muted-foreground leading-relaxed">
                  <p>
                    For questions about these Terms of Service, contact us at:
                  </p>
                  <div className="mt-4 space-y-2">
                    <p>Email: <a href="mailto:legal@usedialo.com" className="text-accent hover:underline">legal@usedialo.com</a></p>
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

export default TermsOfService;