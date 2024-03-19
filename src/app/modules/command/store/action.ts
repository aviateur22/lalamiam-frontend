import { createAction, props } from "@ngrx/store";
import { Command } from "../models/command.model";

export const getCommand = createAction('[Command] Get Command', props<{storeId: bigint, commandId: bigint}>())
export const getCommandSuccess = createAction('[Command] Get Command Success', props<{command: Command}>())
export const getCommandError = createAction('[Command] Get Command Error', props<{error: string}>())
