import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AuthorCardProps {
  name: string;
  role: string;
  avatar: string;
  date: Date | string;
  dark?: boolean;
  className?: string;
  classContainer?: string;
  classAvatar?: string;
  layout?: string;
  isBlogDetail?: boolean;
  isRole?: boolean;
}

const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  role,
  avatar,
  date,
  dark = false,
  className = '',
  classContainer = '',
  classAvatar = '',
  layout = 'card',
  isBlogDetail = false,
  isRole = false,
}) => {
  return (
    <div
      className={`flex ${layout === 'hero' ? 'flex-col md:flex-row md:justify-between md:items-center' : 'flex-row items-center justify-between'} gap-4 md:gap-0 ${classContainer}`}
    >
      {/* Create date */}
      {!isBlogDetail && (
        <p
          className={`${layout === 'hero' ? 'order-1' : 'order-2'} text-sm ${dark ? 'text-white' : 'text-gray-500'}`}
        >
          {date instanceof Date ? date.toLocaleDateString() : date}
        </p>
      )}

      {/* Author info */}
      <div
        className={`flex items-center gap-3 ${className} ${layout === 'hero' ? 'order-2' : 'order-1'}`}
      >
        <Avatar className={classAvatar}>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name?.[0]}</AvatarFallback>
        </Avatar>
        <div
          className={`${dark ? 'text-white' : 'text-primary'} ${layout === 'hero' ? 'flex flex-col gap-1.5' : 'flex flex-col items-center'}`}
        >
          <p className="text-sm font-medium">{name}</p>
          {isRole && <p className="text-xs opacity-70">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
