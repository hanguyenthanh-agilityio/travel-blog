export const postDetailQuery = `
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    excerpt,
    "slug": slug.current,
    image { asset->{url, metadata{dimensions}} },
    category,
    author->{
      name,
      role,
      avatar { asset->{url} }
    },
    content
  }
`;

export const postSlugsQuery = `
  *[_type == "post" && defined(slug.current)]{
    "slug": slug.current
  }
`;

export const socialsQuery = `
*[_type == "social"] | order(order asc) {
  label,
  href,
  icon {
    asset->{
      url
    }
  }
}
`;
