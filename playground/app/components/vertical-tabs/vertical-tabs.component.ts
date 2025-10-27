import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FsTabsHeaderTabGroupDirective } from '../../../../src/app/directives/tabs-header-tab-group/tabs-header-tab-group.directive';
import { MatTabGroup, MatTab, MatTabContent } from '@angular/material/tabs';
import { FsTabsTabDirective } from '../../../../src/app/directives/tabs-tab/tabs-tab.directive';
import { MatButton } from '@angular/material/button';


@Component({
    selector: 'vertical-tabs',
    templateUrl: './vertical-tabs.component.html',
    styleUrls: ['./vertical-tabs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsTabsHeaderTabGroupDirective,
        MatTabGroup,
        FsTabsTabDirective,
        MatTab,
        MatTabContent,
        MatButton,
    ],
})
export class VerticalTabsComponent {

  public tab = 'tab2';

  public selectedChange(name) {
    console.log('Selected Tab Name', name);
  }
}
