import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
  selector: 'vertical-tabs',
  templateUrl: './vertical-tabs.component.html',
  styleUrls: ['./vertical-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VerticalTabsComponent {

  public tab = 'tab2';

  public selectedChange(name) {
    console.log('Selected Tab Name', name);
  }
}
