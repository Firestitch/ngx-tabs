import { Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { FsMessage } from '@firestitch/message';

import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';



@Component({
  templateUrl: 'dialog-vertical.component.html',
  styleUrls: ['dialog-vertical.component.scss']
})
export class DialogVerticalComponent  {

  public tab = 'tab-1';
  public account = { id: 1, name: '', email: '' };

  public constructor(
    private _message: FsMessage,
    private _dialogRef: MatDialogRef<DialogVerticalComponent>
  ) {}

}
