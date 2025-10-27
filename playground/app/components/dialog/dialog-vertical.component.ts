import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatDialogRef, MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';

import { FsMessage } from '@firestitch/message';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { FsTabsHeaderTabGroupDirective } from '../../../../src/app/directives/tabs-header-tab-group/tabs-header-tab-group.directive';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { FsTabsTabDirective } from '../../../../src/app/directives/tabs-tab/tabs-tab.directive';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';


@Component({
    templateUrl: 'dialog-vertical.component.html',
    styleUrls: ['dialog-vertical.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        FsTabsHeaderTabGroupDirective,
        MatTabGroup,
        FsTabsTabDirective,
        MatTab,
        MatFormField,
        MatInput,
        FormsModule,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class DialogVerticalComponent  {

  public tab = 'tab2';
  public account = { id: 1, name: '', email: '' };

}
