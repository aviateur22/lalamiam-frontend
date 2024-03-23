import { Component } from '@angular/core';
import { Command } from '../../models/command.model';
import { Store, select } from '@ngrx/store';
import * as CommandActions from './../../store/action';
import { Observable } from 'rxjs';
import { commandSelector, isLoadingSelector } from '../../store/selector';
import { AppState } from 'src/app/models/store/app-state';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandProductParam } from '../../models/command-product-param-model';

@Component({
  selector: 'app-product-in-command',
  templateUrl: './product-in-command.component.html',
  styleUrls: ['./product-in-command.component.css']
})

export class ProductInCommandComponent {
  private storeId: string | null = '';
  private commandId: string | null = '';

  isLoading$: Observable<boolean>;
  command$: Observable<Command | null>;

  public constructor(private _router: Router, private _activateRoute: ActivatedRoute, private _store: Store<AppState>) {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.command$ = this._store.pipe(select(commandSelector));
  }

  ngOnInit() {
    this._store.dispatch(CommandActions.getCommandInit());
    this.storeId = this._activateRoute.snapshot.paramMap.get('storeId');
    this.commandId = this._activateRoute.snapshot.paramMap.get('commandId');

    if(this.commandId !== null && this.commandId.trim() !== ''&& this.storeId !== null && this.storeId.trim() !== '') {
      this.getCommandProducts();
    }
  }

  private getCommandProducts() {
    const commandAction: CommandProductParam = {
      commandId: this.commandId!,
      storeId : this.storeId!
    }
    this._store.dispatch(CommandActions.getCommand(commandAction));
  }
}
