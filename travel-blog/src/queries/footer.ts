export const footerQuery = `
*[_type == "footer"][0]{
  contactItems[]{
    label,
    value
  },
  bottomLinks[]{
    text,
    href
  },
  socials[]->{
    label,
    href,
    "icon": icon.asset->url
  }
}
`;
