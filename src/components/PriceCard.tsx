import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

interface PriceCardProps {
  title: string;
  price: string;
  yearlyPrice: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  isPremium?: boolean;
  buttonText: string;
  icon: React.ReactNode;
  isYearly: boolean;
  savings?: string;
}

export const PriceCard: React.FC<PriceCardProps> = ({
  title,
  price,
  yearlyPrice,
  period,
  description,
  features,
  isPopular = false,
  isPremium = false,
  buttonText,
  icon,
  isYearly,
  savings
}) => {
  const displayPrice = isYearly ? yearlyPrice : price;
  const displayPeriod = isYearly ? 'year' : period;

  return (
    <div className={`
      relative bg-gradient-to-br from-gray-950 to-black rounded-2xl p-8 
      border transition-all duration-500 hover:scale-105 hover:shadow-2xl
      h-full flex flex-col
      ${isPopular ? 'border-blue-500 shadow-blue-500/25' : 'border-gray-700'}
      ${isPremium ? 'border-purple-500 shadow-purple-500/25' : ''}
      group cursor-pointer
    `}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
            <Crown className="w-4 h-4" />
            Premium
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`
            p-3 rounded-xl transition-colors duration-300
            ${isPopular ? 'bg-blue-500/20 text-blue-400' : ''}
            ${isPremium ? 'bg-purple-500/20 text-purple-400' : ''}
            ${!isPopular && !isPremium ? 'bg-gray-800 text-gray-300' : ''}
            group-hover:scale-110 transition-transform duration-300
          `}>
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold text-white">{displayPrice}</span>
          <span className="text-gray-400 text-lg">/{displayPeriod}</span>
        </div>
        {isYearly && savings && (
          <div className="mt-2">
            <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
              Save {savings}
            </span>
          </div>
        )}
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 group/feature"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className={`
              p-1 rounded-full transition-colors duration-300
              ${isPopular ? 'bg-blue-500' : ''}
              ${isPremium ? 'bg-purple-500' : ''}
              ${!isPopular && !isPremium ? 'bg-green-500' : ''}
            `}>
              <Check className="w-3 h-3 text-white" />
            </div>
            <span className="text-gray-300 group-hover/feature:text-white transition-colors duration-300">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className={`
        w-full py-4 px-6 rounded-xl font-semibold text-white
        transition-all duration-300 transform hover:scale-105
        ${isPopular ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600' : ''}
        ${isPremium ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600' : ''}
        ${!isPopular && !isPremium ? 'bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600' : ''}
        hover:shadow-lg active:scale-95
      `}>
        {buttonText}
      </button>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};