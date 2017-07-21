import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MdListModule, MdIconModule, MdInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ItemListComponent } from './item-list/item-list.component';
import { SharedModule } from '../shared/shared.module';
import { ItemService } from '../services/item-service.service';

const appRoutes: Routes = [
    {
        path: '', component: ItemListComponent
    }
];

@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      MdListModule,
      MdIconModule,
      MdInputModule,
      FlexLayoutModule,
      RouterModule.forChild(
          appRoutes
      )
  ],
  declarations: [ItemListComponent],
  exports: [ItemListComponent],
  providers: [ItemService]
})
export class AllItemsModule { }
