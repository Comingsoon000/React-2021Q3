import React from "react";
import { Article } from "../../serverRequests/serverRequests";
import "./Articles.css";

interface ArticlesProps {
  articles: Article[];
  isLoading: boolean;
}

export const Articles = ({
  articles,
  isLoading,
}: ArticlesProps): JSX.Element => {
  return isLoading ? (
    <div className="articles__loading">...Loading</div>
  ) : (
    <div className="articles">
      {articles.map((item) => {
        return (
          <div className="article" key={item.description}>
            <ul className="article__list">
              <li className="article__title">{item.title}</li>
              <li className="article__description">{item.description}</li>
              <li>
                <a href={item.url}>Read more...</a>
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
