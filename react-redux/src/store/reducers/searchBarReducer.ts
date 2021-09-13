import { createSlice } from "@reduxjs/toolkit";
import { Article, SortBy } from "../../serverRequests/serverRequests";

export interface SearchBarState {
  isLoading: boolean;
  searchInput: string;
  articles: Article[];
  sortBy: SortBy;
  page: string | number;
  pageSize: string | number;
}

export interface SearchBarAction {
  type: string;
  payload: {
    searchInput?: string;
    articles?: Article[];
    sortBy?: SortBy;
    page?: string | number;
    pageSize?: string | number;
  };
}

const initialState: SearchBarState = {
  isLoading: false,
  searchInput: "",
  articles: [],
  sortBy: "relevancy",
  page: 1,
  pageSize: 5,
};

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    searchBarStartLoading: (state) => {
      state.isLoading = true;
    },
    searchBarStopLoading: (state) => {
      state.isLoading = false;
    },
    searchBarSetSearchInput: (state, action: SearchBarAction) => {
      state.searchInput = action.payload.searchInput;
    },
    searchBarSetSortBy: (state, action: SearchBarAction) => {
      state.sortBy = action.payload.sortBy;
    },
    searchBarSetPage: (state, action: SearchBarAction) => {
      state.page = action.payload.page;
    },
    searchBarSetPageSize: (state, action: SearchBarAction) => {
      state.pageSize = action.payload.pageSize;
    },
    searchBarSetArticles: (state, action: SearchBarAction) => {
      state.articles = action.payload.articles;
    },
  },
});

export const {
  searchBarStartLoading,
  searchBarStopLoading,
  searchBarSetSearchInput,
  searchBarSetSortBy,
  searchBarSetPage,
  searchBarSetPageSize,
  searchBarSetArticles,
} = searchBarSlice.actions;
