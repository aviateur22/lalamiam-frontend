import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rectangle-button',
  templateUrl: './rectangle-button.component.html',
  styleUrls: ['./rectangle-button.component.css']
})
export class RectangleButtonComponent {
  @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>();

  @Input() buttonText?: string;
  @Input() isPrimary?: boolean;

  click(): void {
    this.clickEmitter.emit();
  }
}
