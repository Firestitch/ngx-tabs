import { Directive, Input } from '@angular/core';


@Directive({
    selector: 'mat-tab,matTab',
    exportAs: 'fsTabsTab',
    standalone: true,
})
export class FsTabsTabDirective {
  
  @Input() public name;
  @Input() public data;

}
