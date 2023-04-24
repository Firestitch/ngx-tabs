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

import { Subject } from 'rxjs';
import { map, takeUntil, tap, } from 'rxjs/operators';

import { FS_TABS_CONFIG } from '../../fs-tabs-config.provider';
import { IFsTabsConfig } from '../../interfaces/tabs-config.interface';

@Directive()
export abstract class FsTabsHeaderBaseDirective implements AfterViewInit, OnDestroy, OnInit {
  
  @Input()
  public mobileSticky;

  protected _destroy$ = new Subject<void>();

  public abstract getMatTabHeaderEl();

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
        tap((isMobile) => this._updateMargins(isMobile)),
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

  private _updateMargins(isMobile) {
    const el = this.getMatTabHeaderEl();
    const margins = this._getMargins(isMobile);
    el.style.marginRight = margins[0];
    el.style.marginLeft = margins[1];
  }

  private _getMargins(isMobile) {
    let margins = [null, null];
    if(isMobile) {
      const el = this._getOffsetElement(this.element);
      if(el) {
        const style = getComputedStyle(el);
        margins = [`-${style.paddingRight}`,`-${style.paddingLeft}`];
      }
    }

    return margins;
  }

  private _getOffsetElement(el) {
    if(el) {
      if(
        el.classList &&
        (
          el.classList.contains('mat-dialog-content') ||
          el.classList.contains('mat-sidenav-content')
        )
      ) {
        return el;
      }

      return this._getOffsetElement(el.parentNode);
    }

    return null;
  }
}
