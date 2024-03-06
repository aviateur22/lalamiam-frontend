import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ProductDashboardComponent } from './components/product-dashboard/product-dashboard.component';
import { ProductInCommandComponent } from './components/product-in-command/product-in-command.component';
import { ProductStoreComponent } from './components/product-store/product-store.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { RectangleButtonComponent } from './components/rectangle-button/rectangle-button.component';
import { RoundButtonComponent } from './components/round-button/round-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductDashboardComponent,
    ProductInCommandComponent,
    ProductStoreComponent,
    RectangleButtonComponent,
    RoundButtonComponent
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
