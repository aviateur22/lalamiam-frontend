import { ContentChildren, Directive, ElementRef, HostListener, QueryList, Renderer2, ViewChild } from '@angular/core';
import { ProductInformationComponent } from '../components/product-information/product-information.component';
import { SelectionHtmlException } from '../../../exceptions/SelectionHtmlException';

@Directive({
  selector: '[appProductClickList]'
})
export class ProductClickListDirective {
  @ContentChildren(ProductInformationComponent) refProducts!: QueryList<ProductInformationComponent>;
  products: ProductInformationComponent[] = [];

  //@ContentChildren(ProductInformationComponent) op!: QueryList<ProductInformationComponent>
  constructor(private _renderer: Renderer2) { }

  ngAfterViewInit() {
    this.products = this.refProducts.toArray();
    this.products.forEach(el=>{
      console.log(el.index);
    })
  }


  @HostListener('click', ['$event.target']) onClick(target: any) {
    this.resetProducts();
    const findParentElement = this.findParentElement(target as HTMLElement);

    if(findParentElement === null) throw new SelectionHtmlException('Erreur dans la selection');

    findParentElement.style.transition = 'all 0.3s';

    //@ts-ignore
    let position = parseInt(findParentElement?.getAttribute('data-position'), 10);

    let productSelect: ProductInformationComponent|undefined = this.findProductInformationComponent(position);

    if(productSelect === undefined) throw new SelectionHtmlException('Erreur dans la selection');

    if(productSelect.isProductAvail) productSelect.isProductActive = true;

  }

  /**
   *
   * @param element
   * @returns
   */
  findParentElement(element: HTMLElement): HTMLElement | null {
    let parent = element.parentElement;
    while (parent !== null) {
      if (parent.classList.contains('product__main__container')) {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }

  findProductInformationComponent(position: number): ProductInformationComponent | undefined {
    return this.products.find(product=> product.index === position);
  }

  resetProducts(): void {
    this.products.forEach(product=>product.isProductActive = false);
  }
}
