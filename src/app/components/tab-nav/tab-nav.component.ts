import { ChangeDetectionStrategy, Component } from '@angular/core';


@Component({
    selector: 'fs-tab-nav',
    templateUrl: './tab-nav.component.html',
    styleUrls: ['./tab-nav.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class FsTabNavComponent {

}
