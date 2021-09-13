import React from "react";
import { Link } from "react-router-dom";
import { Article, SortBy } from "../../serverRequests/serverRequests";
import "./Articles.css";

interface ArticlesProps {
  articles: Article[];
  isLoading: boolean;
  query: string;
  sortBy: SortBy;
  page: string | number;
  pageSize: string | number;
}

export const Articles = ({
  articles,
  isLoading,
  query,
  sortBy,
  page,
  pageSize,
}: ArticlesProps): JSX.Element => {
  return isLoading ? (
    <div className="articles__loading">...Loading</div>
  ) : (
    <div className="articles">
      {articles.map((item, index) => {
        const details = `/details/sortBy=${sortBy}+page=${page}+pageSize=${pageSize}+article=${index}+query=${query}`;
        return (
          <div className="article" key={item.description}>
            <ul className="article__list">
              <li className="article__title">{item.title}</li>
              <li className="article__description">{item.description}</li>
              <li>
                <Link to={details}>details</Link>
              </li>
              <div className="article__bot">
                <li className="article__publishedAt">{item.publishedAt}</li>
                <li className="article__author">{item.author}</li>
              </div>
            </ul>
            <img
              className="article__image"
              src={item.urlToImage}
              alt="article_image"
            />
          </div>
        );
      })}
    </div>
  );
};
