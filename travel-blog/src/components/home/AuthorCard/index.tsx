import React from 'react';

// Components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Libs
import type { Author } from '@/lib/schema';
import { cn } from '@/lib/utils';

export interface AuthorCardProps extends Author {
  dark?: boolean;
  className?: string;
  classContainer?: string;
  classAvatar?: string;
  layout?: 'card' | 'hero';
  isBlogDetail?: boolean;
  isRole?: boolean;
}

const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  role,
  avatar,
  date,
  dark = false,
  className,
  classContainer,
  classAvatar,
  layout = 'card',
  isBlogDetail = false,
  isRole = false,
}) => {
  return (
    <div
      className={cn(
        'flex gap-4 md:gap-0',
        layout === 'hero'
          ? 'flex-col md:flex-row md:justify-between md:items-center'
          : 'flex-row items-center justify-between',
        classContainer,
      )}
    >
      {/* Create date */}
      {!isBlogDetail && (
        <p
          className={cn(
            'text-sm',
            layout === 'hero' ? 'order-1' : 'order-2',
            dark ? 'text-white' : 'text-gray-500',
          )}
        >
          {date instanceof Date ? date.toLocaleDateString() : date}
        </p>
      )}

      {/* Author info */}
      <div
        className={cn(
          'flex items-center gap-3',
          layout === 'hero' ? 'order-2' : 'order-1',
          className,
        )}
      >
        <Avatar className={classAvatar}>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name?.[0]}</AvatarFallback>
        </Avatar>

        <div
          className={cn(
            layout === 'hero'
              ? 'flex flex-col gap-1.5'
              : 'flex flex-col items-center',
            dark ? 'text-white' : 'text-primary',
          )}
        >
          <p className="text-sm font-medium">{name}</p>
          {isRole && <p className="text-xs opacity-70">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
