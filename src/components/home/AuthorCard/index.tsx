import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface AuthorCardProps {
  name: string;
  role: string;
  avatar: string;
  dark?: boolean;
  className?: string;
}

const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  role,
  avatar,
  dark = false,
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Avatar className="w-8 h-8">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name?.[0]}</AvatarFallback>
      </Avatar>
      <div className={`${dark ? 'text-white' : 'text-gray-900'}`}>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs opacity-70">{role}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
