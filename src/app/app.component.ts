import { Component } from '@angular/core';
import { ProductInformationComponent } from './components/product-information/product-information.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lalamiam';

  products: ProductInformationComponent[] = [
    new ProductInformationComponent(),
    new ProductInformationComponent(),
    new ProductInformationComponent()
  ]
}
