import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article, getNews, SortBy } from "../../serverRequests/serverRequests";
import "../Articles/Articles.css";

export const Details = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const [sortByParam, pageParam, pageSizeParam, articleParam, ...rest] =
    id.split("+");
  const [, sortBy] = sortByParam.split("=");
  const [, page] = pageParam.split("=");
  const [, pageSize] = pageSizeParam.split("=");
  const [, articleNumber] = articleParam.split("=");
  const [, query] = rest.join("+").split("=");

  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);

  const currentArticle = articles[Number(articleNumber)];

  useEffect(() => {
    try {
      getNews(query, sortBy as SortBy, Number(pageSize), Number(page)).then(
        (res) => {
          setArticles(res.articles);
          setIsLoading(false);
        }
      );
    } catch (err) {
      console.error(err);
    }
  }, [page, pageSize, query, sortBy]);

  return isLoading ? (
    <div className="articles__loading">...Loading</div>
  ) : (
    <div className="articles">
      <div className="article">
        <ul className="article__list">
          <li className="article__title">{currentArticle.title}</li>
          <li className="article__description">{currentArticle.description}</li>
          <li>
            <a href={currentArticle.url}>more information</a>
          </li>
          <div className="article__bot">
            <li className="article__publishedAt">
              {currentArticle.publishedAt}
            </li>
            <li className="article__author">{currentArticle.author}</li>
          </div>
        </ul>
        <img
          className="article__image"
          src={currentArticle.urlToImage}
          alt="article_image"
        />
      </div>
    </div>
  );
};
