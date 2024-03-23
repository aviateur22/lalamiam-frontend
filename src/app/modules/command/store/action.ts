import { createAction, props } from "@ngrx/store";
import { Command } from "../models/command.model";

export const getCommandInit = createAction('[Command] Get Command Init');
export const getCommand = createAction('[Command] Get Command', props<{storeId: string, commandId: string}>());
export const getCommandSuccess = createAction('[Command] Get Command Success', props<{command: Command}>());
export const getCommandError = createAction('[Command] Get Command Error', props<{error: string}>());
