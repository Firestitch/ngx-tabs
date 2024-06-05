import { Component } from '@angular/core';


@Component({
  selector: 'kitchen-sink',
  templateUrl: './kitchen-sink.component.html',
  styleUrls: ['./kitchen-sink.component.scss'],
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
