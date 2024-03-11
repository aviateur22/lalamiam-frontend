import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-text',
  templateUrl: './select-text.component.html',
  styleUrls: ['./select-text.component.css']
})
export class SelectTextComponent {
  @Input() componentName: string = '';
  @Input() inputType!: string;
  @Input() labelText!: string;
  @Input() selectInputText!: string;

  listOptions: string[] = ['pizzeria', 'boulangerie', 'snack'];
}
