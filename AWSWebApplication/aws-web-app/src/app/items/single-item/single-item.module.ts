import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MdListModule, MdIconModule, MdInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ItemDisplayComponent } from './item-display/item-display.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { ITEM_ROUTER_MODULE } from './single-item.routes';
import { SharedModule } from '../shared/shared.module';
import { ItemService } from '../services/item-service.service';


@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      MdListModule,
      MdIconModule,
      MdInputModule,
      FlexLayoutModule,
      ITEM_ROUTER_MODULE
  ],
  declarations: [ItemDisplayComponent, ItemEditComponent],
  providers: [ItemService]
})
export class SingleItemModule { }
