import React, { type FC } from 'react';

// Components
import { Link } from '@/components';

// Libs
import { cn } from '@/lib/utils';

export interface SocialItem {
  href: string;
  label: string;
  icon?: string;
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
    <ul
      className={cn('flex items-center gap-2', containerClassName)}
      aria-label="Social media links"
    >
      {socials.map((social) => (
        <li key={social.href} className="list-none">
          <Link
            href={social.href}
            external
            aria-label={`Visit our ${social.label} profile`}
            classes={cn(
              'flex items-center justify-center p-2 rounded-lg transition-all duration-200',
              'hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
              dark
                ? 'hover:bg-white/10 text-white'
                : 'hover:bg-gray-100 text-gray-600 hover:text-primary',
              linkClassName,
              social.linkClassName,
            )}
          >
            {social.icon ? (
              <img
                src={social.icon}
                alt={social.label}
                width={24}
                height={24}
                className="object-contain"
              />
            ) : (
              <span className="w-6 h-6 block bg-gray-300" />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
