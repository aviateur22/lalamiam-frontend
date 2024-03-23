import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RectangleButtonComponent } from './components/rectangle-button/rectangle-button.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { ProductInformationDirective } from './directives/product-information.directive';
import { ProductClickListDirective } from './directives/product-click-list.directive';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { SimpleInputTextComponent } from './components/simple-input-text/simple-input-text.component';
import { DoubleInputTextComponent } from './components/double-input-text/double-input-text.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { SelectTextComponent } from './components/select-text/select-text.component';
import { SelectSlotTimeComponent } from './components/select-slot-time/select-slot-time.component';
import { SelectCommandDateComponent } from './components/select-command-date/select-command-date.component';
import { ButtonContainerComponent } from './components/button-container/button-container.component';

import { CalendarModule } from 'primeng/calendar';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RectangleButtonComponent,
    RoundButtonComponent,
    ProductInformationComponent,
    ProductClickListDirective,
    ProductInformationDirective,
    FilterListComponent,
    SimpleInputTextComponent,
    DoubleInputTextComponent,
    TextAreaComponent,
    SelectTextComponent,
    SelectSlotTimeComponent,
    SelectCommandDateComponent,
    ButtonContainerComponent,
    LoaderComponent



  ],
  imports: [
    CommonModule,
    CalendarModule
  ],
  exports: [
    HeaderComponent,
    RectangleButtonComponent,
    RoundButtonComponent,
    ProductInformationComponent,
    ProductClickListDirective,
    ProductInformationDirective,
    FilterListComponent,
    SimpleInputTextComponent,
    DoubleInputTextComponent,
    TextAreaComponent,
    SelectTextComponent,
    SelectSlotTimeComponent,
    SelectCommandDateComponent,
    ButtonContainerComponent
  ]
})
export class ShareComponentModule { }
