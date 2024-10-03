import {
  Directive,
  ElementRef,
  Input,
  Optional,
  Self
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatTabLink } from '@angular/material/tabs';


@Directive({
  selector: '[routerLink]',
})
export class FsRouterLinkDirective {

  @Input()
  public replaceUrl: boolean;

  constructor(
    private _elementRef: ElementRef,
    @Optional() @Self() private _matTab: MatTabLink,
    @Optional() @Self() private _routerLink: RouterLink,
  ) {
    this._updateReplaceUrl();
  }

  private _updateReplaceUrl(): void {
    if (this._matTab && this._routerLink && this.replaceUrl === void 0) {
      this._routerLink.replaceUrl = true;
    }
  }
}

