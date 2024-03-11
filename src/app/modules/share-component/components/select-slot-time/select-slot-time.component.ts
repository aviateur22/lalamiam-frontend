import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-slot-time',
  templateUrl: './select-slot-time.component.html',
  styleUrls: ['./select-slot-time.component.css']
})
export class SelectSlotTimeComponent {
  @Input() labelText!: string
  @Input() componentName!: string;
  @Input() inputType!: string;
  @Input() slotTime!: string;

  isActive: boolean = false;
  isChecked: boolean = false;

  @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>();

  click(): void {
    this.isActive = !this.isActive;
    this.isChecked = !this.isChecked;
    this.clickEmitter.emit();
  }
}
