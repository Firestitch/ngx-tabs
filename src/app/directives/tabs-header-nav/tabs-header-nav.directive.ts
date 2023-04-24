import { Directive, ElementRef, Inject, Input, NgZone, Renderer2, } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { FsTabsHeaderBaseDirective } from '../tabs-header-base/tabs-header-base';
import { FS_TABS_CONFIG } from '../../fs-tabs-config.provider';
import { IFsTabsConfig } from '../../interfaces/tabs-config.interface';


@Directive({
  selector: 'mat-tab-nav-bar, [mat-tab-nav-bar], [matTabNavBar]',
  exportAs: 'fsTabsHeaderNav',
  host: {
    '[class.fs-tabs-vertical]': 'orientation === "vertical"',
  },
})
export class FsTabsHeaderNavDirective extends FsTabsHeaderBaseDirective {

  @Input()
  public orientation: 'horizontal' | 'vertical' = 'horizontal';

  constructor(
    @Inject(FS_TABS_CONFIG) _tabsConfig: IFsTabsConfig,    
    _renderer: Renderer2,
    _breakpointObserver: BreakpointObserver,
    _ngZone: NgZone,
    _el: ElementRef,
  ) {
    super(_tabsConfig, _renderer, _breakpointObserver, _ngZone, _el);
  }

  public getMatTabHeaderEl() {
    return this.element;
  }

}
