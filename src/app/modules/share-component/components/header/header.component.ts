import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() primaryInformation: string = '';
  @Input() secondaryInformation: string = '';

  @Input() isLeftButtonVisible: boolean = true;
  @Input() isRightButtonVisible: boolean = true;

  @Output() clickLeftEmitter: EventEmitter<void> = new EventEmitter();
  @Output() clickRightEmitter: EventEmitter<void> = new EventEmitter();

  clickLeft() {
    this.clickLeftEmitter.emit();
  }

  clickRight() {
    this.clickRightEmitter.emit();
  }


}
