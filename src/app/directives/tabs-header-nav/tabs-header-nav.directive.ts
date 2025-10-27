import { Directive, Input } from '@angular/core';


import { FsTabsHeaderBaseDirective } from '../tabs-header-base/tabs-header-base';


@Directive({
  selector: 'mat-tab-nav-bar, [mat-tab-nav-bar], [matTabNavBar]',
  exportAs: 'fsTabsHeaderNav',
  host: {
    '[class.fs-tabs-vertical]': 'orientation === "vertical"',
  },
  standalone: true,
})
export class FsTabsHeaderNavDirective extends FsTabsHeaderBaseDirective {

  @Input()
  public orientation: 'horizontal' | 'vertical' = 'horizontal';

  public getMatTabHeaderEl() {
    return this.element;
  }

}
