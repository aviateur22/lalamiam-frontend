import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductInCommandComponent } from './components/product-in-command/product-in-command.component';
import { ProductStoreComponent } from './components/product-store/product-store.component';
import { MainRoundButtonComponent } from './components/main-round-button/main-round-button.component';
import { SecondaryRoundButtonComponent } from './components/secondary-round-button/secondary-round-button.component';
import { MainRectangleButtonComponent } from './components/main-rectangle-button/main-rectangle-button.component';
import { SecondaryRectangleButtonComponent } from './components/secondary-rectangle-button/secondary-rectangle-button.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductDashboardComponent,
    ProductInCommandComponent,
    ProductStoreComponent,
    MainRoundButtonComponent,
    SecondaryRoundButtonComponent,
    MainRectangleButtonComponent,
    SecondaryRectangleButtonComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
