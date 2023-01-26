import { Component, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
})
export class TabsComponent implements OnInit, OnDestroy {

  constructor() {}

  public tabs = [
    { path: '/tabs/a', label: 'Long Tab A' },
    { path: '/tabs/b', label: 'Long Tab B' },
    { path: '/tabs/c', label: 'Long Tab C' },
    { path: '/tabs/d', label: 'Long Tab D' },
    { path: '/tabs/e', label: 'Long Tab E' },
    { path: '/tabs/h', label: 'Long Tab H' },
    { path: '/tabs/f', label: 'Long Tab F' },
    { path: '/tabs/g', label: 'Long Tab G' },
    { path: '/tabs/j', label: 'Long Tab J' },

  ];

  public ngOnInit() {
  }

  public ngOnDestroy() {
  }
}
