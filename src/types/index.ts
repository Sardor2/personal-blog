export interface PostFrontMatter {
  description: string;
  tags: string[];
  pubDate: string;
  title: string;
  image: {
    url: string;
    alt: string;
  };
  slug: string;
}
