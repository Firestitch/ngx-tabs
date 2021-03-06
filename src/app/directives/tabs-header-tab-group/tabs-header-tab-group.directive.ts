import { Directive, ElementRef, Inject, Input, NgZone, Optional, Renderer2 } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { MAT_TABS_CONFIG, MatTabGroup } from '@angular/material/tabs';

import { FsTabsHeaderBaseDirective } from '../tabs-header-base/tabs-header-base';
import { FS_TABS_CONFIG } from '../../fs-tabs-config.provider';
import { IFsTabsConfig } from '../../interfaces/tabs-config.interface';


@Directive({
  selector: 'mat-tab-group, matTabGroup, [matTabGroup]',
  exportAs: 'fsTabsHeaderTabGroup',
  host: {
    '[class.fs-tabs-vertical]': 'orientation === "vertical"',
  },
  providers: [
    {
      provide: MAT_TABS_CONFIG,
      useValue: { animationDuration : '0ms' },
    },
  ]
})
export class FsTabsHeaderTabGroupDirective extends FsTabsHeaderBaseDirective {

  @Input()
  public orientation: 'horizontal' | 'vertical' = 'horizontal';

  constructor(
    _renderer: Renderer2,
    _breakpointObserver: BreakpointObserver,
    _ngZone: NgZone,
    @Inject(FS_TABS_CONFIG) _tabsConfig: IFsTabsConfig,
    @Optional() private _tabGroup: MatTabGroup,
  ) {
    super(_renderer, _breakpointObserver, _ngZone, _tabsConfig);
  }

  protected _initTargetElement() {
    this._elementRef = (this._tabGroup?._tabHeader as any)._elementRef as ElementRef;
  }
}
