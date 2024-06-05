import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';

import { Observable, Subject } from 'rxjs';
import { map, takeUntil, tap } from 'rxjs/operators';

import { FS_TABS_CONFIG } from '../../fs-tabs-config.provider';
import { IFsTabsConfig } from '../../interfaces/tabs-config.interface';

@Directive()
export abstract class FsTabsHeaderBaseDirective implements AfterViewInit, OnDestroy, OnInit {

  @Input() public mobileSticky;

  private _destroy$ = new Subject<void>();

  constructor(
    @Inject(FS_TABS_CONFIG) private _tabsConfig: IFsTabsConfig,
    private _renderer: Renderer2,
    private _breakpointObserver: BreakpointObserver,
    private _ngZone: NgZone,
    private _el: ElementRef,
  ) {}

  public ngOnInit(): void {
    if(this.mobileSticky === undefined) {
      this.mobileSticky = this._tabsConfig.mobileSticky;
    }
  }

  public get element() {
    return this._el.nativeElement;
  }

  public get destroy$(): Observable<any> {
    return this._destroy$.asObservable();
  }

  public ngAfterViewInit(): void {
    if (this.getMatTabHeaderEl()) {
      this._ngZone.runOutsideAngular(() => {
        this._listenWidthChanges();
      });
    }
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _listenWidthChanges(): void {
    this._breakpointObserver.observe([
      `(min-width: ${this._tabsConfig.mobileBreakpoint}px)`,
    ])
      .pipe(
        map((state) => !state.matches),
        tap((isMobile: boolean) => this._updateStickyPosition(isMobile)),
        takeUntil(this._destroy$),
      )
      .subscribe();
  }

  private _updateStickyPosition(mobileMode: boolean): void {
    if(this.mobileSticky) {
      if (mobileMode) {
        this._renderer.addClass(this.getMatTabHeaderEl(), 'fs-tabs-sticky');
      } else {
        this._renderer.removeClass(this.getMatTabHeaderEl(), 'fs-tabs-sticky');
      }
    }
  }

  public abstract getMatTabHeaderEl();

}
