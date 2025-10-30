export const homePageQuery = `
{
  "heroPost": *[_type == "post" && category == "hero"][0]{
    _id,
    title,
    slug,
    excerpt,
    image{asset->{url}},
    author->{
      name,
      role,
      avatar{asset->{url}},
      date
    }
  },
  "popularPosts": *[_type == "post" && category == "popular"] | order(_createdAt desc)[0..2]{
    _id,
    title,
    slug,
    excerpt,
    image{asset->{url}},
    author->{
      name,
      role,
      avatar{asset->{url}},
      date
    }
  },
  "trendingPosts": *[_type == "post" && category == "trending"] | order(_createdAt desc)[0..5]{
    _id,
    title,
    slug,
    excerpt,
    image{asset->{url}},
    author->{
      name,
      role,
      avatar{asset->{url}},
      date
    }
  }
}
`;
