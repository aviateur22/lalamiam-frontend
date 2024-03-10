import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductStoreComponent } from './components/product-store/product-store.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { RectangleButtonComponent } from './components/rectangle-button/rectangle-button.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';
import { ProductInformationComponent } from './components/product-information/product-information.component';
import { ProductInformationDirective } from './directives/product-information.directive';
import { ProductClickListDirective } from './directives/product-click-list.directive';
import { CommandModule } from './modules/command/command.module';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { SimpleInputTextComponent } from './components/simple-input-text/simple-input-text.component';
import { DoubleInputTextComponent } from './components/double-input-text/double-input-text.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { SelectTextComponent } from './components/select-text/select-text.component';
import { SelectSlotTimeComponent } from './components/select-slot-time/select-slot-time.component';
import { SelectCommandDateComponent } from './components/select-command-date/select-command-date.component';
import { ButtonContainerComponent } from './components/button-container/button-container.component';

// PrimeNg
import { CalendarModule } from 'primeng/calendar';
import { DatePickerClickDirective } from './directives/date-picker-click.directive';
import { SelectImageComponent } from './components/select-image/select-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductDashboardComponent,
    ProductStoreComponent,
    RectangleButtonComponent,
    RoundButtonComponent,
    ProductInformationComponent,
    ProductInformationDirective,
    ProductClickListDirective,
    FilterListComponent,
    SimpleInputTextComponent,
    DoubleInputTextComponent,
    TextAreaComponent,
    SelectTextComponent,
    SelectSlotTimeComponent,
    SelectCommandDateComponent,
    ButtonContainerComponent,
    DatePickerClickDirective,
    SelectImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommandModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
