import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Users } from 'lucide-react';
import { AIVoiceInput } from '@/components/ui/ai-voice-input';

export default function HeroSection() {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative elements - hidden on mobile for cleaner look */}
      <div className="hidden sm:block absolute top-20 right-20 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full"></div>
      <div className="hidden sm:block absolute top-32 right-32 w-2 h-2 sm:w-3 sm:h-3 bg-purple-400 rounded-sm transform rotate-45"></div>
      <div className="hidden sm:block absolute top-40 right-16 w-1 h-6 sm:w-2 sm:h-8 bg-purple-500"></div>
      <div className="hidden sm:block absolute top-48 right-24 w-4 h-1 sm:w-6 sm:h-2 bg-yellow-400"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-4 sm:mb-6 bg-teal-500/20 text-teal-300 border-teal-500/30 text-sm sm:text-base">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Trusted by 50+ Early Adopters
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
              Stop Losing <span className="text-teal-400">70% of Your</span>
              <br className="hidden sm:block" />
              <span className="block sm:inline"> Service Revenue</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl mb-3 sm:mb-4 text-gray-600 font-medium">
              The AI Voice Agent That Transforms Dealership Communication
            </p>

            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Our AI Voice Agent Platform seamlessly integrates to boost sales, enhance CSI, and cut costs. 
              Pre-order now for a <strong className="text-teal-600">lifetime 70% discount</strong> and join the future of automotive communication.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold">
                Secure Your 70% Lifetime Discount Now
              </Button>
              <Button variant="outline" size="lg" className="border-gray-400 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                Watch Demo
              </Button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* AI Dashboard Card with Voice Demo */}
            <div className="relative bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-2xl transform rotate-6 sm:rotate-12 hover:rotate-0 transition-transform duration-300 max-w-sm mx-auto lg:max-w-none">
              <div className="text-white mb-3 sm:mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="text-xs sm:text-sm text-gray-400">AI Voice Agent Live</div>
                </div>
                <div className="text-xs text-gray-500">Dealership Assistant</div>
              </div>

              {/* AI Voice Input Demo */}
              <div className="bg-gray-800 rounded-lg p-4 mb-4 min-h-[200px] flex items-center justify-center">
                <AIVoiceInput 
                  demoMode={false} 
                  visualizerBars={24} 
                  className="text-white" 
                  assistantId="demo-dealership-agent"
                  onStart={() => console.log('Voice demo started')} 
                  onStop={(duration) => console.log('Voice demo ended, duration:', duration)} 
                />
              </div>

              <div className="flex justify-between items-center text-white text-xs sm:text-sm">
                <div>
                  <div className="mb-1">AI Model: GPT-4</div>
                  <div className="text-gray-400 text-xs">Status: Active</div>
                </div>
                <div className="text-right">
                  <div className="mb-1">Accuracy: 99.2%</div>
                  <div className="text-gray-400 text-xs">Response: 0.3s</div>
                </div>
              </div>
            </div>

            {/* Floating decorative elements - smaller on mobile */}
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-purple-400 rounded-lg transform rotate-45"></div>
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-4 h-4 sm:w-6 sm:h-6 bg-yellow-400 rounded-full"></div>
            <div className="hidden sm:block absolute top-1/2 -right-8 w-4 h-12 bg-purple-500"></div>

            {/* Scattered pixels - hidden on mobile */}
            <div className="hidden sm:block absolute top-8 right-8 w-2 h-2 bg-purple-400"></div>
            <div className="hidden sm:block absolute bottom-12 left-8 w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="hidden sm:block absolute top-16 left-12 w-2 h-6 bg-blue-500"></div>
          </div>
        </div>

        {/* Trust indicators - responsive layout */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 lg:gap-12 opacity-60">
            {["OpenAI", "Google AI", "Microsoft", "Meta AI", "Anthropic"].map((company, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gray-400 rounded"></div>
                <span className="text-gray-600 font-medium text-sm sm:text-base">{company}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <ArrowDown className="w-6 h-6 mx-auto text-gray-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}