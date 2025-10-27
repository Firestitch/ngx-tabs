import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FsTabNavComponent } from '../../../../src/app/components/tab-nav/tab-nav.component';
import { FsTabsHeaderNavDirective } from '../../../../src/app/directives/tabs-header-nav/tabs-header-nav.directive';
import { MatTabNav, MatTabLink, MatTabNavPanel } from '@angular/material/tabs';
import { RouterLinkActive, RouterLink } from '@angular/router';
import { FsRouterLinkDirective } from '../../../../src/app/directives/router-link/router-link.directive';


@Component({
    selector: 'vertical-nav-tabs',
    templateUrl: './vertical-nav-tabs.component.html',
    styleUrls: ['./vertical-nav-tabs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsTabNavComponent,
        FsTabsHeaderNavDirective,
        MatTabNav,
        MatTabLink,
        RouterLinkActive,
        FsRouterLinkDirective,
        RouterLink,
        MatTabNavPanel,
    ],
})
export class VerticalNavTabsComponent {

  public tab = 'tab2';

  public selectedChange(name) {
    console.log('Selected Tab Name', name);
  }
}
