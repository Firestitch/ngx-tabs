import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FsDialogModule } from '@firestitch/dialog';
import { MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { FsTabsHeaderTabGroupDirective } from '../../../../../../src/app/directives/tabs-header-tab-group/tabs-header-tab-group.directive';
import { MatTabGroup, MatTab, MatTabContent } from '@angular/material/tabs';
import { FsTabsTabDirective } from '../../../../../../src/app/directives/tabs-tab/tabs-tab.directive';
import { MatButton } from '@angular/material/button';

@Component({
    templateUrl: './dialog.component.html',
    standalone: true,
    imports: [
        FormsModule,
        FsDialogModule,
        MatDialogTitle,
        CdkScrollable,
        MatDialogContent,
        FsTabsHeaderTabGroupDirective,
        MatTabGroup,
        FsTabsTabDirective,
        MatTab,
        MatTabContent,
        MatDialogActions,
        MatButton,
        MatDialogClose,
    ],
})
export class DialogComponent {

  constructor() {
  }

}
