import React from 'react';

interface LinkProps {
  href: string;
  label?: string;
  text?: string;
  classes?: string;
  external?: boolean;
  spanClass?: string;
  children?: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({
  href,
  label,
  text,
  classes = '',
  spanClass = '',
  external = false,
  children,
}) => {
  const target = external ? '_blank' : '_self';
  const rel = external ? 'noopener noreferrer' : undefined;

  return (
    <a
      href={href}
      aria-label={label}
      className={classes}
      target={target}
      rel={rel}
    >
      {children}
      {text && <span className={`ml-1 ${spanClass}`}>{text}</span>}
    </a>
  );
};

export default Link;
