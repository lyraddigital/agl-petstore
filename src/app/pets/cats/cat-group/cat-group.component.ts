import { Component, Input } from '@angular/core';

import { Cat } from '../models/cat';

@Component({
  selector: 'agl-cat-group',
  templateUrl: './cat-group.component.html',
  styleUrls: ['./cat-group.component.scss']
})
export class CatGroupComponent {
  @Input()
  title: string;

  @Input()
  cats: Array<Cat>;

  @Input()
  headerClass = 'blue-heading';
}
