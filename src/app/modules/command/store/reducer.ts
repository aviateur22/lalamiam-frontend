import { createReducer, on } from "@ngrx/store";
import { CommandState } from "../models/store/command-state";
import * as CommandAction from "./action"

export const initialState: CommandState = {
  isLoading: false,
  command: null,
  error: ''
}

export const reducers = createReducer(
  initialState,
  on(CommandAction.getCommandInit, (state)=>({...state, isLoading: true})),
  on(CommandAction.getCommand, (state) => ({...state, isLoading: true})),
  on(CommandAction.getCommandSuccess, (state, {command})=>({...state, command, isLoading: false})),
  on(CommandAction.getCommandError, (state, {error})=>({...state, isLoading: false, error: error}))
  );
