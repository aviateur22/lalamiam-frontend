//@ts-noCheck
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import frontEndUrl from 'src/app/utils/frontEndUrl';
import pageTtile from 'src/app/utils/pageTtile';
import { environment } from 'src/environments/environment';
import { SelectProductInCommandComponent } from './components/select-product-in-command/select-product-in-command.component';
import { SlotAvailibilityComponent } from './components/slot-availibility/slot-availibility.component';
import { ConfirmationCommandComponent } from './components/confirmation-command/confirmation-command.component';
import { ProductInCommandComponent } from './components/product-in-command/product-in-command.component';
import { CommandService } from './services/command.service';

const manageCommand: Routes = [
  // Afficher les produits de la commande + produits commerce
  { path: frontEndUrl.selectProductsInCommandUrl.url, component: SelectProductInCommandComponent, title: pageTtile.selectProductInCommandPageTitle[environment.language]},
  // Afficher les horaires de disponible
  { path: frontEndUrl.getAllSlotsAvailibilityUrl.url, component: SlotAvailibilityComponent, title: pageTtile.getAllSlotsAvailibilityPageTitle[environment.language]},
  // Confirmer la commande
  { path: frontEndUrl.confirmCommandUrl.url, component: ConfirmationCommandComponent, title: pageTtile.confirmationCommandPageTitle[environment.language]}
]

@NgModule({
  declarations: [
    ProductInCommandComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(manageCommand)
  ],
  providers: [CommandService]
})
export class CommandModule { }
