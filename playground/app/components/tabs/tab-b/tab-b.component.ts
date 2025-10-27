import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
    selector: 'list',
    templateUrl: 'tab-b.component.html',
    styles: [
        `
    .list-scroll {
      width: 300px;
      height: 250px;
      overflow: scroll;
    }
    `,
    ],
    standalone: true,
    imports: [MatFormField, MatInput],
})
export class TabBComponent {

}
