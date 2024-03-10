import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDatePickerClick]'
})
export class DatePickerClickDirective {


  parentElement!: HTMLElement;
  inputDateElement!: HTMLElement | null;
  private firstColor: string = getComputedStyle(document.documentElement).getPropertyValue('--first_color');

  constructor(private _er: ElementRef, private _rendered: Renderer2) {
    this.parentElement = _er.nativeElement;
  }

  ngAfterViewInit() {
   this.inputDateElement = this.parentElement.querySelector('input');
   if(this.inputDateElement) {
     this.inputDateElement.style.outline = 'none !important';
     this.inputDateElement.style.borderColor = this.firstColor;

   }

    console.log(this.inputDateElement);
  }

  @HostListener('click') onClick() {


  }

}
