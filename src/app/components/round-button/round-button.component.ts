import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.css']
})
export class RoundButtonComponent {
  @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>();

  @Input() isPrimary?: boolean;
  @Input() iconeName?: string;

  iconColor: string ="";





    ngOnInit() {
      this.iconColor = this.isPrimary ?
        getComputedStyle(document.documentElement).getPropertyValue('--third_color')
      : getComputedStyle(document.documentElement).getPropertyValue('--firsrt_color')

    }

  click(): void {
    this.clickEmitter.emit();
  }
}
