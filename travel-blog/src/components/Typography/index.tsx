import React from 'react';
import { cn } from '@/lib/utils';

type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type TypographyAs = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

interface TypographyProps {
  as?: TypographyAs;
  size?: TypographySize;
  className?: string;
  children: React.ReactNode;
}

const sizeClasses: Record<TypographySize, string> = {
  xs: 'text-xs opacity-70',
  sm: 'text-sm font-medium',
  md: 'text-lg font-bold',
  lg: 'text-xl md:text-2xl font-bold',
  xl: 'text-2xl md:text-3xl font-extrabold',
};

const Typography: React.FC<TypographyProps> = ({
  as: Tag = 'h2',
  size = 'md',
  className,
  children,
  ...props
}) => {
  return (
    <Tag
      className={cn(
        sizeClasses[size],
        'text-primary leading-snug tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Typography;
