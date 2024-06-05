import { ModuleWithProviders, NgModule } from '@angular/core';

import { FsTabNavComponent } from './components/tab-nav/tab-nav.component';
import {
  FsRouterLinkDirective, FsTabsHeaderNavDirective,
  FsTabsHeaderTabGroupDirective, FsTabsTabDirective,
} from './directives';
import { FS_TABS_CONFIG } from './fs-tabs-config.provider';
import { IFsTabsConfig } from './interfaces/tabs-config.interface';


@NgModule({
  imports: [],
  declarations: [
    FsRouterLinkDirective,
    FsTabsHeaderTabGroupDirective,
    FsTabsHeaderNavDirective,
    FsTabsTabDirective,
    FsTabNavComponent,
  ],
  exports: [
    FsRouterLinkDirective,
    FsTabsHeaderTabGroupDirective,
    FsTabsHeaderNavDirective,
    FsTabsTabDirective,
    FsTabNavComponent,
  ],
})
export class FsTabsModule {
  public static forRoot(config?: IFsTabsConfig): ModuleWithProviders<FsTabsModule> {
    config = {
      ...{ 
        mobileBreakpoint: 600,
        mobileSticky: true,
      },
      ...config,
    };

    return {
      ngModule: FsTabsModule,
      providers: [
        { provide: FS_TABS_CONFIG, useValue: config },
      ],
    };
  }
}
