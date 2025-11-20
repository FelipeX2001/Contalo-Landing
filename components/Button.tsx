import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  icon,
  ...props 
}) => {
  
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A0300]";
  
  const variants = {
    primary: "bg-contalo-primary text-white hover:bg-orange-600 shadow-[0_0_20px_-5px_rgba(252,85,1,0.6)] hover:shadow-[0_0_30px_-5px_rgba(252,85,1,0.8)] focus:ring-contalo-primary",
    secondary: "bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20 focus:ring-white",
    outline: "bg-transparent border-2 border-contalo-primary text-contalo-primary hover:bg-contalo-primary hover:text-white"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};