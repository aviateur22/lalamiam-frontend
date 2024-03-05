import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-primary-round-button',
  templateUrl: './primary-round-button.component.html',
  styleUrls: ['./primary-round-button.component.css']
})
export class PrimaryRoundButtonComponent {
  @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>();

  click(): void {
    this.clickEmitter.emit();
  }
}
