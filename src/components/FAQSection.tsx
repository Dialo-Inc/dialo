
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is Dialo Voice Agent?",
      answer: "Dialo is an embeddable AI voice agent purpose-built for modern auto dealerships. It integrates directly with your dealership's website, phone system, DMS (Dealer Management System), and CRM. It enables customized-scalability communication with your customers handling both inbound and outbound calls with human-level natural conversation. Think of it as your 24/7 customer communication assistant, tailored to the car-buying journey."
    },
    {
      question: "How does it integrate with my existing systems?",
      answer: "Dialo seamlessly integrates with your Dealership Management System (DMS) and CRM, adding intelligence to your data. This enables more personalized and contextual conversations with every lead or customer without the need for manual input or data duplication."
    },
    {
      question: "Will this replace my human staff?",
      answer: "No, Dialo is built to assist your team not replace them. It handles repetitive and time-consuming conversations, freeing your staff to focus on high-value tasks."
    },
    {
      question: "What happens after I pre-order?",
      answer: "After pre-ordering, you'll receive immediate confirmation and access to our founding member community. We'll keep you updated on your pre-order access and onboarding steps and provide early access to beta features. Once we reach our funding goal, full development begins with your system integration scheduled within 60 days."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Pre-sale customers receive priority support including dedicated onboarding, 24/7 technical assistance, and direct access to our development team. We also provide comprehensive training for your staff and ongoing optimization to ensure maximum ROI."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we employ enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and regular security audits. Your customer data never leaves your secure environment, and all communications are encrypted and logged for your records."
    },
    {
      question: "Can I customize the AI agent for my dealership?",
      answer: "Absolutely. The AI agent can be customized with your dealership's specific information, branding, and processes. Founding members receive additional customization options and priority feature requests to ensure the solution perfectly fits their unique needs."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5" />
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-foreground mb-8">
            Your Questions, <span className="text-accent">Answered</span>
          </h2>
          <p className="text-large text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We understand you might have questions about this innovative technology. 
            Here are the most common questions from dealership decision-makers.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-8 shadow-premium-sm hover:shadow-premium-md transition-all duration-300">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent py-8 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8 text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-20">
          <div className="bg-secondary/50 backdrop-blur-sm rounded-3xl p-12 max-w-3xl mx-auto border border-border/50 shadow-premium-lg">
            <h3 className="heading-sm text-foreground mb-6">
              Still Have Questions?
            </h3>
            <p className="text-large text-muted-foreground mb-8 leading-relaxed">
              Our team is standing by to answer any additional questions about Dialo 
              and how it can transform your dealership's operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@usedialo.com" className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground rounded-2xl hover:bg-accent-hover transition-all duration-300 font-semibold text-lg shadow-premium-sm hover:shadow-premium-md hover:scale-105">
                Email Our Team
              </a>
              <a href="tel:1-800-AI-VOICE" className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground rounded-2xl hover:bg-secondary transition-all duration-300 font-semibold text-lg shadow-premium-sm hover:shadow-premium-md hover:scale-105">
                Call: 1-800-AI-VOICE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
