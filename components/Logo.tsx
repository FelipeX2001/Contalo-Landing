import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <img 
      src="https://i.postimg.cc/1Rn70q4X/contalo-icono-blanco-(1).png" 
      alt="Contalo Logo" 
      className={`${className} object-contain`}
    />
  );
};