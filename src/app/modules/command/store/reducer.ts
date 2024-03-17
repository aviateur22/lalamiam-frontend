import { createReducer, on } from "@ngrx/store";
import { CommandState } from "../models/store/command-state";
import * as CommandAction from "./action"

import { Command } from "../models/command.model";

export const initialState: CommandState = {
  isLoading: false,
  command: null,
  error: ''
}

export const reducers = createReducer(initialState, on(CommandAction.getCommand, (state) => ({...state, isLoading: true})))
