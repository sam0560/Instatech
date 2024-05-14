export type Article = {
    source: {id: string; name: string}
    urlToImage: string
    url: string
    title: string
    author: string
    publishedAt: string
    content: string
    description: string
}

export type Blogs = {
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    slug: string;
    cover_image: string;
    social_image: string;
    user: { name: string; profile_image: string };
  }