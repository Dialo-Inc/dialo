
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "What is an AI Voice Agent?",
      answer: "An AI Voice Agent is an intelligent conversational AI system that can interact with customers through voice and text across multiple channels. Our agent is specifically trained on automotive industry data to handle inquiries about sales, service, parts, and scheduling with human-like understanding and responses."
    },
    {
      question: "How does it integrate with my existing systems?",
      answer: "Our AI Voice Agent seamlessly integrates with your dealership's website, phone system, and CRM through secure APIs. The integration process typically takes 24-48 hours with minimal disruption to your operations. Our technical team handles the entire setup process for you."
    },
    {
      question: "Will this replace my human staff?",
      answer: "Absolutely not. Our AI Voice Agent is designed to enhance your team's capabilities, not replace them. It handles routine inquiries and qualifies leads, freeing your staff to focus on high-value interactions like closing deals and providing personalized customer service that requires human expertise."
    },
    {
      question: "What happens after I pre-order?",
      answer: "After pre-ordering, you'll receive immediate confirmation and access to our founding member community. We'll keep you updated on development progress and provide early access to beta features. Once we reach our funding goal, full development begins with your system integration scheduled within 60 days."
    },
    {
      question: "When will the product be ready?",
      answer: "Full product launch is scheduled for Q2 2024, contingent on reaching our $200,000 pre-sale goal. Beta access will be available to founding members 30 days prior to full launch. We provide monthly progress updates and maintain transparent communication throughout development."
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Your Questions, <span className="text-blue-600">Answered</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We understand you might have questions about this innovative technology. 
            Here are the most common questions from dealership decision-makers.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-slate-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-slate-600 mb-6">
              Our team is standing by to answer any additional questions about the AI Voice Agent Platform 
              and how it can transform your dealership's operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@dealership-ai-platform.com" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Email Our Team
              </a>
              <a href="tel:1-800-AI-VOICE" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors">
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
