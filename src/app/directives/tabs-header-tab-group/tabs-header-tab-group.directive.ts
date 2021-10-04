import { ContentChildren, Directive, ElementRef, EventEmitter, Inject, Input, NgZone, Optional, Output, QueryList, Renderer2 } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { MAT_TABS_CONFIG, MatTabGroup } from '@angular/material/tabs';

import { FsTabsHeaderBaseDirective } from '../tabs-header-base/tabs-header-base';
import { FS_TABS_CONFIG } from '../../fs-tabs-config.provider';
import { IFsTabsConfig } from '../../interfaces/tabs-config.interface';
import { FsTabsTabDirective } from '../tabs-tab/tabs-tab.directive';
import { filter, map, takeUntil } from 'rxjs/operators';


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

  @ContentChildren(FsTabsTabDirective, { descendants: true }) 
  private _fsTabs: QueryList<FsTabsTabDirective>;

  @Input()
  public orientation: 'horizontal' | 'vertical' = 'horizontal';

  @Input()
  public selectedName;

  @Output()
  public selectedNameChange = new EventEmitter<string>();

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

    if(this.selectedName) {
      const index = this._fsTabs
      .toArray().findIndex((fsTab: FsTabsTabDirective) => {
        return this.selectedName === fsTab.name;
      });

      if(index !== -1) {
        this._tabGroup.selectedIndex = index;
      }
    }
    
    if(this.selectedNameChange.observers.length) {
      // if(!this.selectedName) {
      //   const fsTab: FsTabsTabDirective = this._getFsTab(this._tabGroup.selectedIndex);
      //   if(fsTab) {
      //     this.selectedNameChange.emit(fsTab.name);
      //   }
      // }

      this._tabGroup.selectedIndexChange
      .pipe(
        map((index: number) => {
          return this._getFsTab(index);
        }),
        filter((tab) => (!!tab && (this.selectedName === undefined || tab.name !== this.selectedName))),
        takeUntil(this._destroy$),
      )        
      .subscribe((tab: FsTabsTabDirective) => {
        this.selectedName = tab.name;
        this.selectedNameChange.emit(tab.name);
      });
    }
  }

  private _getFsTab(index: number): FsTabsTabDirective {
    const fsTabs = this._fsTabs.toArray();
    return fsTabs[index];
  }
}
