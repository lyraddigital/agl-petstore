import { Component, Input } from '@angular/core';

import { Cat } from '../cat/cat';

@Component({
  selector: 'app-cat-group',
  templateUrl: './cat-group.component.html',
  styleUrls: ['./cat-group.component.css']
})
export class CatGroupComponent {
    @Input()
    title: string;

    @Input()
    cats: Array<Cat>;
}
