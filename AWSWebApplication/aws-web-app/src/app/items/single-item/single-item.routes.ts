import { Routes, RouterModule } from '@angular/router';

import { ItemDisplayComponent } from './item-display/item-display.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

const appRoutes: Routes = [
    { path: ':id', component: ItemDisplayComponent },
    { path: ':id/edit', component: ItemEditComponent }
];

export const ITEM_ROUTER_MODULE = RouterModule.forChild(appRoutes);