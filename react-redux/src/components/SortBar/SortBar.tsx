import React from "react";
import "./SortBar.css";
import { SortBy } from "../../serverRequests/serverRequests";

interface SortBarProps {
  sortBy: SortBy;
  sortHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SortBar = ({ sortBy, sortHandler }: SortBarProps): JSX.Element => {
  return (
    <div className="sort-bar__sort-buttons">
      <label htmlFor="relevancy">
        <input
          type="radio"
          id="relevancy"
          name="sort"
          checked={sortBy === "relevancy"}
          onChange={(e) => sortHandler(e)}
        />
        Relevancy
      </label>
      <label htmlFor="popularity">
        <input
          type="radio"
          id="popularity"
          name="sort"
          checked={sortBy === "popularity"}
          onChange={(e) => sortHandler(e)}
        />
        Popularity
      </label>
      <label htmlFor="publishedAt">
        <input
          type="radio"
          id="publishedAt"
          name="sort"
          checked={sortBy === "publishedAt"}
          onChange={(e) => sortHandler(e)}
        />
        Published At
      </label>
    </div>
  );
};
