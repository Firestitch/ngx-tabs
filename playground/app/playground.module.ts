import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { FsDialogModule } from '@firestitch/dialog';
import { FsExampleModule } from '@firestitch/example';
import { FsLabelModule } from '@firestitch/label';
import { FsMessageModule } from '@firestitch/message';
import { FsTabsModule } from '@firestitch/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import {
  KitchenSinkComponent,
  VerticalNavTabsComponent,
} from './components';
import { DialogVerticalTabsComponent } from './components/dialog-vertical-tabs/dialog-vertical-tabs.component';
import { DialogVerticalComponent } from './components/dialog/dialog-vertical.component';
import { HorizontalLinkTabsComponent } from './components/horizontal-link-tabs/horizontal-link-tabs.component';
import { KitchenSinkConfigureComponent } from './components/kitchen-sink-configure';
import { TabAComponent, TabBComponent, TabCComponent, TabDComponent } from './components/tabs';
import { DialogComponent } from './components/tabs/tab-a/dialog/dialog.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { VerticalTabsComponent } from './components/vertical-tabs/vertical-tabs.component';
import { AppMaterialModule } from './material.module';

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

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FsTabsModule.forRoot({
      mobileSticky: true,
    }),
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
    FsLabelModule,
    FsExampleModule.forRoot(),
    FsMessageModule.forRoot(),
    RouterModule.forRoot(routes, {}),
    FsDialogModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    KitchenSinkComponent,
    KitchenSinkConfigureComponent,
    TabAComponent,
    TabBComponent,
    TabCComponent,
    TabDComponent,
    TabsComponent,
    DialogComponent,
    DialogVerticalTabsComponent,
    DialogVerticalComponent,
    VerticalTabsComponent,
    HorizontalLinkTabsComponent,
    VerticalNavTabsComponent,
  ],
})
export class PlaygroundModule {
}
