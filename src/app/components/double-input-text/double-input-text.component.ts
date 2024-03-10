import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-double-input-text',
  templateUrl: './double-input-text.component.html',
  styleUrls: ['./double-input-text.component.css']
})
export class DoubleInputTextComponent {
  @Input() componentNameOne: string = '';
  @Input() inputTypeOne!: string;
  @Input() labelTextOne!: string;

  @Input() componentNameTwo: string = '';
  @Input() inputTypeTwo!: string;
  @Input() labelTextTwo!: string;

}
