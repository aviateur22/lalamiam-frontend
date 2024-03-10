import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent {
  @Input() componentName: string = '';
  @Input() inputType!: string;
  @Input() labelText!: string;
}
