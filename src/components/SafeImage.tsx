import { useState } from 'react';
import { BrandLogo } from './BrandLogo';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
}

export function SafeImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackLabel = 'Banaling Natural Care',
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center bg-stone-100 text-stone-500 p-6 text-center"
      >
        <BrandLogo className="w-8 h-8 mb-3 text-stone-400" />
        <span className="text-xs font-medium tracking-wide text-stone-600">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
