export const headerQuery = `
  *[_type == "header"][0]{
  logo {
    image {
      asset->{url}
    },
    text,
    link
  },
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
