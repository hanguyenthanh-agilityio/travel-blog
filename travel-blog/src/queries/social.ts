export const allSocialsQuery = `
  *[_type == "social"] | order(order asc){
    label,
    href,
    icon { asset->{ url } }
  }
`;

export type SocialResolved = {
  label: string;
  href: string;
  icon?: { asset?: { url?: string } };
};
