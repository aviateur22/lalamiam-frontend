import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-input-text',
  templateUrl: './simple-input-text.component.html',
  styleUrls: ['./simple-input-text.component.css']
})
export class SimpleInputTextComponent {
  @Input() componentName: string = '';
  @Input() inputType!: string;
  @Input() labelText!: string;

}
