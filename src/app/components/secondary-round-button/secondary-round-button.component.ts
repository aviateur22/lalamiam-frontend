import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-secondary-round-button',
  templateUrl: './secondary-round-button.component.html',
  styleUrls: ['./secondary-round-button.component.css']
})
export class SecondaryRoundButtonComponent {

  @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>();

  click(): void {
    this.clickEmitter.emit();
  }

}
