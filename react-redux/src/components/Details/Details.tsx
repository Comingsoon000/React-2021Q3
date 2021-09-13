import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getNews, SortBy } from "../../serverRequests/serverRequests";
import {
  detailsSetArticles,
  detailsStopLoading,
} from "../../store/reducers/detailsReducer";
import {
  detailsState,
  useAppDispatch,
  useAppSelector,
} from "../../store/store";
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

  const dispatch = useAppDispatch();
  const { isLoading, articles } = useAppSelector(detailsState);

  const currentArticle = articles[Number(articleNumber)];

  useEffect(() => {
    try {
      getNews(query, sortBy as SortBy, Number(pageSize), Number(page)).then(
        (res) => {
          dispatch(detailsSetArticles({ articles: res.articles }));
          dispatch(detailsStopLoading());
        }
      );
    } catch (err) {
      console.error(err);
    }
  }, [dispatch, page, pageSize, query, sortBy]);

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
