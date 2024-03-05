import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-rectangle-button',
  templateUrl: './secondary-rectangle-button.component.html',
  styleUrls: ['./secondary-rectangle-button.component.css']
})
export class SecondaryRectangleButtonComponent {
  @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>();

  click(): void {
    this.clickEmitter.emit();
  }
}
