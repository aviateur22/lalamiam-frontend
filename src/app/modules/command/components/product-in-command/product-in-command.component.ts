import { Component } from '@angular/core';
import { CommandService } from '../../services/command.service';
import { Product } from '../../models/product.model';
import { Command } from '../../models/command.model';
import { Store, select } from '@ngrx/store';
import * as CommandActions from './../../store/action';
import { Observable } from 'rxjs';
import { commandSelector, isLoadingSelector } from '../../store/selector';
import { AppState } from 'src/app/models/store/app-state';

@Component({
  selector: 'app-product-in-command',
  templateUrl: './product-in-command.component.html',
  styleUrls: ['./product-in-command.component.css']
})
export class ProductInCommandComponent {
  isLoading$: Observable<boolean>;
  command$: Observable<Command | null>;
  products: Product[] = []

  public constructor(private _store: Store<AppState>) {
    this.isLoading$ = this._store.pipe(select(isLoadingSelector));
    this.command$ = this._store.pipe(select(commandSelector));
  }

  ngOnInit() {
    const storeId: bigint = BigInt(1);
    const commandId: bigint = BigInt(3);

    this._store.dispatch(CommandActions.getCommandInit());
    this._store.dispatch(CommandActions.getCommand({storeId, commandId}));
  }
}
