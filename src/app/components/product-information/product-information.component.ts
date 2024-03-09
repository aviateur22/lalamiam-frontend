import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent {

  @Input() isProductInCommand: boolean = false;
  @Input() index!: number;
  @Input() isLast!: boolean;
  @Input() isModificationActive: boolean = true;
  @Input() isProductAvail: boolean = false;
  @Output() deleteProductEmitter: EventEmitter<void> = new EventEmitter();
  @Output() decreaseEmitter: EventEmitter<void> = new EventEmitter();
  @Output() increaseEmitter: EventEmitter<void> = new EventEmitter();

  isProductActive: boolean = false;

  public increaseQuantity(): void {

  }

  public decreaseQuantity(): void {

  }

  public deleteProduct(): void {

  }


}
