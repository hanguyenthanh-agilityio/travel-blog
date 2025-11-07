import React from 'react';

interface LinkProps {
  href: string;
  text?: string;
  label?: string;
  className?: string;
  external?: boolean;
  children?: React.ReactNode;
}

export default function Link({
  href,
  text,
  label,
  className = '',
  external = false,
  children,
}: LinkProps) {
  const target = external ? '_blank' : undefined;
  const rel = external ? 'noopener noreferrer' : undefined;
  const ariaLabel = label || text || '';

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      className={className}
    >
      {children || text}
    </a>
  );
}
