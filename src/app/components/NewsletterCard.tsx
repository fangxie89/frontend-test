'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Newsletter } from '../types';

const FallbackImage = ({ title }: { title: string }) => (
  <div className="w-full h-[150px] bg-gray-300 flex items-center justify-center">
    <h3 className="text-xl text-white font-semibold px-4 text-center" style={{ textShadow: '1px 1px 1px rgba(0, 0, 0, 0.3)' }}>
      {title}
    </h3>
  </div>
);

interface NewsletterCardProps {
  newsletter: Newsletter;
  hasAccess: boolean;
}

const NewsletterCard: React.FC<NewsletterCardProps> = ({
  newsletter,
  hasAccess
}) => {
  const [imageError, setImageError] = useState(false);

  const getButtonVariant = () => {
    if (!hasAccess) return 'btn-secondary';
  
    return 'btn-primary';
  };

  const getButtonText = () => {
    return hasAccess ? "S'inscrire" : "S'abonner";
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative pb-24">
      {imageError ? (
        <FallbackImage title={newsletter.title} />
      ) : (
        <div className="relative w-full h-[150px]">
          <Image 
            src={newsletter.image} 
            alt={newsletter.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        </div>
      )}
      <div className="p-6">
        <p className="text-gray-600 text-sm">{newsletter.description}</p>
      </div>
      <div className="absolute bottom-6 left-0 w-full flex justify-center">
        <button
          className={getButtonVariant()}
        >
          {getButtonText()}
        </button>
      </div>
    </div>
  );
};

export default NewsletterCard; 