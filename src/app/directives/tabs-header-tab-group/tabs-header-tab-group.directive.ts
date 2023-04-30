import { 
  ChangeDetectorRef,
  ContentChildren, Directive, ElementRef, EventEmitter, Inject, 
  Input, NgZone, OnChanges, Optional, Output, QueryList, Renderer2, SimpleChange, SimpleChanges 
} from '@angular/core';
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
  ],
})
export class FsTabsHeaderTabGroupDirective extends FsTabsHeaderBaseDirective implements OnChanges {

  @ContentChildren(FsTabsTabDirective, { descendants: true }) 
  private _fsTabs: QueryList<FsTabsTabDirective>;

  @Input()
  public orientation: 'horizontal' | 'vertical' = 'horizontal';

  @Input()
  public selected;

  @Output()
  public selectedChange = new EventEmitter<string>();

  @Input()
  public selectedData;

  @Output()
  public selectedDataChange = new EventEmitter<any>();

  constructor(
    _renderer: Renderer2,
    _breakpointObserver: BreakpointObserver,
    _ngZone: NgZone,
    _el: ElementRef,
    private _cdRef: ChangeDetectorRef,
    @Inject(FS_TABS_CONFIG) _tabsConfig: IFsTabsConfig,
    @Optional() private _tabGroup: MatTabGroup,
  ) {
    super(_tabsConfig, _renderer, _breakpointObserver, _ngZone, _el);
  }
  
  public getMatTabHeaderEl() {
    return (this._tabGroup?._tabHeader as any)._elementRef?.nativeElement;
  }

  public ngAfterViewInit(): void {
    super.ngAfterViewInit();
   
    if(this.selected) {
      setTimeout(() => {
        this.selectTab(this.selected);
      });
    }
    
    this._tabGroup.selectedIndexChange
      .pipe(
        map((index: number) => {
          return this._getFsTab(index);
        }),
        filter((tab) => (!!tab && (this.selected === undefined || tab.name !== this.selected))),
        takeUntil(this._destroy$),
      )        
      .subscribe((tab: FsTabsTabDirective) => {
        this.selected = tab.name;
        this.selectedChange.emit(tab.name);
      });

    this._tabGroup.selectedIndexChange
      .pipe(
        map((index: number) => {
          return this._getFsTab(index);
        }),
        takeUntil(this._destroy$),
      )        
      .subscribe((tab: FsTabsTabDirective) => {
        this.selectedDataChange.emit(tab.data);
      });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (!changes.selected?.firstChange) {
      this.selectTab(changes.selected.currentValue);
    }
  }

  public selectTab(name: string): void {
    const index = this._fsTabs
      .toArray().findIndex((fsTab: FsTabsTabDirective) => {
        return name === fsTab.name;
      });

      if(index !== -1) {
        this._tabGroup.selectedIndex = index;
        this._cdRef.markForCheck();
      }
  }

  private _getFsTab(index: number): FsTabsTabDirective {
    const fsTabs = this._fsTabs.toArray();
    return fsTabs[index];
  }
}
