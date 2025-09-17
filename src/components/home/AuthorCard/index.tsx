import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AuthorCardProps {
  name: string;
  role: string;
  avatar: string;
  date: Date | string;
  dark?: boolean;
  className?: string;
  layout?: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  role,
  avatar,
  date,
  dark = false,
  className = '',
  layout = 'card',
}) => {
  return (
    <div
      className={`flex ${layout === 'hero' ? 'flex-col md:flex-row md:justify-between md:items-center' : 'flex-row items-center justify-between'} gap-4 md:gap-0`}
    >
      {/* Create date */}
      <p
        className={`${layout === 'hero' ? 'order-1' : 'order-2'} text-sm ${dark ? 'text-white' : 'text-date'}`}
      >
        {date instanceof Date ? date.toLocaleDateString() : date}
      </p>

      {/* Author info */}
      <div
        className={`flex items-center gap-3 ${className} ${layout === 'hero' ? 'order-2' : 'order-1'}`}
      >
        <Avatar className="w-10 h-10">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name?.[0]}</AvatarFallback>
        </Avatar>
        <div
          className={`${dark ? 'text-white' : 'text-primary'} ${layout === 'hero' ? 'flex flex-col gap-1.5' : ''}`}
        >
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs opacity-70">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
