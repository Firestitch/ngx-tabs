import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  styles: [
    `
    :host {
      height: 100vh;
      overflow-y: auto;
      display: block;
    }
    `
  ]
})
export class TabsComponent implements OnInit, OnDestroy {

  constructor() {}

  public tabs = [
    { path: '/tabs/a', label: 'Tab A' },
    { path: '/tabs/b', label: 'Tab B' },
    { path: '/tabs/c', label: 'Tab C' },
    { path: '/tabs/d', label: 'Tab D' }
  ];

  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}
