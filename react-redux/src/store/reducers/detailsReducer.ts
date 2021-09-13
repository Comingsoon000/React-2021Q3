import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../../serverRequests/serverRequests";

export interface DetailsState {
  isLoading: boolean;
  articles: Article[];
}

export interface DetailsAction {
  type: string;
  payload: {
    articles: Article[];
  };
}

const initialState: DetailsState = {
  isLoading: true,
  articles: [],
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    detailsStartLoading: (state) => {
      state.isLoading = true;
    },
    detailsStopLoading: (state) => {
      state.isLoading = false;
    },
    detailsSetArticles: (state, action: DetailsAction) => {
      state.articles = action.payload.articles;
    },
  },
});

export const { detailsStartLoading, detailsStopLoading, detailsSetArticles } =
  detailsSlice.actions;
