import { Directive, ElementRef, Inject, NgZone, Renderer2, } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { FsTabsHeaderBaseDirective } from '../tabs-header-base/tabs-header-base';
import { FS_TABS_CONFIG } from '../../fs-tabs-config.provider';
import { IFsTabsConfig } from '../../interfaces/tabs-config.interface';


@Directive({
  selector: 'mat-tab-nav-bar, [mat-tab-nav-bar], [matTabNavBar]',
  exportAs: 'fsTabsHeaderNav',
})
export class FsTabsHeaderNavDirective extends FsTabsHeaderBaseDirective {

  constructor(
    _renderer: Renderer2,
    _breakpointObserver: BreakpointObserver,
    _ngZone: NgZone,
    _el: ElementRef,
    @Inject(FS_TABS_CONFIG) _tabsConfig: IFsTabsConfig,    
  ) {
    super(_renderer, _breakpointObserver, _ngZone, _el, _tabsConfig);
  }

  public getMatTabHeaderEl() {
    return this.element;
  }

}
