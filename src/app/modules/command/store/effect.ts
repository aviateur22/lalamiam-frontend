import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CommandService } from "../services/command.service";
import * as CommandAction from "./action";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class CommandEffect {

  /**
   * Observable getCommand
   */
  getCommand$ = createEffect(()=>
    this._action$.pipe(
      ofType(CommandAction.getCommand),
      mergeMap((data)=>
        this._commandService.getOneCommand(data.storeId, data.commandId).pipe(
          map((command)=> CommandAction.getCommandSuccess({command})),
          catchError((error)=>
            of(CommandAction.getCommandError({error: error.message}))
          )
        )
      )
    )
  );

  constructor(private _action$: Actions, private _commandService: CommandService){}
}
