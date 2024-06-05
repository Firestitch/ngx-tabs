import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'horizontal-link-tabs',
  templateUrl: './horizontal-link-tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
