import { Directive, Input } from '@angular/core';


@Directive({
  selector: 'mat-tab,matTab',
  exportAs: 'fsTabsTab',
})
export class FsTabsTabDirective {
  
  @Input() public name;
  @Input() public data;
  
}
