import { InjectionToken } from '@angular/core';

import { IFsTabsConfig } from './interfaces/tabs-config.interface';

export const FS_TABS_CONFIG = new InjectionToken<IFsTabsConfig>('fs-tabs.config');
