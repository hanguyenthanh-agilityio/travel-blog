export type Author = {
  name: string;
  role: string;
  avatar: string;
  date: Date | string;
  dark?: boolean;
  className?: string;
  layout?: string;
};

export type Blog = {
  title: string;
  image: string;
  author: Author;
  variant?: string;
};
