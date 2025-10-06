import React from 'react';
import Link from '@/components/ui/link';
import { cn } from '@/lib/utils';
import type { Icon as IconProps } from '@/types/blog';
import type { FC } from 'react';

export interface SocialItem {
  href: string;
  label: string;
  Icon: FC<IconProps>;
  linkClassName?: string;
}

interface Props {
  socials: SocialItem[];
  containerClassName?: string;
  linkClassName?: string;
  dark?: boolean;
}

const SocialIcons: FC<Props> = ({
  socials,
  containerClassName,
  linkClassName,
  dark = false,
}) => {
  return (
    <div
      className={cn('flex items-center', containerClassName)}
      role="list"
      aria-label="Social media links"
    >
      {socials.map((social) => (
        <div key={social.href} role="listitem" className="md:mr-4">
          <Link
            href={social.href}
            label={social.label}
            external
            classes={cn(
              'flex items-center justify-center p-2 rounded-lg transition-all duration-200',
              'hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              dark
                ? 'hover:bg-white/10 text-white'
                : 'hover:bg-gray-100 text-gray-600 hover:text-primary',
              linkClassName,
              social.linkClassName,
            )}
            aria-label={`Visit our ${social.label} page`}
          >
            <social.Icon width={24} height={24} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialIcons;
