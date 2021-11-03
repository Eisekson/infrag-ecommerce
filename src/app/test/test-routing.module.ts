import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [{ path: '', component: TestComponent, children: [{ path: '', redirectTo: 'test1', pathMatch: 'full' }, { path: 'test1', component: Test1Component, data: { text: 'Test1' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule {
}
