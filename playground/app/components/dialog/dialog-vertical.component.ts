import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { FsMessage } from '@firestitch/message';


@Component({
  templateUrl: 'dialog-vertical.component.html',
  styleUrls: ['dialog-vertical.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogVerticalComponent  {

  public tab = 'tab2';
  public account = { id: 1, name: '', email: '' };

}
