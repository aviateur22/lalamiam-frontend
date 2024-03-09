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
    ProductClickListDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommandModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
