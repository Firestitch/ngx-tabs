import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'vertical-nav-tabs',
  templateUrl: './vertical-nav-tabs.component.html',
  styleUrls: ['./vertical-nav-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalNavTabsComponent {

  public tab = 'tab2';

  public selectedChange(name) {
    console.log('Selected Tab Name', name);
  }
}
