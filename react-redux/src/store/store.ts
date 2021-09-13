import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  DetailsAction,
  detailsSlice,
  DetailsState,
} from "./reducers/detailsReducer";
import {
  SearchBarAction,
  searchBarSlice,
  SearchBarState,
} from "./reducers/searchBarReducer";

export const store = configureStore({
  reducer: {
    searchBar: searchBarSlice.reducer,
    details: detailsSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): Dispatch<SearchBarAction | DetailsAction> =>
  useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const searchBarState = (state: RootState): SearchBarState =>
  state.searchBar;

export const detailsState = (state: RootState): DetailsState => state.details;
