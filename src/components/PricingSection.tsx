import React from 'react';
import { useState } from 'react';
import { PriceCard } from './PriceCard';
import { Zap, Star, Crown, Rocket } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      title: 'Free',
      price: '$0',
      yearlyPrice: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '1 project',
        '1GB storage',
        'Basic templates',
        'Community support',
        'Basic analytics'
      ],
      buttonText: 'Get Started Free',
      icon: <Zap className="w-6 h-6" />,
      savings: undefined
    },
    {
      title: 'Starter',
      price: '$9',
      yearlyPrice: '$7',
      period: 'month',
      description: 'Perfect for individuals',
      features: [
        'Up to 5 projects',
        '10GB storage',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ],
      buttonText: 'Get Started',
      icon: <Zap className="w-6 h-6" />,
      savings: '$24'
    },
    {
      title: 'Professional',
      price: '$29',
      yearlyPrice: '$24',
      period: 'month',
      description: 'Best for growing teams',
      features: [
        'Unlimited projects',
        '100GB storage',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'Custom integrations',
        'API access'
      ],
      isPopular: true,
      buttonText: 'Start Free Trial',
      icon: <Star className="w-6 h-6" />,
      savings: '$60'
    },
    {
      title: 'Enterprise',
      price: '$99',
      yearlyPrice: '$79',
      period: 'month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Unlimited storage',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom development',
        'SLA guarantee',
        'On-premise deployment'
      ],
      isPremium: true,
      buttonText: 'Contact Sales',
      icon: <Crown className="w-6 h-6" />,
      savings: '$240'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-lg font-semibold mb-4">
            <Rocket className="w-6 h-6 text-blue-500" />
            Pricing Plans
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Unlock the full potential of our platform with flexible pricing options 
            designed to scale with your business needs.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8">
            <div className="bg-gray-800 p-1 rounded-xl border border-gray-700">
              <div className="flex items-center">
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    !isYearly 
                      ? 'bg-white text-gray-900 shadow-lg' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 relative ${
                    isYearly 
                      ? 'bg-white text-gray-900 shadow-lg' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Yearly
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Price Cards Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <PriceCard {...plan} isYearly={isYearly} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need a custom solution?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            We offer tailored pricing for enterprises with specific requirements. 
            Contact our sales team to discuss your unique needs.
          </p>
          <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
};