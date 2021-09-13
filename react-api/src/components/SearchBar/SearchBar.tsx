import "./SearchBar.css";
import React, { useState } from "react";
import { Article, getNews, SortBy } from "../../serverRequests/serverRequests";
import { Articles } from "../Articles/Articles";
import { SortBar } from "../SortBar/SortBar";
import { PageBar } from "../PageBar/PageBar";

export const SearchBar = (): JSX.Element => {
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>("relevancy");
  const [page, setPage] = useState<number | string>(1);
  const [pageSize, setPageSize] = useState<number | string>(5);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const result = await getNews(
        searchInput,
        sortBy,
        pageSize as number,
        page as number
      );
      setArticles(result.articles);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const sortHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(e.target.id as SortBy);
  };

  const pageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(e.target.value);
  };

  const pageSizeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageSize(e.target.value);
  };

  return (
    <div className="search-bar">
      <form className="search-bar__form">
        <button
          className="search-bar__button"
          type="submit"
          disabled={isLoading}
          onClick={(e) => submitHandler(e)}
        >
          <svg
            className="search-bar__button-image"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,
              45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			        S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,
              127.317-45.184l145.6,145.6 c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,
              15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z M202.667,
              362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,
              160S290.901,362.669,202.667,362.669z"
                />
              </g>
            </g>
          </svg>
        </button>
        <input
          className="search-bar__input"
          type="text"
          disabled={isLoading}
          value={searchInput}
          onChange={(e) => changeHandler(e)}
        />
      </form>
      <div className="search-bar__bot">
        <SortBar sortBy={sortBy} sortHandler={sortHandler} />
        <PageBar
          page={page as number}
          pageSize={pageSize as number}
          pageHandler={pageHandler}
          pageSizeHandler={pageSizeHandler}
        />
      </div>
      <Articles
        articles={articles}
        isLoading={isLoading}
        query={searchInput}
        sortBy={sortBy}
        page={page}
        pageSize={pageSize}
      />
    </div>
  );
};
