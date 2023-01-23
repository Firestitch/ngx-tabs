import { Component } from '@angular/core';


@Component({
  selector: 'horizontal-link-tabs',
  templateUrl: 'horizontal-link-tabs.component.html',
})
export class HorizontalLinkTabsComponent {
  public tab = 'tab2';
  public navLinks = [
    {
      path: ['tabs'],
      label: 'Tabs',
    },
  ];

  public selectedNameChange(name) {
    console.log('Selected Tab Name', name);
  }
}
