import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/models/store/app-state";

export const seletcFeature = (state: AppState) => state.command;

export const isLoadingSelector = createSelector(seletcFeature, (state)=>state.isLoading);
export const commandSelector = createSelector(seletcFeature, (state)=>state.command);
