import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { Test1Component } from './test1/test1.component';
import { IgxTabsModule, IgxToggleModule, IgxExpansionPanelModule, IgxNavbarModule, IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxAvatarModule, IgxCalendarModule, IgxChipsModule, IgxCheckboxModule, IgxButtonGroupModule, IgxComboModule, IgxSliderModule, IgxSwitchModule, IgxDropDownModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TestComponent,
    Test1Component
  ],
  imports: [
    CommonModule,
    TestRoutingModule,
    IgxTabsModule,
    IgxToggleModule,
    IgxExpansionPanelModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxAvatarModule,
    IgxCalendarModule,
    IgxChipsModule,
    IgxCheckboxModule,
    IgxButtonGroupModule,
    IgxComboModule,
    IgxSliderModule,
    IgxSwitchModule,
    IgxDropDownModule,
    FormsModule
  ]
})
export class TestModule {
}
