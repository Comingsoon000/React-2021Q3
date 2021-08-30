import React from "react";
import "./PageBar.css";

interface PageBarProps {
  page: number;
  pageSize: number;
  pageHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  pageSizeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PageBar = ({
  page,
  pageSize,
  pageHandler,
  pageSizeHandler,
}: PageBarProps): JSX.Element => {
  return (
    <div className="page-bar__buttons">
      <label htmlFor="page">
        Current Page
        <input
          className="page-bar__page"
          type="number"
          id="page"
          value={page}
          onChange={(e) => pageHandler(e)}
        />
      </label>
      <label htmlFor="pageSize">
        Page Limit
        <input
          className="page-bar__pageSize"
          type="number"
          id="pageSize"
          value={pageSize}
          onChange={(e) => pageSizeHandler(e)}
        />
      </label>
    </div>
  );
};
