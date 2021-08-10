import React from "react";
import { Cards } from "../Cards/Cards";
import { SearchBar } from "../SearchBar/SearchBar";

export const App = (): JSX.Element => {
  return (
    <>
      <SearchBar />
      <Cards />
    </>
  );
};
