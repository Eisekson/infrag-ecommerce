import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxTabsModule, IgxToggleModule, IgxExpansionPanelModule, IgxNavbarModule, IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxAvatarModule, IgxCalendarModule, IgxChipsModule, IgxCheckboxModule, IgxButtonGroupModule, IgxComboModule, IgxSliderModule, IgxSwitchModule, IgxDropDownModule } from 'igniteui-angular';
import { Test1Component } from './test1.component';

describe('Test1Component', () => {
  let component: Test1Component;
  let fixture: ComponentFixture<Test1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Test1Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxTabsModule, IgxToggleModule, IgxExpansionPanelModule, IgxNavbarModule, IgxButtonModule, IgxIconModule, IgxNavigationDrawerModule, IgxAvatarModule, IgxCalendarModule, IgxChipsModule, IgxCheckboxModule, IgxButtonGroupModule, IgxComboModule, IgxSliderModule, IgxSwitchModule, IgxDropDownModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Test1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
