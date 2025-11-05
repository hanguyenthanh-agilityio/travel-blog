import React, { type ReactNode } from 'react';

interface HeadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  as?: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}

const Heading = ({ size = 'md', as: Tag = 'h2', children }: HeadingProps) => {
  let classes = 'font-bold ';
  switch (size) {
    case 'sm':
      classes += 'text-lg';
      break;
    case 'md':
      classes += 'text-xl';
      break;
    case 'lg':
      classes += 'text-3xl';
      break;
    case 'xl':
      classes += 'text-4xl';
      break;
  }
  return <Tag className={classes}>{children}</Tag>;
};

export default Heading;
