import { Directive, ElementRef, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatTabLink } from '@angular/material/tabs';


@Directive({
    selector: '[routerLink]',
    standalone: true,
})
export class FsRouterLinkDirective {
  private _elementRef = inject(ElementRef);
  private _matTab = inject(MatTabLink, { optional: true, self: true });
  private _routerLink = inject(RouterLink, { optional: true, self: true });


  @Input()
  public replaceUrl: boolean;

  constructor() {
    this._updateReplaceUrl();
  }

  private _updateReplaceUrl(): void {
    if (this._matTab && this._routerLink && this.replaceUrl === void 0) {
      this._routerLink.replaceUrl = true;
    }
  }
}

