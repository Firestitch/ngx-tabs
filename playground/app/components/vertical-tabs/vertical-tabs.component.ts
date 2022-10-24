import { Component } from '@angular/core';


@Component({
  selector: 'vertical-tabs',
  templateUrl: 'vertical-tabs.component.html',
  styleUrls: [ 'vertical-tabs.component.scss' ]
})
export class VerticalTabsComponent {

  public tab = 'tab2';

  public selectedNameChange(name) {
    console.log('Selected Tab Name', name);
  }
}
