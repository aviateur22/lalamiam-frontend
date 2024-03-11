import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.css']
})
export class RoundButtonComponent {
  @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>();

  @Input() isPrimary!: boolean;
  @Input() isActive!: boolean;
  @Input() iconeName?: string;

  iconColor: string ="";

  ngOnInit() {
    this.getIconeColor();
  }

  ngOnChanges() {
    this.getIconeColor();
  }

  public getIconeColor(): void {
    if(this.isPrimary && this.isActive) {
      this.iconColor = getComputedStyle(document.documentElement).getPropertyValue('--first_color');
    }

    if(this.isPrimary && !this.isActive) {
      this.iconColor = getComputedStyle(document.documentElement).getPropertyValue('--third_color');
    }

    if(!this.isPrimary && this.isActive) {
      this.iconColor = getComputedStyle(document.documentElement).getPropertyValue('--third_color');
    }

    if(!this.isPrimary && !this.isActive) {
      this.iconColor = getComputedStyle(document.documentElement).getPropertyValue('--first_color');
    }
    console.log(this.iconColor);
  }

  click(): void {
    this.clickEmitter.emit();
  }
}
