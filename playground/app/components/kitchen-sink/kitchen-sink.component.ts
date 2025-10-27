import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { FsRouterLinkDirective } from '../../../../src/app/directives/router-link/router-link.directive';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'kitchen-sink',
    templateUrl: './kitchen-sink.component.html',
    styleUrls: ['./kitchen-sink.component.scss'],
    standalone: true,
    imports: [
        MatButton,
        FsRouterLinkDirective,
        RouterLink,
    ],
})
export class KitchenSinkComponent {

  public config = {};

  public tabs = [
    { path: '/a', label: 'Tab A' },
    { path: '/b', label: 'Tab B' },
    { path: '/c', label: 'Tab C' },
    { path: '/d', label: 'Tab D' },
  ];

}
