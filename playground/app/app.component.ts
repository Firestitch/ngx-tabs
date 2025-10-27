import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FsExampleModule } from '@firestitch/example';
import { VerticalTabsComponent } from './components/vertical-tabs/vertical-tabs.component';
import { VerticalNavTabsComponent } from './components/vertical-nav-tabs/vertical-nav-tabs.component';
import { DialogVerticalTabsComponent } from './components/dialog-vertical-tabs/dialog-vertical-tabs.component';
import { HorizontalLinkTabsComponent } from './components/horizontal-link-tabs/horizontal-link-tabs.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FsExampleModule,
        VerticalTabsComponent,
        VerticalNavTabsComponent,
        DialogVerticalTabsComponent,
        HorizontalLinkTabsComponent,
    ],
})
export class AppComponent {
}
