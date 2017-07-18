import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ItemDisplayComponent } from './item-display/item-display.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

const appRoutes: Routes = [
    { path: ':id', component: ItemDisplayComponent },
    { path: ':id/edit', component: ItemEditComponent }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(
          appRoutes
      )
  ],
  declarations: [ItemDisplayComponent, ItemEditComponent]
})
export class SingleItemModule { }
