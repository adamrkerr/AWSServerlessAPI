import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ItemListComponent } from './item-list/item-list.component';

const appRoutes: Routes = [
    {
        path: '', component: ItemListComponent
    }
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(
          appRoutes
      )
  ],
  declarations: [ItemListComponent],
  exports: [ItemListComponent]
})
export class AllItemsModule { }
