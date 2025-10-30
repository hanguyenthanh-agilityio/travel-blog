export const headerQuery = `
  *[_type == "header"][0]{
    logo { asset->{url} },
    menuItems[] {
      text,
      href
    },
    otherPages[] {
      text,
      href
    }
  }
`;
