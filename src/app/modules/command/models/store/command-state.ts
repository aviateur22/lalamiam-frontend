import { Command } from "../command.model";

export interface CommandState {
  isLoading: boolean,
  command: Command | null,
  error: string
}
