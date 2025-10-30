export interface Author {
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

export type Blog = {
  title: string;
  image: string;
  author: Author;
  variant?: string;
};

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: Author;
  content: {
    intro: string;
    sections: { country: string; items: string[] }[];
    conclusion: string;
  };
}

// eslint-disable-next-line no-undef
export interface Icon extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  width?: number;
  height?: number;
  colorPrimary?: string;
  colorSecondary?: string;
}

export interface FooterLink {
  href?: string;
  text?: string;
}
