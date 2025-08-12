import Header from '@/components/Header';
import ParagonHondaHeroSection from '@/components/ParagonHondaHeroSection';
import ParagonHondaProblemSection from '@/components/ParagonHondaProblemSection';
import ParagonHondaSolutionSection from '@/components/ParagonHondaSolutionSection';
import ParagonHondaBenefitsSection from '@/components/ParagonHondaBenefitsSection';
import ParagonHondaHowItWorksSection from '@/components/ParagonHondaHowItWorksSection';
import ParagonHondaSocialProofSection from '@/components/ParagonHondaSocialProofSection';
import ParagonHondaPreSaleSection from '@/components/ParagonHondaPreSaleSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const ParagonHonda = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ParagonHondaHeroSection />
      <ParagonHondaProblemSection />
      <ParagonHondaSolutionSection />
      <ParagonHondaBenefitsSection />
      <ParagonHondaHowItWorksSection />
      <ParagonHondaSocialProofSection />
      <ParagonHondaPreSaleSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default ParagonHonda;