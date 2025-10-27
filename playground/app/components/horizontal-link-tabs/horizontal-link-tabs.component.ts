import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FsTabsHeaderNavDirective } from '../../../../src/app/directives/tabs-header-nav/tabs-header-nav.directive';
import { MatTabNav, MatTabLink, MatTabNavPanel } from '@angular/material/tabs';
import { RouterLinkActive, RouterLink, RouterOutlet } from '@angular/router';
import { FsRouterLinkDirective } from '../../../../src/app/directives/router-link/router-link.directive';


@Component({
    selector: 'horizontal-link-tabs',
    templateUrl: './horizontal-link-tabs.component.html',
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
export class HorizontalLinkTabsComponent {
  public navLinks = [
    {
      path: ['tabs/a'],
      label: 'Tabs A',
    },
    {
      path: ['tabs/b'],
      label: 'Tabs B',
    },
  ];

  public selectedChange(name) {
    console.log('Selected Tab Name', name);
  }
}
