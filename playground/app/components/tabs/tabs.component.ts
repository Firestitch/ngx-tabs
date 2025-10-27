import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FsTabsHeaderNavDirective } from '../../../../src/app/directives/tabs-header-nav/tabs-header-nav.directive';
import { MatTabNav, MatTabLink, MatTabNavPanel } from '@angular/material/tabs';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { FsRouterLinkDirective } from '../../../../src/app/directives/router-link/router-link.directive';


@Component({
    selector: 'tabs',
    templateUrl: './tabs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsTabsHeaderNavDirective,
        MatTabNav,
        MatTabLink,
        RouterLinkActive,
        FsRouterLinkDirective,
        RouterLink,
        MatTabNavPanel,
        RouterOutlet,
    ],
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
