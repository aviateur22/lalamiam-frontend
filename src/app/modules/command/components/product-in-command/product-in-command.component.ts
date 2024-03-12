import { Component } from '@angular/core';
import { ProductInformationComponent } from 'src/app/modules/share-component/components/product-information/product-information.component';

@Component({
  selector: 'app-product-in-command',
  templateUrl: './product-in-command.component.html',
  styleUrls: ['./product-in-command.component.css']
})
export class ProductInCommandComponent {
  products: ProductInformationComponent[] = [
    new ProductInformationComponent(),
    new ProductInformationComponent(),
    new ProductInformationComponent()
  ]
}
