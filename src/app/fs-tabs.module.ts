import { ModuleWithProviders, NgModule } from '@angular/core';

import { FsRouterLinkDirective } from './directives/router-link/router-link.directive';
import { FsTabsHeaderNavDirective } from './directives/tabs-header-nav/tabs-header-nav.directive';
import { FsTabsHeaderTabGroupDirective } from './directives/tabs-header-tab-group/tabs-header-tab-group.directive';
import { FsTabsTabDirective } from './directives/tabs-tab/tabs-tab.directive';
import { FS_TABS_CONFIG } from './fs-tabs-config.provider';
import { IFsTabsConfig } from './interfaces/tabs-config.interface';


@NgModule({
  imports: [],
  declarations: [
    FsRouterLinkDirective,
    FsTabsHeaderTabGroupDirective,
    FsTabsHeaderNavDirective,
    FsTabsTabDirective,
  ],
  exports: [
    FsRouterLinkDirective,
    FsTabsHeaderTabGroupDirective,
    FsTabsHeaderNavDirective,
    FsTabsTabDirective,
  ],
})
export class FsTabsModule {
  static forRoot(config: IFsTabsConfig = { mobileBreakpoint: 600 }): ModuleWithProviders<FsTabsModule> {
    return {
      ngModule: FsTabsModule,
      providers: [
        { provide: FS_TABS_CONFIG, useValue: config },
      ]
    };
  }
}
