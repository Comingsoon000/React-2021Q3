export interface Article {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export type SortBy = "relevancy" | "popularity" | "publishedAt";

const url = "https://newsapi.org/v2/everything?";
const apiKey = "95372cb6caed4f47ba882d44281621ad";

export const getNews = async (
  query: string,
  sortBy: SortBy,
  pageSize: number,
  page: number
): Promise<{ articles: Article[]; status: string; totalResults: number }> => {
  const response = await fetch(
    `${url}q=${query}&apiKey=${apiKey}&sortBy=${sortBy}&pageSize=${pageSize}&page=${page}`
  );
  return response.json();
};
