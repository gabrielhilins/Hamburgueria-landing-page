import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionTitle = ({ title, subtitle, className = '' }: SectionTitleProps) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <span className="text-iron-red font-bold uppercase tracking-widest text-sm">{subtitle}</span>
      <h2 className="font-display font-extrabold italic text-5xl text-white mt-2">{title}</h2>
    </div>
  );
};
