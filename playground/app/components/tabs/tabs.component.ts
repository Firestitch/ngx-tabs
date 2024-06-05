import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {

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
}
