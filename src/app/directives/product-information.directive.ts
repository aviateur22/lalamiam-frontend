import { AfterContentInit, AfterViewInit, ContentChild, ContentChildren, Directive, ElementRef, HostListener, QueryList, Renderer2 } from '@angular/core';
import { RoundButtonComponent } from '../components/round-button/round-button.component';

@Directive({
  selector: '[appProductInformation]'
})
export class ProductInformationDirective  {


  // @ContentChild('d') mybutton!: RoundButtonComponent;
  // @ContentChildren(RoundButtonComponent)
  // roundButtons!: QueryList<RoundButtonComponent>;

  // private _element: HTMLElement;
  // private isActive: boolean = false;

  // private firstColor: string = getComputedStyle(document.documentElement).getPropertyValue('--first_color');
  // private thirdColor: string = getComputedStyle(document.documentElement).getPropertyValue('--third_color');


  // constructor(private _er: ElementRef, private _rendered: Renderer2) {
  //   this._element = this._er.nativeElement;
  //   this._element.style.transition = 'all 0.3s';
  //   console.log('+appProductInformation', this._element);
  // }

  // ngAfterViewInit(): void {
  //   if(this.roundButtons) console.log(this.roundButtons.length)
  //   if(this.roundButtons && this.roundButtons.length === 2) {
  //     this.roundButtons.get(0)!.isActive = true
  //     this.roundButtons.get(1)!.isActive = true

  //   }
  // }
  // ngAfterContentInit(): void {
  //   let buttonPrimaryElements = this._element.querySelectorAll('.primary--button');
  //   let buttonSecondaryElements = this._element.querySelectorAll('.secondary--button');

  //   buttonPrimaryElements.forEach(e=> e.classList.add('primary--active--button'));

  //   buttonSecondaryElements.forEach(e=>e.classList.add('secondary--active--button'));

  //   console.log(buttonSecondaryElements)
  //   console.log(buttonPrimaryElements)
  // }

  // @HostListener('click') onClick() {
  //   this.isActive = !this.isActive;


  //   if(this.isActive) {
  //     this.clickAction(this.firstColor, this.thirdColor);

  //   } else {
  //     this.clickAction(this.thirdColor,this.firstColor);
  //   }

  // }

  // clickAction(backgroundColor: string, textColor: string, ) {
  //   this.setBackground(backgroundColor)
  //   this.setColor(textColor)
  // }

  // setBackground(color: string) {
  //   this._element.style.backgroundColor = color;
  // }

  // setColor(color: string) {
  //   let presentationTextElement = this._element.querySelector('.product__detail__header');
  //   let productMainElement = this._element.querySelector('.product__main__button__container');
  //   let buttonPrimaryElement = this._element.querySelector('.button round--button primary--button');
  //   if(presentationTextElement != null && productMainElement !== null) {
  //     this._rendered.setStyle(presentationTextElement, 'color', color);
  //     this._rendered.setStyle(productMainElement, 'color', color)

  //   }
  // }
}
