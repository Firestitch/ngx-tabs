import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogVerticalComponent } from '../dialog/dialog-vertical.component';
import { MatButton } from '@angular/material/button';


@Component({
    selector: 'dialog-vertical-tabs',
    templateUrl: 'dialog-vertical-tabs.component.html',
    styleUrls: ['dialog-vertical-tabs.component.scss'],
    standalone: true,
    imports: [MatButton]
})
export class DialogVerticalTabsComponent {

  public constructor(
    private _dialog: MatDialog
  ) {}

  public open() {
    this._dialog.open(DialogVerticalComponent);
  }
}
