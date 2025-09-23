const API_URL =
  'https://68cbe88d716562cf50758d1c.mockapi.io/api/travel-blog/posts';

export async function fetchPosts() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function fetchPostById(id: string) {
  const posts = await fetchPosts();
  return posts.find((p: { id: string }) => p.id === id);
}

export async function getPopularPosts() {
  const posts = await fetchPosts();
  return posts
    .filter((p: { category: string }) => p.category === 'popular')
    .slice(0, 3);
}

export async function getTrendingPosts() {
  const posts = await fetchPosts();
  return posts.filter((p: { category: string }) => p.category === 'trending');
}
