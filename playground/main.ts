import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { environment } from './environments/environment';
import { MAT_TABS_CONFIG } from '@angular/material/tabs';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FsTabsModule } from '@firestitch/tabs';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FsLabelModule } from '@firestitch/label';
import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { provideRouter, Routes } from '@angular/router';
import { KitchenSinkComponent } from './app/components';
import { TabsComponent } from './app/components/tabs/tabs.component';
import { TabAComponent, TabBComponent, TabCComponent, TabDComponent } from './app/components/tabs';
import { FsDialogModule } from '@firestitch/dialog';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  {
    path: '',
    component: KitchenSinkComponent,
  },
  { path: 'tabs',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: 'a', pathMatch: 'full' },
      { path: 'a', component: TabAComponent },
      { path: 'b', component: TabBComponent },
      { path: 'c', component: TabCComponent },
      { path: 'd', component: TabDComponent },
      { path: 'e', component: TabAComponent },
      { path: 'h', component: TabBComponent },
      { path: 'f', component: TabCComponent },
      { path: 'g', component: TabDComponent },
      { path: 'j', component: TabAComponent },

    ],
  },
];



if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, FsTabsModule.forRoot({
            mobileSticky: true,
        }), FormsModule, FsLabelModule, FsExampleModule.forRoot(), FsMessageModule.forRoot(), FsDialogModule.forRoot()),
        {
            provide: MAT_TABS_CONFIG,
            useValue: {
                stretchTabs: false,
            },
        },
        provideAnimations(),
        provideRouter(routes),
    ]
})
  .catch(err => console.error(err));

