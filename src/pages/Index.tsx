import { useState, useEffect } from 'react';
import { ArrowDown, Check, Phone, Users, Shield, Clock, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import BenefitsSection from '@/components/BenefitsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import SocialProofSection from '@/components/SocialProofSection';
import PreSaleSection from '@/components/PreSaleSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <HowItWorksSection />
      <SocialProofSection />
      <PreSaleSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
