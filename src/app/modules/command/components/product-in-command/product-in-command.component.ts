import { Component } from '@angular/core';
import { CommandService } from '../../services/command.service';
import { Product } from '../../models/product.model';
import { Command } from '../../models/command.model';
import { Store } from '@ngrx/store';
import * as CommandActions from './../../store/action';

@Component({
  selector: 'app-product-in-command',
  templateUrl: './product-in-command.component.html',
  styleUrls: ['./product-in-command.component.css']
})
export class ProductInCommandComponent {
  command: Command | undefined;
  products: Product[] = []

  public constructor(private _store: Store, private _commandService: CommandService) {}

  ngOnInit() {
    this._store.dispatch(CommandActions.getCommand());

   this._commandService.getOneCommand(BigInt(3), BigInt(3)).subscribe(command => {
      this.command = command;
      this.products = this.command.products;
    });
  }
}
