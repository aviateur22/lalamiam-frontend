import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-primary-rectangle-button',
  templateUrl: './primary-rectangle-button.component.html',
  styleUrls: ['./primary-rectangle-button.component.css']
})
export class PrimaryRectangleButtonComponent {
  @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>();

  click(): void {
    this.clickEmitter.emit();
  }

}
