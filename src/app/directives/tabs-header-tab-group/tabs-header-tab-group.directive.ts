import { AfterViewInit, ChangeDetectorRef, ContentChildren, Directive, EventEmitter, Input, OnChanges, Output, QueryList, SimpleChanges, inject } from '@angular/core';

import { MAT_TABS_CONFIG, MatTabGroup, MatTabsConfig } from '@angular/material/tabs';

import { filter, map, takeUntil } from 'rxjs/operators';

import { FsTabsHeaderBaseDirective } from '../tabs-header-base/tabs-header-base';
import { FsTabsTabDirective } from '../tabs-tab/tabs-tab.directive';


@Directive({
  selector: 'mat-tab-group, matTabGroup, [matTabGroup]',
  exportAs: 'fsTabsHeaderTabGroup',
  host: {
    '[class.fs-tabs-vertical]': 'orientation === "vertical"',
    '[class.fs-tabs-horizontal]': 'orientation === "horizontal"',
  },
  providers: [
    {
      provide: MAT_TABS_CONFIG,
      useValue: {
        animationDuration: '0ms',
        stretchTabs: false,
        dynamicHeight: false,
      } as MatTabsConfig,
    },
  ],
  standalone: true,
})
export class FsTabsHeaderTabGroupDirective
  extends FsTabsHeaderBaseDirective implements OnChanges, AfterViewInit {
  private _cdRef = inject(ChangeDetectorRef);
  private _tabGroup = inject(MatTabGroup, { optional: true });


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

  @ContentChildren(FsTabsTabDirective, { descendants: true })
  private _fsTabs: QueryList<FsTabsTabDirective>;

  public getMatTabHeaderEl() {
    return (this._tabGroup?._tabHeader as any)._elementRef?.nativeElement;
  }

  public ngAfterViewInit(): void {
    super.ngAfterViewInit();

    if (this.selected) {
      setTimeout(() => {
        this.selectTab(this.selected);
      }, 300); // TODO fix me
    }

    this._tabGroup.selectedIndexChange
      .pipe(
        map((index: number) => {
          return this._getFsTab(index);
        }),
        filter((tab: FsTabsTabDirective) => (!!tab && (this.selected === undefined || tab.name !== this.selected))),
        takeUntil(this.destroy$),
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
        takeUntil(this.destroy$),
      )
      .subscribe((tab: FsTabsTabDirective) => {
        this.selectedDataChange.emit(tab.data);
      });
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.selected && !changes.selected.firstChange && changes.selected.currentValue !== undefined) {
      this.selectTab(changes.selected.currentValue);
    }
  }

  public selectTab(name: string): void {
    const index = this._fsTabs
      .toArray().findIndex((fsTab: FsTabsTabDirective) => {
        return name === fsTab.name;
      });

    if (index !== -1) {
      this._tabGroup.selectedIndex = index;
      this._tabGroup.focusTab(index);

      this._cdRef.markForCheck();
    }
  }

  private _getFsTab(index: number): FsTabsTabDirective {
    const fsTabs = this._fsTabs.toArray();

    return fsTabs[index];
  }
}
